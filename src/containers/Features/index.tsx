import * as React from 'react'
import styles from './styles.module.scss'
import feature1 from '../../sources/images/features/features1.png'
import feature2 from '../../sources/images/features/features2.png'
import feature3 from '../../sources/images/features/features3.png'
import feature4 from '../../sources/images/features/features4.png'
import cart from '../../sources/images/features/featuresCart.png'

const Features = () => {
  return (
    <>
      <section className={styles.features}>
        <div className={styles.container}>
          <ul className={styles.features_list}>
            <li className={styles.features_item}>
              <img className={styles.features_img} src={feature1} alt="" />
              <h3 className={styles.features_title}>Quality Products</h3>
              <p className={styles.features_text}>
                Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci
                eius modi incidunt
              </p>
            </li>

            <li className={styles.features_item}>
              <img className={styles.features_img} src={feature2} alt="" />
              <h3 className={styles.features_title}>Online Order</h3>
              <p className={styles.features_text}>
                Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci
                eius modi incidunt
              </p>
            </li>
          </ul>
          <ul className={styles.features_list}>
            <li className={styles.features_item}>
              <img className={styles.features_img} src={feature3} alt="" />
              <h3 className={styles.features_title}>Fast Delivery</h3>
              <p className={styles.features_text}>
                Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci
                eius modi incidunt
              </p>
            </li>

            <li className={styles.features_item}>
              <img className={styles.features_img} src={feature4} alt="" />
              <h3 className={styles.features_title}>24/7 Service</h3>
              <p className={styles.features_text}>
                Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci
                eius modi incidunt
              </p>
            </li>
          </ul>
          <div className={styles.features_imgContainer}>
            <img className={styles.features_mainImg} src={cart} alt="" />
            <button className={styles.features_btn} type="button">Shop now</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
