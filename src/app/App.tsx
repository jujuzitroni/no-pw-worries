import React from 'react';
import styles from './App.module.css';
import Credential from './components/Credential';
import Hero from './components/Hero';

function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <Hero
        title="no-pw-worries"
        subtitle="be secure"
        imgSrc="https://images.unsplash.com/photo-1617440168937-c6497eaa8db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      />

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
