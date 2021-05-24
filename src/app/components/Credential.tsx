import React from 'react';
import styles from './Credential.module.css';
import { Credential as CredentialType } from '../../types';

type CredentialProps = {
  credential: CredentialType;
};

function Credential({ credential }: CredentialProps): JSX.Element {
  return (
    <li className={styles.credential}>
      <div className={styles.service}>
        <span>service: {credential.service}</span>
        <span>username: {credential.username}</span>
        <button className={styles.button}>X</button>
        <button className={styles.button}>show PW</button>
      </div>
      <div className={styles.pw}>
        <span>password: {credential.password}</span>
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
