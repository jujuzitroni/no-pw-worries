import React from 'react';
import styles from './Hero.module.css';

type HeroProps = {
  title: string;
  subtitle: string;
  imgSrc: string;
};

function Hero({ title, subtitle, imgSrc }: HeroProps): JSX.Element {
  return (
    <header className={styles.hero}>
      <img src={imgSrc} alt="" />
      <h1 className={styles.hero_text}>{title}</h1>
      <h2 className={styles.hero_text}>{subtitle}</h2>
    </header>
  );
}

export default Hero;
