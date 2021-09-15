import * as React from 'react'
import styles from './styles.module.scss'
import Header from '../Header/index'
import Hero from '../Hero/index'
import Products from '../Products/index'
import TrendingProducts from '../TrendingProducts/index'

const Home = () => {
  return (
    <>
      <div className={styles.headerHeroContainer}>
        <Header />
        <Hero />
      </div>
      <Products />
      <TrendingProducts/>
    </>
  )
}

export default Home
