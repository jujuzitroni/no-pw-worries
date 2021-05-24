import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Credential from './components/Credential';
import Hero from './components/Hero';
import { Credential as CredentialType } from '../types';

function App(): JSX.Element {
  const [credentials, setCredentials] = useState<CredentialType[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/credentials')
      .then((response) => response.json())
      .then((credentials) => setCredentials(credentials));
  }, []);

  const credentialElements = credentials.map((credential) => (
    <Credential key={credential.service} credential={credential} />
  ));

  return (
    <div className={styles.App}>
      <Hero
        title="no-pw-worries"
        subtitle="be secure"
        imgSrc="https://images.unsplash.com/photo-1584447128309-b66b7a4d1b63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=977&q=80"
      />

      <main>
        <ul>{credentialElements}</ul>
      </main>
    </div>
  );
}

export default App;
