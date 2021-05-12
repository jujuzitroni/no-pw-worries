import { printPassword } from './utils/messages';
import {
  askForCredential,
  askForMainPassword,
  chooseCommand,
  chooseService,
} from './utils/questions';
import { isMainPasswordValid } from './utils/validation';

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
        const service = await chooseService(['Github', 'Codewars', 'Google']);
        printPassword(service);
      }
      break;
    case 'add':
      {
        const newCredential = await askForCredential();
        console.log(newCredential);
      }

      break;
  }
};
start();
