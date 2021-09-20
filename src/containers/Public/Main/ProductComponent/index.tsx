import * as React from 'react';
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faStar,} from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarR } from '@fortawesome/free-regular-svg-icons'
import BeefImg from '../../../../sources/images/prendingProducts/beef.png'

const ProductComponent = () => {
  return (
    <>
      <li className={styles.trendingProducts_Item}>
        <p className={styles.hot}>Hot</p>
        <a className={styles.trendingProducts_linkLike}>
          <FontAwesomeIcon
            icon={faHeart}
            className={styles.trendingProducts_linkLike_icon}
          />
        </a>
        <img
          className={styles.trendingProducts_Img}
          src={BeefImg}
          alt="Beef"
        ></img>
        <ul className={styles.trendingProducts_starsList}>
          <li className={styles.trendingProducts_starsList_item}>
            <a className={styles.trendingProducts_starsList_item_link}>
              <FontAwesomeIcon
                icon={faStar}
                className={styles.trendingProducts_starsList_item_link_icon}
              />
            </a>
          </li>
          <li className={styles.trendingProducts_starsList_item}>
            <a className={styles.trendingProducts_starsList_item_link}>
              <FontAwesomeIcon
                icon={faStar}
                className={styles.trendingProducts_starsList_item_link_icon}
              />
            </a>
          </li>
          <li className={styles.trendingProducts_starsList_item}>
            <a className={styles.trendingProducts_starsList_item_link}>
              <FontAwesomeIcon
                icon={faStar}
                className={styles.trendingProducts_starsList_item_link_icon}
              />
            </a>
          </li>
          <li className={styles.trendingProducts_starsList_item}>
            <a className={styles.trendingProducts_starsList_item_link}>
              <FontAwesomeIcon
                icon={faStarR}
                className={styles.trendingProducts_starsList_item_link_icon}
              />
            </a>
          </li>
          <li className={styles.trendingProducts_starsList_item}>
            <a className={styles.trendingProducts_starsList_item_link}>
              <FontAwesomeIcon
                icon={faStarR}
                className={styles.trendingProducts_starsList_item_link_icon}
              />
            </a>
          </li>
        </ul>
        <p className={styles.trendingProducts_text}>Beef Steak</p>
        <p className={styles.trendingProducts_price}>$15</p>
        <p className={styles.trendingProducts_oldPrice}>$12</p>
        <button className={styles.trendingProducts_button} type="button">
          Add to cart
        </button>
      </li>
    </>
  )
}

export default ProductComponent;