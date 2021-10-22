import React, { useState, useEffect } from 'react'
import IProduct from 'models/product'
import styles from './styles.module.scss'
import ProductComponent from 'containers/Public/Main/ProductComponent'
import { useStore } from 'stores'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'

const CartComponent = observer(() => {
  const { productStore } = useStore()

  const findProductCart = () => {
    const cartArr: IProduct[] = []
    const unq = Array.from(new Set(productStore.cart))
    unq.forEach(key => {
      const item = productStore.allProducts.find(v => v.id === key)
      if (item) {
        cartArr.push({
          ...item,
          qantity: productStore.cart.filter(product => product === item.id)
            .length,
        })
      }
    })
    return cartArr
  }
  const [cartProducts, setCartProducts] = useState(findProductCart())

  useEffect(() => {
    setCartProducts(findProductCart())
  }, [productStore.cart, productStore.allProducts])

  console.log('cart', toJS(productStore.cart))
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cartContainer}>
          <ul className={styles.list}>
            {cartProducts.length ? (
              cartProducts.map(product => (
                <ProductComponent
                  product={product}
                  width={true}
                  key={product.id}
                  btnRemoveFromCart={true}
                />
              ))
            ) : (
              <h2 className={styles.title}>Cart is empty!</h2>
            )}
          </ul>
        </div>
      </div>
    </>
  )
})

export default CartComponent
