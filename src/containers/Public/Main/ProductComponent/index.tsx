import * as React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as StarIconRegular } from '@fortawesome/free-regular-svg-icons'
import IProduct from '../../../../models/product'

interface IProductProps {
  product: IProduct
}

const ProductComponent: React.FC<IProductProps> = ({ product }) => {
  return (
    <>
      <li className={styles.li}>
        {product.hot ? <p className={styles.hot}>{product.hot}</p> : null}
        <a className={styles.like}>
          <FontAwesomeIcon icon={faHeart} className={styles.icon} />
        </a>
        <img className={styles.img} src={product.img} alt=""></img>
        <ul className={styles.starsList}>
          <li className={styles.item}>
            <a className={styles.link}>
              <FontAwesomeIcon
                icon={product.star}
                className={styles.starIcon}
              />
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link}>
              <FontAwesomeIcon
                icon={product.star}
                className={styles.starIcon}
              />
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link}>
              <FontAwesomeIcon
                icon={product.star}
                className={styles.starIcon}
              />
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link}>
              <FontAwesomeIcon
                icon={product.starRegular}
                className={styles.starIcon}
              />
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link}>
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
