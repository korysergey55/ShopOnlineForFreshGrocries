import * as React from 'react'
import styles from './styles.module.scss'
import FeatureImg from '../../../../sources/images/Main/features/features1.png'
import Feature2Img from '../../../../sources/images/Main/features/features2.png'
import Feature3Img from '../../../../sources/images/Main/features/features3.png'
import Feature4Img from '../../../../sources/images/Main/features/features4.png'
import CartImg from '../../../../sources/images/Main/features/featuresCart.png'

const Features = () => {
  return (
    <>
      <section className={styles.features}>
        <div className={styles.container}>
          <ul className={styles.features_list}>
            <li className={styles.features_item}>
              <img
                className={styles.features_img}
                src={FeatureImg}
                alt="FeatureImg"
              />
              <h3 className={styles.features_title}>Quality Products</h3>
              <p className={styles.features_text}>
                Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci
                eius modi incidunt
              </p>
            </li>

            <li className={styles.features_item}>
              <img
                className={styles.features_img}
                src={Feature2Img}
                alt="Feature2Img"
              />
              <h3 className={styles.features_title}>Online Order</h3>
              <p className={styles.features_text}>
                Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci
                eius modi incidunt
              </p>
            </li>
          </ul>
          <div className={styles.features_imgContainer}>
            <img
              className={styles.features_mainImg}
              src={CartImg}
              alt="CartImg"
            />
            <button className={styles.features_btn} type="button">
              Shop now
            </button>
          </div>
          <ul className={styles.features_list}>
            <li className={styles.features_item}>
              <img
                className={styles.features_img}
                src={Feature3Img}
                alt="Feature3Img"
              />
              <h3 className={styles.features_title}>Fast Delivery</h3>
              <p className={styles.features_text}>
                Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci
                eius modi incidunt
              </p>
            </li>

            <li className={styles.features_item}>
              <img
                className={styles.features_img}
                src={Feature4Img}
                alt="Feature4Img"
              />
              <h3 className={styles.features_title}>24/7 Service</h3>
              <p className={styles.features_text}>
                Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci
                eius modi incidunt
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Features
