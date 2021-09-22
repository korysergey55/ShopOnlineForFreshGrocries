import * as React from 'react'
import styles from './styles.module.scss'
import Header from 'components/Header'
import HeroProductsDatails from '../ProductDetailsPage/HeroProductsDatails/index'
import NewProductDetails from './newProductDetails'
import CustomersSaying from '../Main/CustomersSaying'
import Footer from 'components/Footer'
import RelatedProducts from './RelatedProducts'

const index = () => {
  return (
    <>
      <div className={styles.headerHeroContainer}>
        <div className={styles.headerLeftBg}></div>
        <Header />
        <HeroProductsDatails />
      </div>
      <NewProductDetails />
      <RelatedProducts />
      <CustomersSaying />
      <Footer />
    </>
  )
}

export default index
