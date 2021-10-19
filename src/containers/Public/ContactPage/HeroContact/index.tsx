import * as React from 'react';
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const HeroContact = () => {
  return (
    <>
     <div className={styles.container}>
        <div className={styles.heroContainer}>
          <h3 className={styles.subtitle}>
            Home <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />{' '}
            Contact
          </h3>
          <h2 className={styles.title}>Contact</h2>
        </div>
      </div>
    </>
  );
}

export default HeroContact;