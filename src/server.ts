import {
  askForCredential,
  askForMainPassword,
  chooseCommand,
  chooseService,
} from './utils/questions';
import { isMainPasswordValid } from './utils/validation';
import { readCredentials, writeCredentials } from './utils/credentials';
import CryptoJS from 'crypto-js';

const start = async () => {
  let mainPassword = await askForMainPassword();
  while (!(await isMainPasswordValid(mainPassword))) {
    console.log('Is invalid!');
    mainPassword = await askForMainPassword();
  }
  console.log('Is valid!');

  const command = await chooseCommand();

  switch (command) {
    case 'list':
      {
        const credentials = await readCredentials();
        const credentialServices = credentials.map(
          (credential) => credential.service
        );
        const service = await chooseService(credentialServices);
        const selectedService = credentials.find(
          (credential) => credential.service === service
        );

        if (selectedService !== undefined) {
          selectedService.password = CryptoJS.AES.decrypt(
            selectedService.password,
            mainPassword
          ).toString(CryptoJS.enc.Utf8);
          console.log(selectedService);
        }
      }
      break;
    case 'add':
      {
        const newCredential = await askForCredential();
        writeCredentials(mainPassword, newCredential);
        console.log('new credential added');
      }

      break;
  }
};
start();
