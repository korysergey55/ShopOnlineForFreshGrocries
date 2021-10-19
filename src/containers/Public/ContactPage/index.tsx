import * as React from 'react'
import styles from './styles.module.scss'
import Header from 'components/Header'
import HeroContact from './HeroContact'
import CustomersSaying from '../Main/CustomersSaying'
import Footer from 'components/Footer'
import ContactForm from './ContactForm'

const ContactPage = () => {
  return (
    <>
      <div className={styles.headerHeroContainer}>
        <div className={styles.headerLeftBg}></div>
        <Header />
        <HeroContact/>
      </div>
      <ContactForm/>
      <CustomersSaying/>
      <Footer/>
    </>
  )
}

export default ContactPage
