import inqurirer from 'inquirer';
import type { Command, Credential } from '../types';

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

// export const addService = async (): Promise<string> => {
//   return inqurirer
//   .prompt([
//     {
//       type: 'text',
//       name: 'service',
//       message: 'Enter service',
//     },
//     {
//       type: 'text',
//       name: 'username',
//       message: 'Enter username',
//     },
//     {
//       type: 'password',
//       name: 'password',
//       message: 'Enter password',
//     },
//   ]);
//   .then((answers) => answers )
// };

export const askForCredential = async (): Promise<Credential> => {
  const answers = await inqurirer.prompt<Credential>([
    {
      type: 'input',
      name: 'service',
      message: 'Enter service',
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter username',
    },
    {
      type: 'password',
      name: 'password',
      message: 'Enter password',
    },
  ]);
  return answers;
};
