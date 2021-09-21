import * as React from 'react'
import styles from './styles.module.scss'
import Header from 'components/Header'
const index = () => {
  return (
    <>
      <div className={styles.headerHeroContainer}>
        <div className={styles.headerLeftBg}></div>
        <Header />
        {/* <Hero /> */}
      </div>
      <h2 className="title">ProductDetailsPage</h2>
    </>
  )
}

export default index
