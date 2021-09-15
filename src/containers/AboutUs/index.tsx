import * as React from 'react'
import styles from './styles.module.scss'
const AboutUs = () => {
  return (
    <>
      <section className={styles.aboutUsBackground}>
        <div className={styles.aboutUsBackgroundRigthSide}></div>
        <div className={styles.container}>
          <div className={styles.aboutUs}>
            <h3 className={styles.aboutUs_subtitle}>About Us</h3>
            <h2 className={styles.aboutUs_title}>
              We Provide You The Best Experience
            </h2>
            <p className={styles.aboutUs_text}>
              Neque porro quisquam est aui dolorem iesum ruia dolor sit amet,
              consectetur, adipisci velit, sed quia non numua eius modi tempora
              incidunt ut labore et dolore magnam volutatem exercitationem
              ullam.
              <br />
              <br />
              Quis autem vel eum iure reprehenderit aui in ea voluptae velit
              esse quam nihil molestiae consequatur, vel illum rui dolorem eum
              fugiat quo voluptas.
            </p>
            <button type="button" className={styles.aboutUs_button}>
              Read More
            </button>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default AboutUs
