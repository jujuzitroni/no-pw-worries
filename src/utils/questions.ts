import inqurirer from 'inquirer';

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
