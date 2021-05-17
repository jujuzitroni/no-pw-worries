import fs from 'fs/promises';
import type { Credential } from '../types';
import CryptoJS from 'crypto-js';

type DB = {
  credentials: Credential[];
};

export const readCredentials = async (): Promise<Credential[]> => {
  const response = await fs.readFile('./db.json', 'utf-8');
  const data: DB = JSON.parse(response);
  return data.credentials;
};

export const writeCredentials = async (
  mainPassword: string,
  newCredential: Credential
): Promise<void> => {
  const oldCredentials: Credential[] = await readCredentials();

  newCredential.password = CryptoJS.AES.encrypt(
    newCredential.password,
    mainPassword
  ).toString();

  const newDB: DB = { credentials: [...oldCredentials, newCredential] };
  await fs.writeFile('./db.json', JSON.stringify(newDB, null, 2));
};
