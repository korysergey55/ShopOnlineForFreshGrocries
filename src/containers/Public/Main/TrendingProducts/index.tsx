import * as React from 'react'
import styles from './styles.module.scss'
import IProduct from 'models/product'
import ProductComponent from '../ProductComponent/index'
import trendingProductsJSON from '../../../../sources/products/trendingProducts'
import BunnerImg from '../../../../sources/images/prendingProducts/bunner.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const TrendingProducts = () => {
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.subtitle}>Most Popular</h3>
        <h2 className={styles.title}>Trending Products</h2>
        <ul className={styles.list}>
          {trendingProductsJSON &&
            trendingProductsJSON.map((product: IProduct) => (
              <ProductComponent product={product} key={product.id} />
            ))}
        </ul>
        <div className={styles.baner}>
          <div className={styles.leftSide}>
            <p className={styles.text}>
              50% <span className={styles.span}>OFf</span>{' '}
            </p>
            <button className={styles.button}>
              Shop now {''}
              <FontAwesomeIcon
                icon={faArrowRight}
                className={styles.iconArrow}
              />
            </button>
          </div>
          <h2 className={styles.baner_title}>Popular and Trending Products</h2>
          <img className={styles.baner_img} src={BunnerImg} alt="Bunner"></img>
        </div>
      </div>
    </>
  )
}
export default TrendingProducts
