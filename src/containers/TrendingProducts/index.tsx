import * as React from 'react'
import styles from './styles.module.scss'
import beef from '../../sources/images/prendingProducts/beef.png'
import brocali from '../../sources/images/prendingProducts/brocali-removebg-preview.png'
import strawberries from '../../sources/images/prendingProducts/strawberries-removebg-preview.png'
import  honey from '../../sources/images/prendingProducts/honey.png'
import milk from '../../sources/images/prendingProducts/milk.png'
import mango from '../../sources/images/prendingProducts/mango.png'
import bunner from '../../sources/images/prendingProducts/bunner.png'

const TrendingProducts = () => {
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.subtitle}>Most Popular</h3>
        <h2 className={styles.title}>Trending Products</h2>
               <ul className={styles.trendingProducts}>
          <li className={styles.trendingProducts_Item}>
          <p className={styles.hot}>Hot</p>
            <a className={styles.trendingProducts_like}>
              {/* <svg className={styles.trendingProducts_like_svg}>
                <use href=""></use>
              </svg> */}
            </a>
            <img className={styles.trendingProducts_Img} src={beef}></img>
            <ul className={styles.trendingProducts_starsList}>
              <li className={styles.trendingProducts_starsList_item}>
                <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a>
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a>
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a>
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a>
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a>
              </li>
            </ul>
            <p className={styles.trendingProducts_text}>Beef Steak</p>
            <p className={styles.trendingProducts_price}>$15 <span className={styles.trendingProducts_oldPrice}>$12</span> </p>
            <button className={styles.trendingProducts_button} type='button'>Add to cart</button>
          </li>

          <li className={styles.trendingProducts_Item}>
            <a className={styles.trendingProducts_like}>
              {/* <svg className={styles.trendingProducts_like_svg}>
                <use href=""></use>
              </svg> */}
            </a>
            <img className={styles.trendingProducts_Img2} src={brocali}></img>
            <ul className={styles.trendingProducts_starsList}>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
            </ul>
            <p className={styles.trendingProducts_text}>Broccoli</p>
            <p className={styles.trendingProducts_price}>$20 <span className={styles.trendingProducts_oldPrice}>$15</span> </p>
            <button className={styles.trendingProducts_button} type='button'>Add to cart</button>
          </li>

          <li className={styles.trendingProducts_Item}>
            <a className={styles.trendingProducts_like}>
              {/* <svg className={styles.trendingProducts_like_svg}>
                <use href=""></use>
              </svg> */}
            </a>
            <img className={styles.trendingProducts_Img3} src={strawberries}></img>
            <ul className={styles.trendingProducts_starsList}>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
            </ul>
            <p className={styles.trendingProducts_text}>Strawberries</p>
            <p className={styles.trendingProducts_price}>$30 <span className={styles.trendingProducts_oldPrice}>$20</span> </p>
            <button className={styles.trendingProducts_button} type='button'>Add to cart</button>
          </li>
        
          <li className={styles.trendingProducts_Item}>
            <a className={styles.trendingProducts_like}>
              {/* <svg className={styles.trendingProducts_like_svg}>
                <use href=""></use>
              </svg> */}
            </a>
            <img className={styles.trendingProducts_Img4} src={honey}></img>
            <ul className={styles.trendingProducts_starsList}>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
            </ul>
            <p className={styles.trendingProducts_text}>Fresh Honey</p>
            <p className={styles.trendingProducts_price}>$50 <span className={styles.trendingProducts_oldPrice}>$40</span> </p>
            <button className={styles.trendingProducts_button} type='button'>Add to cart</button>
          </li>
        
          <li className={styles.trendingProducts_Item}>
            <a className={styles.trendingProducts_like}>
              {/* <svg className={styles.trendingProducts_like_svg}>
                <use href=""></use>
              </svg> */}
            </a>
            <img className={styles.trendingProducts_Img5} src={milk}></img>
            <ul className={styles.trendingProducts_starsList}>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
            </ul>
            <p className={styles.trendingProducts_text}>Fresh Milk</p>
            <p className={styles.trendingProducts_price}>$10 <span className={styles.trendingProducts_oldPrice}>$08</span> </p>
            <button className={styles.trendingProducts_button} type='button'>Add to cart</button>
          </li>
        
          <li className={styles.trendingProducts_Item}>
            <a className={styles.trendingProducts_like}>
              {/* <svg className={styles.trendingProducts_like_svg}>
                <use href=""></use>
              </svg> */}
            </a>
            <img className={styles.trendingProducts_Img6} src={mango}></img>
            <ul className={styles.trendingProducts_starsList}>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
              <li className={styles.trendingProducts_starsList_item}>
                {/* <a className={styles.trendingProducts_starsList_item_link}>
                  <svg className={styles.trendingProducts_starsList_item_link_svg}>
                    <use href=""></use>
                  </svg>
                </a> */}
              </li>
            </ul>
            <p className={styles.trendingProducts_text}>Mango Beverage</p>
            <p className={styles.trendingProducts_price}>$22 <span className={styles.trendingProducts_oldPrice}>$18</span> </p>
            <button className={styles.trendingProducts_button} type='button'>Add to cart</button>
          </li>
        </ul>
        
        <div className={styles.trendingProductsBaner}>
          <div className={styles.trendingProductsBaner_leftSide}>
            <p className={styles.trendingProductsBaner_leftSide_text}>50% <span className={styles.trendingProductsBaner_leftSide_span}>OFf</span> </p>
            <button className={styles.trendingProductsBaner_leftSide_button}>Shop now -></button>
          </div>
          <h2  className={styles.trendingProductsBaner_title}>Popular and Trending Products</h2>
          <img className={styles.trendingProductsBaner_img} src={bunner}></img>
        </div>
      </div>
    </>
  )
}

export default TrendingProducts
