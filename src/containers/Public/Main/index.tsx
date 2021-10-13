import React from 'react'
import styles from './styles.module.scss'
import Header from '../../../components/Header/index'
import Hero from './Hero/index'
import Products from './Products/index'
import TrendingProducts from './TrendingProducts/index'
import AboutUs from './AboutUs/index'
import Features from './Features/index'
import BestSeller from './BestSeller/index'
import CustomersSaying from './CustomersSaying/index'
import Footer from '../../../components/Footer/index'

const Main = () => {
  return (
    <>
      <div className={styles.headerHeroContainer}>
        <div className={styles.headerLeftBg}></div>
        <Header />
        <Hero />
      </div>
      <Products />
      <TrendingProducts />
      <AboutUs />
      <Features />
      <BestSeller />
      <CustomersSaying />
      <Footer />
    </>
  )
}

export default Main
