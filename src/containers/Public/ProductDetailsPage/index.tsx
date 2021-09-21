import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as StarIconRegular } from '@fortawesome/free-regular-svg-icons'
import IProduct from '../../../models/product'
import { useHistory, useLocation, useParams } from 'react-router'
import { useStore } from 'stores'
import { toJS } from 'mobx'

interface IProductProps {
  product: IProduct
}

const ProductDetailsPage: React.FC<IProductProps> = () => {
  const history = useHistory()
  const location = useLocation<any>()
  const params = useParams()
  const { id }: any = params
  const { productStore } = useStore()
  
  const [product, setState] = useState(() => {
    return (
      productStore.trendingProducts.find((item: IProduct) => item.id === id) ||
      productStore.bestProducts.find((item: IProduct) => item.id === id)
    )
  })

  const goBack = () => {
    if (location.state) {
      history.push(location.state.from)
    } else history.push('/')
  }

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>ProductDetailsPage</h2>
        <button className={styles.goBack} type="button" onClick={goBack}>
          go back
        </button>
        <li className={styles.li}>
          {product.hot ? <p className={styles.hot}>{product.hot}</p> : null}
          <a className={styles.like}>
            <FontAwesomeIcon icon={faHeart} className={styles.icon} />
          </a>
          <img
            className={styles.img}
            src={product.img}
            alt={product.text}
          ></img>
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
      </div>
    </>
  )
}

export default ProductDetailsPage
