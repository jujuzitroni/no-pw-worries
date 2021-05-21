import React from 'react';
import styles from './App.module.css';
import Credential from './components/Credential';

function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <h1>no-pw-worries</h1>
      <h2>Subtitle</h2>
      <main>
        <ul>
          <Credential service="GitHub" username="Juju" password="123" />
          <Credential
            service="Netflix"
            username="Magic Daniel"
            password="123"
          />
          <Credential service="Google" username="Roman" password="123" />
          <Credential service="Test" username="Bla" password="123" />
        </ul>
      </main>
    </div>
  );
}

export default App;
