import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import GuarantieImg from '../../../../sources/images/ProductDatailsPage/productProductDetails/productIcon.png'
import ServiceImg from '../../../../sources/images/ProductDatailsPage/productProductDetails/productIcon2.png'
import MainImg from '../../../../sources/images/ProductDatailsPage/productProductDetails/mainImg_removebg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import { faStar as StarIconRegular } from '@fortawesome/free-regular-svg-icons'
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faPinterest,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

import IProduct from '../../../../models/product'
import { useHistory, useLocation, useParams } from 'react-router'
import { useStore } from 'stores'
import { toJS } from 'mobx'

const aboutProductLi = [
  {
    id: 1,
    title: 'Description',
    text: 'Description111111111111111111111111111111111',
  },
  {
    id: 2,
    title: 'Additional Information',
    text: 'Additional Information222222222222222222222222222',
  },
  {
    id: 3,
    title: 'Reviews',
    text: 'Reviews33333333333333333333333333333333333333333',
  },
]

interface IProductProps {
  product: IProduct
}

const NewProductDetails = () => {
  const history = useHistory()
  const location = useLocation<any>()
  const { productStore } = useStore()
  const params = useParams()
  const { id }: any = params
  const [couter, setCouter] = useState<number>(0)
  const [activeClass, setActiveClass] = useState<number>()
  const [aboutProductText, setaboutProductText] = useState<string>('')
  const [product, setState] = useState<IProduct | any>({})

  const items: any = localStorage.getItem('product')
  const parsedProduct: any = JSON.parse(items)

  useEffect(() => {
    setState(parsedProduct)
    // const findProduct = () => {
    //   const getProductWithId =
    //     productStore.trendingProducts.find(
    //       (item: IProduct) => item.id === id
    //     ) || productStore.bestProducts.find((item: IProduct) => item.id === id)
    //   getProductWithId && setState(getProductWithId)
    // }
    // findProduct()
  }, [])

  const decrimentProducts = () => {
    if (couter > 0) {
      setCouter(prev => prev - 1)
    }
  }
  const incrementProducts = () => {
    setCouter(prev => prev + 1)
  }
  const setAboutProductTextActiveClass = (id: number, text: string) => {
    setActiveClass(id)
    setaboutProductText(text)
  }

  const goBack = () => {
    if (location.state) {
      history.push(location.state.from)
    } else history.push('/')
  }

  return (
    <>
      {items ? (
        <div className={styles.container}>
          <button className={styles.goBack} type="button" onClick={goBack}>
            go back
          </button>
          <section className={styles.section}>
            <div className={styles.fotoContainer}>
              <div className={styles.fotoContainerLeft}>
                <button className={styles.scrollBtn}>
                  <FontAwesomeIcon icon={faChevronUp} className={styles.icon} />
                </button>
                <img className={styles.img} src="" alt=""></img>
                <img className={styles.img} src="" alt=""></img>
                <img className={styles.img} src="" alt=""></img>
                <img className={styles.img} src="" alt=""></img>
                <img className={styles.img} src="" alt=""></img>
                <button className={styles.scrollBtn}>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={styles.icon}
                  />
                </button>
              </div>
              <div className={styles.mainImgContainer}>
                <img
                  className={styles.mainImg}
                  src={product.img}
                  alt={product.text}
                ></img>
              </div>
            </div>
            <div className={styles.containerRigth}>
              <h3 className={styles.title}>{product.text}</h3>
              <ul className={styles.starsList}>
                <li className={styles.item}>
                  <a className={styles.link}>
                    <FontAwesomeIcon
                      icon={faStar}
                      className={styles.starIcon}
                    />
                  </a>
                </li>
                <li className={styles.item}>
                  <a className={styles.link}>
                    <FontAwesomeIcon
                      icon={faStar}
                      className={styles.starIcon}
                    />
                  </a>
                </li>
                <li className={styles.item}>
                  <a className={styles.link}>
                    <FontAwesomeIcon
                      icon={faStar}
                      className={styles.starIcon}
                    />
                  </a>
                </li>
                <li className={styles.item}>
                  <a className={styles.link}>
                    <FontAwesomeIcon
                      icon={StarIconRegular}
                      className={styles.starIcon}
                    />
                  </a>
                </li>
                <li className={styles.item}>
                  <a className={styles.link}>
                    <FontAwesomeIcon
                      icon={StarIconRegular}
                      className={styles.starIcon}
                    />
                  </a>
                </li>
              </ul>
              <p className={styles.oldPrice}>$ {product.oldPrice}</p>
              <p className={styles.price}>$ {product.price}</p>
              <div className={styles.btnContainer}>
                <button
                  className={styles.btn}
                  type="button"
                  onClick={() => incrementProducts()}
                >
                  +
                </button>
                <button className={styles.btn_text}>{couter}</button>
                <button
                  className={styles.btn}
                  type="button"
                  onClick={() => decrimentProducts()}
                >
                  -
                </button>
                <button className={styles.btnAddToCart} type="button">
                  Add to cart
                </button>
              </div>
              <h4 className={styles.overview}>Overview:</h4>
              <p className={styles.text}>{product.overview}</p>
              <div className={styles.sotialContainer}>
                <h4 className={styles.share}>Share:</h4>
                <ul className={styles.sotialList}>
                  <li className={styles.item}>
                    <a className={styles.link} href="">
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        className={styles.icon}
                      />
                    </a>
                  </li>
                  <li className={styles.item}>
                    <a className={styles.link} href="">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className={styles.icon}
                      />
                    </a>
                  </li>
                  <li className={styles.item}>
                    <a className={styles.link} href="">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className={styles.icon}
                      />
                    </a>
                  </li>
                  <li className={styles.item}>
                    <a className={styles.link} href="">
                      <FontAwesomeIcon
                        icon={faPinterest}
                        className={styles.icon}
                      />
                    </a>
                  </li>
                  <li className={styles.item}>
                    <a className={styles.link} href="">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className={styles.icon}
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.downContainer}>
                <div className={styles.guarantee}>
                  <img
                    className={styles.img}
                    src={GuarantieImg}
                    alt="GuarantieImg"
                  ></img>
                  <p className={styles.text}>100% Guarantee</p>
                </div>
                <div className={styles.service}>
                  <img
                    className={styles.img}
                    src={ServiceImg}
                    alt="ServiceImg"
                  ></img>
                  <p className={styles.text}>24/7 Service</p>
                </div>
              </div>
            </div>
          </section>

          <div className={styles.aboutProduct}>
            <ul className={styles.ul}>
              {aboutProductLi.map(product => (
                <li
                  key={product.id}
                  className={
                    activeClass === product.id ? styles.active : styles.item
                  }
                  onClick={() =>
                    setAboutProductTextActiveClass(product.id, product.text)
                  }
                >
                  {product.title}
                </li>
              ))}
            </ul>
            <p className={styles.text}>
              {aboutProductText
                ? aboutProductText
                : 'Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur'}
            </p>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default NewProductDetails
