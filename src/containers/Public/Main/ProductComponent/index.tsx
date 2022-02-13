import React, { useState, useEffect } from 'react'
import IProduct from '../../../../models/product'
import styles from './styles.module.scss'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import ButtonComponent from 'containers/Public/ButtonComponent'
import { useHistory, useLocation } from 'react-router'
import { useStore } from 'stores'
import { toJS } from 'mobx'

interface IProductProps {
  product: IProduct
  key?: string
  width?: boolean
  colorItem?: boolean
  likeStyle?: boolean
  btnRemoveFromCart?: boolean
}

const ProductComponent: React.FC<IProductProps> = ({
  product,
  width,
  colorItem,
  likeStyle = false,
  btnRemoveFromCart = false,
}) => {
  const history = useHistory()
  const location = useLocation()
  const { productStore } = useStore()
  const [activeClass, setActive] = useState(likeStyle)

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
      productStore.addLike(product.id)
    }
  }
  const addToCart = () => {
    productStore.addtoCart(product.id)
    console.log('cart', toJS(productStore.cart))
  }
  const removeFromCart = () => {
    productStore.removeAllFromCart(product.id)
  }
  const onIncrement = () => {
    addToCart()
  }
  const onDecriment = () => {
    productStore.remuveOneFromCart(product.id)
  }

  return (
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
            <FontAwesomeIcon icon={product.star} className={styles.starIcon} />
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="/">
            <FontAwesomeIcon icon={product.star} className={styles.starIcon} />
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="/">
            <FontAwesomeIcon icon={product.star} className={styles.starIcon} />
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
          removeFromCart()
        }}
      >
        Remove from cart
      </button>
      <button
        className={classnames({
          [styles.buttonNone]: true,
          [styles.btnBay]: btnRemoveFromCart,
        })}
        type="button"
        onClick={e => {
          e.preventDefault()
          e.stopPropagation()
        }}
      >
        Bay
      </button>
      {btnRemoveFromCart ? (
        <ButtonComponent
          value={product.qantity}
          incrementProduct={onIncrement}
          decrimentProduct={onDecriment}
        />
      ) : null}
    </li>
  )
}

export default ProductComponent
