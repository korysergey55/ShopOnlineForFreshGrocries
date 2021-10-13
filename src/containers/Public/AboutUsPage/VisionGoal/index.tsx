import * as React from 'react'
import styles from './styles.module.scss'
import visionImg from 'sources/images/AboutUsPage/vision.png'
import goalImg from 'sources/images/AboutUsPage/goal.png'
  
const VisionGoal = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.wripper}>
            <div className={styles.box}>
              <img className={styles.img} src={visionImg} alt="visionImg"></img>
              <h3 className={styles.title}>Our Vision</h3>
              <p className={styles.text}>
                Neque porro quisquam est aui dolorem iesum ruia sit amet,
                consectetur, adipisci velit, sed quia non eius modi tempora
                incidunt ut labore et dolore ma volutatem exercitationem ullam.
              </p>
              <button className={styles.button} type="button">
                Shop Now
              </button>
            </div>
            <div className={styles.box}>
              <img className={styles.img} src={goalImg} alt="goalImg"></img>
              <h3 className={styles.title}>Our Goal</h3>
              <p className={styles.text}>
                Neque porro quisquam est aui dolorem iesum ruia sit amet,
                consectetur, adipisci velit, sed quia non eius modi tempora
                incidunt ut labore et dolore ma volutatem exercitationem ullam.
              </p>
              <button className={styles.button} type="button">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default VisionGoal
