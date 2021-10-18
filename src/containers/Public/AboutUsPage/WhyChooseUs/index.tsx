import * as React from 'react'
import styles from './styles.module.scss'
import iconImg from 'sources/images/AboutUsPage/whyChoseUs/icon.png'
import icon1Img from 'sources/images/AboutUsPage/whyChoseUs/icon1.png'
import icon2Img from 'sources/images/AboutUsPage/whyChoseUs/icon2.png'
import icon3Img from 'sources/images/AboutUsPage/whyChoseUs/icon3.png'
import whyChooseUsImg from 'sources/images/AboutUsPage/whyChoseUs/whyChooseUs.png'

const WhyChooseUs = () => {
  return (
    <>
      <section className={styles.whyChooseUs}>
        <div className={styles.container}>
          <h2 className={styles.title}>Why Choose Us</h2>
          <div className={styles.wripper}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <img className={styles.img} src={iconImg} alt="Img" />
                <h3 className={styles.title}>Quality Products</h3>
                <p className={styles.text}>
                  Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci
                  eius modi incidunt
                </p>
              </li>

              <li className={styles.item}>
                <img className={styles.img} src={icon1Img} alt="Img" />
                <h3 className={styles.title}>Online Order</h3>
                <p className={styles.text}>
                  Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci
                  eius modi incidunt
                </p>
              </li>
            </ul>
            <div className={styles.imgContainer}>
              <img
                className={styles.mainImg}
                src={whyChooseUsImg}
                alt="CartImg"
              />
            </div>
            <ul className={styles.list}>
              <li className={styles.item}>
                <img className={styles.img} src={icon2Img} alt="Img" />
                <h3 className={styles.title}>Fast Delivery</h3>
                <p className={styles.text}>
                  Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci
                  eius modi incidunt
                </p>
              </li>

              <li className={styles.item}>
                <img className={styles.img} src={icon3Img} alt="Img" />
                <h3 className={styles.title}>24/7 Service</h3>
                <p className={styles.text}>
                  Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci
                  eius modi incidunt
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyChooseUs
