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
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <img src={imgSrc} alt="" />
    </header>
  );
}

export default Hero;
