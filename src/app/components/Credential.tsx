import React from 'react';
import styles from './Credential.module.css';
import { Credential as CredentialType } from '../../types';

// type CredentialProps = {
//   service: string;
// };

function Credential(credential: CredentialType): JSX.Element {
  return (
    <li className={styles.credential}>
      <div className={styles.service}>
        <span>{credential.service}</span>
        <span>{credential.username}</span>
        <button className={styles.button}>X</button>
        <button>Show details</button>
      </div>
      <div className={styles.pw}>
        <span>{credential.password}</span>
      </div>
    </li>
  );
}

export default Credential;

// ------

// <main>
//     <ul>
//         <li>
//             <div>
//                <span>service</span>
//                <span>username</span>
//                <button></button>
//                <button></button>
//             </div>
//           <div>
//                <span>PW</span>
//             </div>
//         </li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//     </ul>
// </main>
