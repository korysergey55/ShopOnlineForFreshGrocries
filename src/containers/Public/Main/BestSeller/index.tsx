import * as React from 'react'
import styles from './styles.module.scss'
import IProduct from 'models/product'
import ProductComponent from '../ProductComponent'
import bestSellerProductsJSON from '../../../../sources/products/bestSellerProducts'

const BestSeller = () => {
  return (
    <>
      <section className={styles.bestSeller}>
        <div className={styles.container}>
          <p className={styles.subtitle}>Best Seller</p>
          <h2 className={styles.title}>Featured Products</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.link}>All </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link}>Food</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link}> Fruits</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link}>Health</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link}>Meat</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link}>Dairy</a>
            </li>
          </ul>

          <ul className={styles.productsList}>
            {bestSellerProductsJSON &&
              bestSellerProductsJSON.map((product: IProduct) => (
                <ProductComponent product={product} key={product.id} />
              ))}
          </ul>
        </div>
        <div className={styles.leftBg}></div>
      </section>
    </>
  )
}

export default BestSeller
