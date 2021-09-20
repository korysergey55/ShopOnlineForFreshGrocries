import * as React from 'react'
import styles from './styles.module.scss'
import IProduct from 'models/product'
import ProductComponent from '../ProductComponent'
import bestSellerProductsJSON from '../../../../sources/products/bestSellerProducts'

const BestSeller = () => {
  return (
    <>
      <section className={styles.bestSeller}>
        <div className={styles.container}>
          <p className={styles.subtitle}>Best Seller</p>
          <h2 className={styles.title}>Featured Products</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.link}>All </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link}>Food</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link}> Fruits</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link}>Health</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link}>Meat</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link}>Dairy</a>
            </li>
          </ul>

          <ul className={styles.productsList}>
            {bestSellerProductsJSON &&
              bestSellerProductsJSON.map((product: IProduct) => (
                <ProductComponent product={product} key={product.id} />
              ))}
          </ul>
        </div>
        <div className={styles.leftBg}></div>
      </section>
    </>
  )
}

export default BestSeller

// <li className={styles.bestSeller_productsList_item}>
//   <p className={styles.hot}>Hot</p>
//   <a className={styles.bestSeller_productsList_linkLike}>
//     <FontAwesomeIcon
//       icon={faHeart}
//       className={styles.bestSeller_productsList_linkLike_icon}
//     />
//   </a>
//   <img
//     className={styles.bestSeller_productsList_img}
//     src={BreadImg}
//     alt="Bread"
//   ></img>
//   <ul className={styles.bestSeller_productsList_starsList}>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={faStar}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={faStar}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={faStar}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={FaStarIconRegular}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={FaStarIconRegular}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//   </ul>
//   <p className={styles.bestSeller_productsList_text}>Fresh Bread</p>
//   <p className={styles.bestSeller_productsList_price}>
//     $15{' '}
//     <span className={styles.bestSeller_productsList_oldPrice}>
//       $12
//     </span>{' '}
//   </p>
//   <button
//     className={styles.bestSeller_productsList_button}
//     type="button"
//   >
//     Add to cart
//   </button>
// </li>

// <li className={styles.bestSeller_productsList_item}>
//   <a className={styles.bestSeller_productsList_linkLike}>
//     <FontAwesomeIcon
//       icon={faHeart}
//       className={styles.bestSeller_productsList_linkLike_icon}
//     />
//   </a>
//   <img
//     className={styles.bestSeller_productsList_img}
//     src={PepperImg}
//     alt="Pepper"
//   ></img>
//   <ul className={styles.bestSeller_productsList_starsList}>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={faStar}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={faStar}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={faStar}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={FaStarIconRegular}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={FaStarIconRegular}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//   </ul>
//   <p className={styles.bestSeller_productsList_text}>Red Pepper</p>
//   <p className={styles.bestSeller_productsList_price}>
//     $20{' '}
//     <span className={styles.bestSeller_productsList_oldPrice}>
//       $15
//     </span>{' '}
//   </p>
//   <button
//     className={styles.bestSeller_productsList_button}
//     type="button"
//   >
//     Add to cart
//   </button>
// </li>

// <li className={styles.bestSeller_productsList_item}>
//   <p className={styles.hot}>Hot</p>
//   <a className={styles.bestSeller_productsList_linkLike}>
//     <FontAwesomeIcon
//       icon={faHeart}
//       className={styles.bestSeller_productsList_linkLike_icon}
//     />
//   </a>
//   <img
//     className={styles.bestSeller_productsList_img}
//     src={OrangeImg}
//     alt="Orange"
//   ></img>
//   <ul className={styles.bestSeller_productsList_starsList}>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={faStar}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={faStar}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={faStar}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={FaStarIconRegular}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={FaStarIconRegular}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//   </ul>
//   <p className={styles.bestSeller_productsList_text}>
//     Orange Beverage
//   </p>
//   <p className={styles.bestSeller_productsList_price}>
//     $30{' '}
//     <span className={styles.bestSeller_productsList_oldPrice}>
//       $20
//     </span>{' '}
//   </p>
//   <button
//     className={styles.bestSeller_productsList_button}
//     type="button"
//   >
//     Add to cart
//   </button>
// </li>

// <li className={styles.bestSeller_productsList_item}>
//   <a className={styles.bestSeller_productsList_linkLike}>
//     <FontAwesomeIcon
//       icon={faHeart}
//       className={styles.bestSeller_productsList_linkLike_icon}
//     />
//   </a>
//   <img
//     className={styles.bestSeller_productsList_img}
//     src={AggsImg}
//     alt="Aggs"
//   ></img>
//   <ul className={styles.bestSeller_productsList_starsList}>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={faStar}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={faStar}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={faStar}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={FaStarIconRegular}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={FaStarIconRegular}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//   </ul>
//   <p className={styles.bestSeller_productsList_text}>Dozen Eggs</p>
//   <p className={styles.bestSeller_productsList_price}>
//     $15{' '}
//     <span className={styles.bestSeller_productsList_oldPrice}>
//       $12
//     </span>{' '}
//   </p>
//   <button
//     className={styles.bestSeller_productsList_button}
//     type="button"
//   >
//     Add to cart
//   </button>
// </li>

// <li className={styles.bestSeller_productsList_item}>
//   <p className={styles.hot}>Hot</p>
//   <a className={styles.bestSeller_productsList_linkLike}>
//     <FontAwesomeIcon
//       icon={faHeart}
//       className={styles.bestSeller_productsList_linkLike_icon}
//     />
//   </a>
//   <img
//     className={styles.bestSeller_productsList_img}
//     src={OilImg}
//     alt='Oil'
//   ></img>
//   <ul className={styles.bestSeller_productsList_starsList}>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={faStar}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={faStar}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={faStar}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={FaStarIconRegular}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={FaStarIconRegular}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//   </ul>
//   <p className={styles.bestSeller_productsList_text}>Cooking Oil</p>
//   <p className={styles.bestSeller_productsList_price}>
//     $20{' '}
//     <span className={styles.bestSeller_productsList_oldPrice}>
//       $15
//     </span>{' '}
//   </p>
//   <button
//     className={styles.bestSeller_productsList_button}
//     type="button"
//   >
//     Add to cart
//   </button>
// </li>

// <li className={styles.bestSeller_productsList_item}>
//   <a className={styles.bestSeller_productsList_linkLike}>
//     <FontAwesomeIcon
//       icon={faHeart}
//       className={styles.bestSeller_productsList_linkLike_icon}
//     />
//   </a>
//   <img
//     className={styles.bestSeller_productsList_img}
//     src={BodyLotionImg}
//     alt='BodyLotionImg'
//   ></img>
//   <ul className={styles.bestSeller_productsList_starsList}>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={faStar}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={faStar}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={faStar}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={FaStarIconRegular}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//     <li className={styles.bestSeller_productsList_starsList_item}>
//       <a
//         className={
//           styles.bestSeller_productsList_starsList_item_link
//         }
//       >
//         <FontAwesomeIcon
//           icon={FaStarIconRegular}
//           className={
//             styles.bestSeller_productsList_starsList_item_link_icon
//           }
//         />
//       </a>
//     </li>
//   </ul>
//   <p className={styles.bestSeller_productsList_text}>Body Lotion</p>
//   <p className={styles.bestSeller_productsList_price}>
//     $30{' '}
//     <span className={styles.bestSeller_productsList_oldPrice}>
//       $20
//     </span>{' '}
//   </p>
//   <button
//     className={styles.bestSeller_productsList_button}
//     type="button"
//   >
//     Add to cart
//   </button>
// </li>
