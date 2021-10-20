import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import IProduct from '../../../../models/product'
import { useHistory, useLocation } from 'react-router'
import classnames from 'classnames'
import { useStore } from 'stores'
import { toJS } from 'mobx'

interface IProductProps {
  product: IProduct
  width?: boolean
  colorItem?: boolean
  likeStyle?: boolean
  key?: string
}

const ProductComponent: React.FC<IProductProps> = ({
  product,
  width,
  colorItem,
  likeStyle = false,
}) => {
  const history = useHistory()
  const location = useLocation()
  const { productStore } = useStore()
  const [activeClass, setActive] = useState(likeStyle)
  const [btnRemoveFromCart, setBtnRemoveFromCart] = useState(false)

  useEffect(() => {
    if (location.pathname === '/cart') {
      setBtnRemoveFromCart(true)
    }
  }, [location.pathname])

  const productsDetails = () => {
    history.push({
      pathname: `/product/${product.id}`,
      state: { from: location.pathname },
    })
    localStorage.setItem('product', JSON.stringify(product))
  }

  const setLike = () => {
    setActive(!activeClass)
    if (productStore.likes.includes(product.id)) {
      productStore.removeLike(product.id)
    } else {
      productStore.setLike(product.id)
    }
    console.log('likes', toJS(productStore.likes))
  }

  const addToCart = () => {
    productStore.addtoCart(product)
    console.log('cart', toJS(productStore.cart))
  }
  const removeFromCart = (id: any) => {
    productStore.removeFromCart(id)
  }
  return (
    <>
      <li
        className={classnames({
          [styles.li]: true,
          [styles.spesialWidth]: width,
          [styles.colorItem]: colorItem,
        })}
        onClick={productsDetails}
      >
        {product.hot ? <p className={styles.hot}>{product.hot}</p> : null}
        <a
          className={classnames({
            [styles.like]: true,
            [styles.likeActive]: activeClass,
          })}
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            setLike()
          }}
          href="/"
        >
          <FontAwesomeIcon icon={faHeart} className={styles.icon} />
        </a>
        <img className={styles.img} src={product.img} alt={product.text}></img>
        <ul className={styles.starsList}>
          <li className={styles.item}>
            <a className={styles.link} href="/">
              <FontAwesomeIcon
                icon={product.star}
                className={styles.starIcon}
              />
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="/">
              <FontAwesomeIcon
                icon={product.star}
                className={styles.starIcon}
              />
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="/">
              <FontAwesomeIcon
                icon={product.star}
                className={styles.starIcon}
              />
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="/">
              <FontAwesomeIcon
                icon={product.starRegular}
                className={styles.starIcon}
              />
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="/">
              <FontAwesomeIcon
                icon={product.starRegular}
                className={styles.starIcon}
              />
            </a>
          </li>
        </ul>
        <p className={styles.text}>{product.text}</p>
        <p className={styles.oldPrice}>${product.oldPrice}</p>
        <p className={styles.price}>${product.price}</p>
        {!btnRemoveFromCart && (
          <button
            className={styles.button}
            type="button"
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              addToCart()
            }}
          >
            Add to cart
          </button>
        )}
        <button
          className={classnames({
            [styles.buttonNone]: true,
            [styles.buttonRemuve]: btnRemoveFromCart,
          })}
          type="button"
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            removeFromCart(product.id)
          }}
        >
          Remove from cart
        </button>
      </li>
    </>
  )
}

export default ProductComponent
