import * as React from 'react'
import styles from './styles.module.scss'
import LayerImg from '../../../../sources/images/Main/products/Layer.png'
import LayerImg2 from '../../../../sources/images/Main/products/Layer2.png'
import LayerImg3 from '../../../../sources/images/Main/products/Layer3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Products = () => {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.productsList}>
          <li className={styles.productsItem1}>
            <h3 className={styles.productsTitle}>
              Get Every Vegetable You Need
            </h3>
            <button type="button" className={styles.productsList_shopNow}>
              Shop now{' '}
              <FontAwesomeIcon
                icon={faArrowRight}
                className={styles.productsList_shopNow_icon}
              />
            </button>
            <img
              className={styles.productsImage1}
              src={LayerImg}
              alt="Layer"
            ></img>
          </li>
          <li className={styles.productsItem2}>
            <h3 className={styles.productsTitle}>
              We Have Best Beverages Collection
            </h3>
            <button type="button" className={styles.productsList_shopNow}>
              Shop now{' '}
              <FontAwesomeIcon
                icon={faArrowRight}
                className={styles.productsList_shopNow_icon}
              />
            </button>
            <img
              className={styles.productsImage2}
              src={LayerImg2}
              alt="Layer2"
            ></img>
          </li>
          <li className={styles.productsItem3}>
            <h3 className={styles.productsTitle}>Beauty And Health Products</h3>
            <button type="button" className={styles.productsList_shopNow}>
              Shop now{' '}
              <FontAwesomeIcon
                icon={faArrowRight}
                className={styles.productsList_shopNow_icon}
              />
            </button>
            <img
              className={styles.productsImage3}
              src={LayerImg3}
              alt="Layer3"
            ></img>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Products
