import * as React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
{/* <FontAwesomeIcon icon={faArrowRight} className={styles.icon} /> */}
// import { Checkbox } from 'antd'

const MainShop = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>MainShop</h2>
          <div className={styles.topContainer}>
            <input
              className={styles.search}
              type="text"
              placeholder="Search "
            ></input>
            <button className={styles.sortBtn} type="button"></button>
            <button className={styles.sortBtnL} type="button"></button>
            <p className={styles.text}>Showing 1–18 of 24 results</p>
            <input
              className={styles.search}
              type="select"
              placeholder="Default Sorting"
            ></input>
          </div>

          <div className={styles.shopMainContainer}>
            <div className={styles.leftContainer}>
              <div className={styles.checkboxContainer}>
                <h2 className={styles.title}>Categories</h2>
              </div>
            </div>

            <div className={styles.rigthContainer}></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainShop
