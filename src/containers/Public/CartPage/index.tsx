import * as React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import CartComponent from './CartComponent'
import { observer } from 'mobx-react'

const Cart = () => {
  return (
    <>
      <Header />
      <CartComponent />
      <Footer />
    </>
  )
}

export default Cart
