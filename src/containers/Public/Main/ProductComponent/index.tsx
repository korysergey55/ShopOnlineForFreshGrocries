import * as React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import IProduct from '../../../../models/product'
import { useHistory, useLocation } from 'react-router'
import classnames from 'classnames'

interface IProductProps {
  product: IProduct
  width?: boolean
  key?: string
}

const ProductComponent: React.FC<IProductProps> = ({ product, width }) => {
  const history = useHistory()
  const location = useLocation()

  const productsDetails = () => {
    history.push({
      pathname: `/${product.id}`,
      state: { from: location.pathname },
    })
    localStorage.setItem('product', JSON.stringify(product))
  }

  return (
    <>
      <li
        className={classnames({
          [styles.li]: true,
          [styles.spesialWidth]: width,
        })}
        onClick={productsDetails}
      >
        {product.hot ? <p className={styles.hot}>{product.hot}</p> : null}
        <a className={styles.like} href="/">
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
        <button className={styles.button} type="button">
          Add to cart
        </button>
      </li>
    </>
  )
}

export default ProductComponent