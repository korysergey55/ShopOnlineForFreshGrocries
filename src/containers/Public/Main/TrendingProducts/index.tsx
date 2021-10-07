import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import BunnerImg from '../../../../sources/images/Main/trendingProducts/bunner.png'
import IProduct from 'models/product'
import ProductComponent from '../ProductComponent/index'
import trendingProductsJSON from '../../../../sources/products/trendingProducts'
import relatedProductsJSON from '../../../../sources/products/trendingProducts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useStore } from 'stores'
import { observer } from 'mobx-react'


const TrendingProducts = observer(() => {
  const { productStore } = useStore();
  const { trendingProducts } = productStore

  useEffect(() => {
    productStore.setTrendingProduct(trendingProductsJSON)
     productStore.setRelatedProduct(relatedProductsJSON)
  }, [productStore])

  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.subtitle}>Most Popular</h3>
        <h2 className={styles.title}>Trending Products</h2>
        <ul className={styles.list}>
          {trendingProducts &&
            trendingProducts.map((product: IProduct) => (
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
          <h2 className={styles.title}>Popular and Trending Products</h2>
          <img className={styles.img} src={BunnerImg} alt="Bunner"></img>
        </div>
      </div>
    </>
  )
})
export default TrendingProducts
