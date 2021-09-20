import * as React from 'react'
import styles from './styles.module.scss'
import BeefImg from '../../../../sources/images/prendingProducts/beef.png'
import BrocaliImg from '../../../../sources/images/prendingProducts/brocali-removebg-preview.png'
import StrawberriesImg from '../../../../sources/images/prendingProducts/strawberries-removebg-preview.png'
import HoneyImg from '../../../../sources/images/prendingProducts/honey.png'
import MilkImg from '../../../../sources/images/prendingProducts/milk.png'
import MangoImg from '../../../../sources/images/prendingProducts/mango.png'
import BunnerImg from '../../../../sources/images/prendingProducts/bunner.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faStar,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarR } from '@fortawesome/free-regular-svg-icons'

const TrendingProducts = () => {
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.subtitle}>Most Popular</h3>
        <h2 className={styles.title}>Trending Products</h2>
        <ul className={styles.trendingProducts}>
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

          <li className={styles.trendingProducts_Item}>
            <a className={styles.trendingProducts_linkLike}>
              <FontAwesomeIcon
                icon={faHeart}
                className={styles.trendingProducts_linkLike_icon}
              />
            </a>
            <img
              className={styles.trendingProducts_Img}
              src={BrocaliImg}
              alt="Brocali"
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
            <p className={styles.trendingProducts_text}>Broccoli</p>
            <p className={styles.trendingProducts_price}>$20</p>
            <p className={styles.trendingProducts_oldPrice}>$15</p>
            <button className={styles.trendingProducts_button} type="button">
              Add to cart
            </button>
          </li>

          <li className={styles.trendingProducts_Item}>
            <a className={styles.trendingProducts_linkLike}>
              <FontAwesomeIcon
                icon={faHeart}
                className={styles.trendingProducts_linkLike_icon}
              />
            </a>
            <img
              className={styles.trendingProducts_Img}
              src={StrawberriesImg}
              alt="Strawberries"
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
            <p className={styles.trendingProducts_text}>Strawberries</p>
            <p className={styles.trendingProducts_price}>$30</p>
            <p className={styles.trendingProducts_oldPrice}>$20</p>
            <button className={styles.trendingProducts_button} type="button">
              Add to cart
            </button>
          </li>

          <li className={styles.trendingProducts_Item}>
            <a className={styles.trendingProducts_linkLike}>
              <FontAwesomeIcon
                icon={faHeart}
                className={styles.trendingProducts_linkLike_icon}
              />
            </a>
            <img
              className={styles.trendingProducts_Img}
              src={HoneyImg}
              alt="Honey"
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
            <p className={styles.trendingProducts_text}>Fresh Honey</p>
            <p className={styles.trendingProducts_price}>$50</p>
            <p className={styles.trendingProducts_oldPrice}>$40</p>
            <button className={styles.trendingProducts_button} type="button">
              Add to cart
            </button>
          </li>

          <li className={styles.trendingProducts_Item}>
            <a className={styles.trendingProducts_linkLike}>
              <FontAwesomeIcon
                icon={faHeart}
                className={styles.trendingProducts_linkLike_icon}
              />
            </a>
            <img
              className={styles.trendingProducts_Img}
              src={MilkImg}
              alt="Milk"
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
            <p className={styles.trendingProducts_text}>Fresh Milk</p>
            <p className={styles.trendingProducts_price}>$10</p>
            <p className={styles.trendingProducts_oldPrice}>$08</p>
            <button className={styles.trendingProducts_button} type="button">
              Add to cart
            </button>
          </li>

          <li className={styles.trendingProducts_Item}>
            <a className={styles.trendingProducts_linkLike}>
              <FontAwesomeIcon
                icon={faHeart}
                className={styles.trendingProducts_linkLike_icon}
              />
            </a>
            <img
              className={styles.trendingProducts_Img}
              src={MangoImg}
              alt="Mango"
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
            <p className={styles.trendingProducts_text}>Mango Beverage</p>
            <p className={styles.trendingProducts_price}>$22</p>
            <p className={styles.trendingProducts_oldPrice}>$18</p>
            <button className={styles.trendingProducts_button} type="button">
              Add to cart
            </button>
          </li>
        </ul>

        <div className={styles.trendingProductsBaner}>
          <div className={styles.trendingProductsBaner_leftSide}>
            <p className={styles.trendingProductsBaner_leftSide_text}>
              50%{' '}
              <span className={styles.trendingProductsBaner_leftSide_span}>
                OFf
              </span>{' '}
            </p>
            <button className={styles.trendingProductsBaner_leftSide_button}>
              Shop now {''}
              <FontAwesomeIcon
                icon={faArrowRight}
                className={
                  styles.trendingProductsBaner_leftSide_button_iconArrow
                }
              />
            </button>
          </div>
          <h2 className={styles.trendingProductsBaner_title}>
            Popular and Trending Products
          </h2>
          <img
            className={styles.trendingProductsBaner_img}
            src={BunnerImg}
            alt="Bunner"
          ></img>
        </div>
      </div>
    </>
  )
}

export default TrendingProducts
