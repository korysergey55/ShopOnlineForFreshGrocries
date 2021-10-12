import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import IProduct from 'models/product'
import ProductComponent from '../ProductComponent'
import bestSellerProductsJSON from '../../../../sources/products/bestSellerProducts'

import { useStore } from 'stores'
import { observer } from 'mobx-react'

const BestSeller = observer(() => {
  const { productStore } = useStore()
  const { bestProducts } = productStore

  useEffect(() => {
    productStore.setBestProduct(bestSellerProductsJSON)
  }, [productStore])
  return (
    <>
      <section className={styles.bestSeller}>
        <div className={styles.container}>
          <p className={styles.subtitle}>Best Seller</p>
          <h2 className={styles.title}>Featured Products</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.link} href="/">
                All{' '}
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">
                Food
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">
                {' '}
                Fruits
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">
                Health
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">
                Meat
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">
                Dairy
              </a>
            </li>
          </ul>

          <ul className={styles.productsList}>
            {bestProducts &&
              bestProducts.map((product: IProduct) => (
                <ProductComponent
                  product={product}
                  colorItem={true}
                  key={product.id}
                />
              ))}
          </ul>
        </div>
        <div className={styles.leftBg}></div>
      </section>
    </>
  )
})

export default BestSeller
