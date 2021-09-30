import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import Header from 'components/Header'
import HeroShop from './HeroShop'
import MainShop from './MainShop'
import Footer from 'components/Footer'
import CustomersSaying from '../Main/CustomersSaying'
import { allProductsJSON } from 'sources/products/allProducts'
import { useStore } from 'stores'
import { toJS } from 'mobx'

const Shop = () => {
  const { productStore, productStoreAPI } = useStore()
  
  useEffect(() => {
    productStore.setAllProducts(allProductsJSON)
    productStoreAPI.fetchAllProductAPI(allProductsJSON)
  }, [])

  return (
    <>
      <div className={styles.headerHeroContainer}>
        <div className={styles.headerLeftBg}></div>
        <Header />
        <HeroShop />
      </div>
      <MainShop />
      <CustomersSaying />
      <Footer />
    </>
  )
}

export default Shop
