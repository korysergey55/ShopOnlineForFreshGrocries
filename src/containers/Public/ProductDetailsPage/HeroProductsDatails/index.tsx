import React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const HeroProductsDatails = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heroContainer}>
          <h3 className={styles.subtitle}>
            Home <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />{' '}
            Product Detail
          </h3>
          <h2 className={styles.title}>Product Detail</h2>
        </div>
        <div className={styles.img}></div>
      </div>
    </>
  )
}

export default HeroProductsDatails
