import * as React from 'react'
import styles from './styles.module.scss'
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
            <a className={styles.bestSeller_productsList_like}></a>
            <img className={styles.bestSeller_productsList_img} src=''></img>
            <ul className={styles.bestSeller_productsList_starsList}>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
            </ul>
            <p className={styles.bestSeller_productsList_text}>Fresh Bread</p>
            <p className={styles.bestSeller_productsList_price}>$15 <span className={styles.bestSeller_productsList_oldPrice}>$12</span> </p>
            <button className={styles.bestSeller_productsList_button} type='button'>Add to cart</button>
          </li>

          <li className={styles.bestSeller_productsList_item}>
            <a className={styles.bestSeller_productsList_like}></a>
            <img className={styles.bestSeller_productsList_img2} src=''></img>
            <ul className={styles.bestSeller_productsList_starsList}>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
            </ul>
            <p className={styles.bestSeller_productsList_text}>Red Pepper</p>
            <p className={styles.bestSeller_productsList_price}>$20 <span className={styles.bestSeller_productsList_oldPrice}>$15</span> </p>
            <button className={styles.bestSeller_productsList_button} type='button'>Add to cart</button>
          </li>
          
          <li className={styles.bestSeller_productsList_item}>
          <p className={styles.hot}>Hot</p>
            <a className={styles.bestSeller_productsList_like}></a>
            <img className={styles.bestSeller_productsList_img3} src=''></img>
            <ul className={styles.bestSeller_productsList_starsList}>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
            </ul>
            <p className={styles.bestSeller_productsList_text}>Orange Beverage</p>
            <p className={styles.bestSeller_productsList_price}>$30 <span className={styles.bestSeller_productsList_oldPrice}>$20</span> </p>
            <button className={styles.bestSeller_productsList_button} type='button'>Add to cart</button>
          </li>

          <li className={styles.bestSeller_productsList_item}>
           <a className={styles.bestSeller_productsList_like}></a>
            <img className={styles.bestSeller_productsList_img4} src=''></img>
            <ul className={styles.bestSeller_productsList_starsList}>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
            </ul>
            <p className={styles.bestSeller_productsList_text}>Dozen Eggs</p>
            <p className={styles.bestSeller_productsList_price}>$15 <span className={styles.bestSeller_productsList_oldPrice}>$12</span> </p>
            <button className={styles.bestSeller_productsList_button} type='button'>Add to cart</button>
          </li>

          <li className={styles.bestSeller_productsList_item}>
          <p className={styles.hot}>Hot</p>
            <a className={styles.bestSeller_productsList_like}></a>
            <img className={styles.bestSeller_productsList_img5} src=''></img>
            <ul className={styles.bestSeller_productsList_starsList}>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
            </ul>
            <p className={styles.bestSeller_productsList_text}>Cooking Oil</p>
            <p className={styles.bestSeller_productsList_price}>$20 <span className={styles.bestSeller_productsList_oldPrice}>$15</span> </p>
            <button className={styles.bestSeller_productsList_button} type='button'>Add to cart</button>
          </li>

          <li className={styles.bestSeller_productsList_item}>
           <a className={styles.bestSeller_productsList_like}></a>
            <img className={styles.bestSeller_productsList_img6} src=''></img>
            <ul className={styles.bestSeller_productsList_starsList}>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
              <li className={styles.bestSeller_productsList_starsList_item}>
                <a className={styles.bestSeller_productsList_starsList_item_link}></a>
              </li>
            </ul>
            <p className={styles.bestSeller_productsList_text}>Body Lotion</p>
            <p className={styles.bestSeller_productsList_price}>$30 <span className={styles.bestSeller_productsList_oldPrice}>$20</span> </p>
            <button className={styles.bestSeller_productsList_button} type='button'>Add to cart</button>
          </li>

          </ul>
        </div>
        <div className={styles.bestSeller_leftBg}></div>
      </section>
    </>
  )
}

export default BestSeller
