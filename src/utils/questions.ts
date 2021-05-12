import inqurirer from 'inquirer';
import { Command } from '../types';

export const askForMainPassword = (): Promise<string> => {
  return inqurirer
    .prompt<{ mainPassword: string }>([
      {
        type: 'password',
        name: 'mainPassword',
        message: 'Enter main password',
      },
    ])
    .then((answers) => answers.mainPassword);
};

export const chooseCommand = async (): Promise<Command> => {
  const answers = await inqurirer.prompt<{ command: Command }>({
    type: 'list',
    name: 'command',
    message: 'What do you want to do?',
    choices: [
      { name: 'List all credentials', value: 'list' },
      { name: 'Add new credential', value: 'add' },
    ],
  });
  return answers.command;
};

export const chooseService = async (services: string[]): Promise<string> => {
  const answers = await inqurirer.prompt<{ service: string }>({
    type: 'list',
    name: 'service',
    message: 'Please choose a service',
    choices: services,
  });
  return answers.service;
};
