import React from 'react';
import styles from './styles.module.scss'

const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.welcome}>Welcome To Our Grocery Store</h2>
        <h1 className={styles.heroTitle}>Shop Online For Fresh Grocries</h1>
        <p className={styles.titleText}>Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. </p>
          <button className={styles.shopNow} type='button'>Shop now</button>
          <button className={styles.readMore} type='button'>Read More</button>
      </div>
    </>
  );
}

export default Hero;