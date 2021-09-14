import * as React from 'react'
import styles from './styles.module.scss'
import LayerImg from '../../sources/images/Layer.png'

const Products = () => {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.productsList}>
          <li className={styles.productsItem1}>
            <h3 className={styles.productsTitle}>Get Every  Vegetable You Need</h3>
            <a className={styles.shopNow} href="">Shop now -></a>
            <img className={styles.productsImage1} src={LayerImg}></img>
          </li>
          <li className={styles.productsItem2}>
            <h3 className={styles.productsTitle}>We Have Best Beverages Collection</h3>
            <a className={styles.shopNow} href="">Shop now -></a>
            <img className={styles.productsImage2} src='../../sources/images/Layer2.png'></img>
          </li>
          <li className={styles.productsItem3}>
            <h3 className={styles.productsTitle}>Beauty And Health Products</h3>
            <a className={styles.shopNow} href="">Shop now -></a>
            <img className={styles.productsImage3} src='../../sources/images/Layer3.png'></img>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Products
