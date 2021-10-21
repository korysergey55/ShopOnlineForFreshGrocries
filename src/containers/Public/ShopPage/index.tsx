import React from 'react'
import styles from './styles.module.scss'
import Header from 'components/Header'
import HeroShop from './HeroShop'
import MainShop from './MainShop'
import Footer from 'components/Footer'
import CustomersSaying from '../Main/CustomersSaying'
import { observer } from 'mobx-react'

const Shop = observer(() => {
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
})

export default Shop
