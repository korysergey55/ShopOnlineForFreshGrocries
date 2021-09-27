import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import GuarantieImg from '../../../../sources/images/ProductDatailsPage/productProductDetails/productIcon.png'
import ServiceImg from '../../../../sources/images/ProductDatailsPage/productProductDetails/productIcon2.png'
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
import IProduct, { Product } from '../../../../models/product'
import { useHistory, useLocation, useParams } from 'react-router'
import { useStore } from 'stores'
import classnames from 'classnames'
import Slider from 'react-slick'
import PhotoList from '../PhotoList'
import { observer } from 'mobx-react'
// import { toJS } from 'mobx'

interface IProductProps {
  product: IProduct
}
const sliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  nextArrow: (
    <button type="button">
      <FontAwesomeIcon
        icon={faChevronDown}
        className={styles.icon}
        color="white"
      />
    </button>
  ),
  prevArrow: (
    <button type="button">
      <FontAwesomeIcon
        icon={faChevronUp}
        className={styles.icon}
        color="white"
      />
    </button>
  ),
}
const NewProductDetails = observer(() => {
  const history = useHistory()
  const location = useLocation<any>()
  const params = useParams()
  const { id }: any = params
  const { productStore } = useStore()

  const [couter, setCouter] = useState<number>(0)
  const [activeClass, setActiveClass] = useState<number>(1)
  const [aboutProductText, setaboutProductText] = useState<string | undefined>(
    ''
  )

  const [product, setProduct] = useState<IProduct | undefined>(() => {
    const getProductWithId =
      productStore.trendingProducts.find((item: IProduct) => item.id === id) ||
      productStore.bestProducts.find((item: IProduct) => item.id === id)
    return getProductWithId
  })

  // const [product, setProduct] = useState<any>({})
  // useEffect(() => {
  //   console.log(toJS(productStore))
  //   const findProduct = () => {
  //     const getProductWithId =
  //       productStore.trendingProducts.find((item: IProduct) => item.id === id)
  //       || productStore.bestProducts.find((item: IProduct) => item.id === id)
  //     getProductWithId && setProduct(getProductWithId)
  //   }
  //   findProduct()
  // },[])

  useEffect(() => {
    const items: any = localStorage.getItem('product')
    const parsedProduct: any = JSON.parse(items)
    if (!product) {
      setProduct(parsedProduct)
    }
  }, [product])

  useEffect(() => {
    if (product) {
      const defaultText: string | undefined = product.aboutProductLi.find(
        item => item.text
      )?.text
      setaboutProductText(defaultText)
    }
  }, [product])

  const decrimentProducts = () => {
    if (couter > 0) {
      setCouter(prev => prev - 1)
    }
  }
  const incrementProducts = () => {
    setCouter(prev => prev + 1)
  }

  const goBack = () => {
    if (location.state) {
      history.push(location.state.from)
    } else history.push('/')
  }

  const setAboutProductTextActiveClass = (id: number, text: string) => {
    setActiveClass(id)
    setaboutProductText(text)
  }

  return (
    <>
      {product ? (
        <div className={styles.container}>
          <button className={styles.goBack} type="button" onClick={goBack}>
            go back
          </button>
          <section className={styles.section}>
            <div className={styles.photoContainer}>
              <div className={styles.photoContainerLeft}>
                <Slider {...sliderSettings} className={styles.photoList}>
                  {product.imgArr
                    ? product.imgArr.map(item => (
                        <PhotoList item={item} key={item} />
                      ))
                    : null}
                </Slider>
              </div>
              <div className={styles.mainImgContainer}>
                <img
                  className={styles.mainImg}
                  src={productStore.foto ? productStore.foto : product.img}
                  alt={productStore.foto}
                ></img>
              </div>
            </div>
            <div className={styles.containerRigth}>
              <h3 className={styles.title}>{product.text}</h3>
              <ul className={styles.starsList}>
                <li className={styles.item}>
                  <a className={styles.link} href="/">
                    <FontAwesomeIcon
                      icon={faStar}
                      className={styles.starIcon}
                    />
                  </a>
                </li>
                <li className={styles.item}>
                  <a className={styles.link} href="/">
                    <FontAwesomeIcon
                      icon={faStar}
                      className={styles.starIcon}
                    />
                  </a>
                </li>
                <li className={styles.item}>
                  <a className={styles.link} href="/">
                    <FontAwesomeIcon
                      icon={faStar}
                      className={styles.starIcon}
                    />
                  </a>
                </li>
                <li className={styles.item}>
                  <a className={styles.link} href="/">
                    <FontAwesomeIcon
                      icon={StarIconRegular}
                      className={styles.starIcon}
                    />
                  </a>
                </li>
                <li className={styles.item}>
                  <a className={styles.link} href="/">
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
                    <a className={styles.link} href="/">
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        className={styles.icon}
                      />
                    </a>
                  </li>
                  <li className={styles.item}>
                    <a className={styles.link} href="/">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className={styles.icon}
                      />
                    </a>
                  </li>
                  <li className={styles.item}>
                    <a className={styles.link} href="/">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className={styles.icon}
                      />
                    </a>
                  </li>
                  <li className={styles.item}>
                    <a className={styles.link} href="/">
                      <FontAwesomeIcon
                        icon={faPinterest}
                        className={styles.icon}
                      />
                    </a>
                  </li>
                  <li className={styles.item}>
                    <a className={styles.link} href="/">
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
              {product.aboutProductLi.map((prod: Product) => (
                <li
                  key={prod.id}
                  className={classnames({
                    [styles.item]: true,
                    [styles.active]: activeClass === prod.id,
                  })}
                  onClick={() =>
                    setAboutProductTextActiveClass(prod.id, prod.text)
                  }
                >
                  {prod.title}
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
})

export default NewProductDetails
