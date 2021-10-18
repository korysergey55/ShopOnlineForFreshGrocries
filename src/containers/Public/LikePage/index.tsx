import * as React from 'react'
import styles from './styles.module.scss'
import Header from 'components/Header'
import Footer from 'components/Footer'
import LikesComponent from './LikesComponent'

const LikePage = () => {
  return (
    <>
      <Header />
      <LikesComponent />
      <Footer />
    </>
  )
}

export default LikePage
