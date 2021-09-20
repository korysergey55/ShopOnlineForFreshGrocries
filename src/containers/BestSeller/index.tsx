import * as React from 'react'
import styles from './styles.module.scss'
import BreadImg from '../../sources/images/bestSellers/bread.png'
import PepperImg from '../../sources/images/bestSellers/peper.png'
import OrangeImg from '../../sources/images/bestSellers/orange.png'
import AggsImg from '../../sources/images/bestSellers/eggs.png'
import OilImg from '../../sources/images/bestSellers/oil.png'
import BodyLotionImg from '../../sources/images/bestSellers/bodyLotion.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as FaStarIconRegular } from '@fortawesome/free-regular-svg-icons'

const BestSeller = () => {
  return (
    <>
      <section className={styles.bestSeller}>
        <div className={styles.container}>
          <p className={styles.bestSeller_subtitle}>Best Seller</p>
          <h2 className={styles.bestSeller_title}>Featured Products</h2>
          <ul className={styles.bestSeller_list}>
            <li className={styles.bestSeller_item}>
              <a className={styles.bestSeller_link}>All </a>
            </li>
            <li className={styles.bestSeller_item}>
              <a className={styles.bestSeller_link}>Food</a>
            </li>
            <li className={styles.bestSeller_item}>
              <a className={styles.bestSeller_link}> Fruits</a>
            </li>
            <li className={styles.bestSeller_item}>
              <a className={styles.bestSeller_link}>Health</a>
            </li>
            <li className={styles.bestSeller_item}>
              <a className={styles.bestSeller_link}>Meat</a>
            </li>
            <li className={styles.bestSeller_item}>
              <a className={styles.bestSeller_link}>Dairy</a>
            </li>
          </ul>

          <ul className={styles.bestSeller_productsList}>
            <li className={styles.bestSeller_productsList_item}>
              <p className={styles.hot}>Hot</p>
              <a className={styles.bestSeller_productsList_linkLike}>
                <FontAwesomeIcon
                  icon={faHeart}
                  className={styles.bestSeller_productsList_linkLike_icon}
                />
              </a>
              <img
                className={styles.bestSeller_productsList_img}
                src={BreadImg}
                alt="Bread"
              ></img>
              <ul className={styles.bestSeller_productsList_starsList}>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={FaStarIconRegular}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={FaStarIconRegular}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
              </ul>
              <p className={styles.bestSeller_productsList_text}>Fresh Bread</p>
              <p className={styles.bestSeller_productsList_price}>
                $15{' '}
                <span className={styles.bestSeller_productsList_oldPrice}>
                  $12
                </span>{' '}
              </p>
              <button
                className={styles.bestSeller_productsList_button}
                type="button"
              >
                Add to cart
              </button>
            </li>

            <li className={styles.bestSeller_productsList_item}>
              <a className={styles.bestSeller_productsList_linkLike}>
                <FontAwesomeIcon
                  icon={faHeart}
                  className={styles.bestSeller_productsList_linkLike_icon}
                />
              </a>
              <img
                className={styles.bestSeller_productsList_img}
                src={PepperImg}
                alt="Pepper"
              ></img>
              <ul className={styles.bestSeller_productsList_starsList}>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={FaStarIconRegular}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={FaStarIconRegular}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
              </ul>
              <p className={styles.bestSeller_productsList_text}>Red Pepper</p>
              <p className={styles.bestSeller_productsList_price}>
                $20{' '}
                <span className={styles.bestSeller_productsList_oldPrice}>
                  $15
                </span>{' '}
              </p>
              <button
                className={styles.bestSeller_productsList_button}
                type="button"
              >
                Add to cart
              </button>
            </li>

            <li className={styles.bestSeller_productsList_item}>
              <p className={styles.hot}>Hot</p>
              <a className={styles.bestSeller_productsList_linkLike}>
                <FontAwesomeIcon
                  icon={faHeart}
                  className={styles.bestSeller_productsList_linkLike_icon}
                />
              </a>
              <img
                className={styles.bestSeller_productsList_img}
                src={OrangeImg}
                alt="Orange"
              ></img>
              <ul className={styles.bestSeller_productsList_starsList}>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={FaStarIconRegular}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={FaStarIconRegular}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
              </ul>
              <p className={styles.bestSeller_productsList_text}>
                Orange Beverage
              </p>
              <p className={styles.bestSeller_productsList_price}>
                $30{' '}
                <span className={styles.bestSeller_productsList_oldPrice}>
                  $20
                </span>{' '}
              </p>
              <button
                className={styles.bestSeller_productsList_button}
                type="button"
              >
                Add to cart
              </button>
            </li>

            <li className={styles.bestSeller_productsList_item}>
              <a className={styles.bestSeller_productsList_linkLike}>
                <FontAwesomeIcon
                  icon={faHeart}
                  className={styles.bestSeller_productsList_linkLike_icon}
                />
              </a>
              <img
                className={styles.bestSeller_productsList_img}
                src={AggsImg}
                alt="Aggs"
              ></img>
              <ul className={styles.bestSeller_productsList_starsList}>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={FaStarIconRegular}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={FaStarIconRegular}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
              </ul>
              <p className={styles.bestSeller_productsList_text}>Dozen Eggs</p>
              <p className={styles.bestSeller_productsList_price}>
                $15{' '}
                <span className={styles.bestSeller_productsList_oldPrice}>
                  $12
                </span>{' '}
              </p>
              <button
                className={styles.bestSeller_productsList_button}
                type="button"
              >
                Add to cart
              </button>
            </li>

            <li className={styles.bestSeller_productsList_item}>
              <p className={styles.hot}>Hot</p>
              <a className={styles.bestSeller_productsList_linkLike}>
                <FontAwesomeIcon
                  icon={faHeart}
                  className={styles.bestSeller_productsList_linkLike_icon}
                />
              </a>
              <img
                className={styles.bestSeller_productsList_img}
                src={OilImg}
                alt='Oil'
              ></img>
              <ul className={styles.bestSeller_productsList_starsList}>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={FaStarIconRegular}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={FaStarIconRegular}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
              </ul>
              <p className={styles.bestSeller_productsList_text}>Cooking Oil</p>
              <p className={styles.bestSeller_productsList_price}>
                $20{' '}
                <span className={styles.bestSeller_productsList_oldPrice}>
                  $15
                </span>{' '}
              </p>
              <button
                className={styles.bestSeller_productsList_button}
                type="button"
              >
                Add to cart
              </button>
            </li>

            <li className={styles.bestSeller_productsList_item}>
              <a className={styles.bestSeller_productsList_linkLike}>
                <FontAwesomeIcon
                  icon={faHeart}
                  className={styles.bestSeller_productsList_linkLike_icon}
                />
              </a>
              <img
                className={styles.bestSeller_productsList_img}
                src={BodyLotionImg}
                alt='BodyLotionImg'
              ></img>
              <ul className={styles.bestSeller_productsList_starsList}>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={FaStarIconRegular}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.bestSeller_productsList_starsList_item}>
                  <a
                    className={
                      styles.bestSeller_productsList_starsList_item_link
                    }
                  >
                    <FontAwesomeIcon
                      icon={FaStarIconRegular}
                      className={
                        styles.bestSeller_productsList_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
              </ul>
              <p className={styles.bestSeller_productsList_text}>Body Lotion</p>
              <p className={styles.bestSeller_productsList_price}>
                $30{' '}
                <span className={styles.bestSeller_productsList_oldPrice}>
                  $20
                </span>{' '}
              </p>
              <button
                className={styles.bestSeller_productsList_button}
                type="button"
              >
                Add to cart
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.bestSeller_leftBg}></div>
      </section>
    </>
  )
}

export default BestSeller
