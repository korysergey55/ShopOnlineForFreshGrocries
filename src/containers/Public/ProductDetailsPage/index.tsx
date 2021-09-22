import * as React from 'react'
import styles from './styles.module.scss'
import Header from 'components/Header'
import HeroProductsDatails from '../ProductDetailsPage/HeroProductsDatails/index'
import ProductDetails from '../ProductDetailsPage/ProductDetails/index'
import NewProductDetails from './newProductDetails'

const index = () => {
  return (
    <>
      <div className={styles.headerHeroContainer}>
        <div className={styles.headerLeftBg}></div>
        <Header />
        <HeroProductsDatails />
      </div>
      {/* <ProductDetails /> */}
      <NewProductDetails />
    </>
  )
}

export default index
