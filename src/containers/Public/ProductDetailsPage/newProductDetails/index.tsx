import * as React from 'react'
import styles from './styles.module.scss'
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

const NewProductDetails = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
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
                <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
              </button>
            </div>
            <img className={styles.mainImg} src="" alt=""></img>
          </div>
          <div className={styles.containerRigth}>
            <h3 className={styles.title}>Fresh Strawberries</h3>
            <ul className={styles.starsList}>
              <li className={styles.item}>
                <a className={styles.link}>
                  <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link}>
                  <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link}>
                  <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
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
            <p className={styles.oldPrice}>$</p>
            <p className={styles.price}>$</p>
            <div className={styles.btnContainer}>
              <button className={styles.btn} type="button">
                +
              </button>
              <button className={styles.btn_text}>0</button>
              <button className={styles.btn} type="button">
                -
              </button>
              <button className={styles.btnAddToCart} type="button">
                Add to cart
              </button>
            </div>
            <h4 className={styles.overview}>Overview:</h4>
            <p className={styles.text}>
              Neque porro quisquam est aui dolorem iesum ruia do sit amet,
              consectetur, adipisci velit, sed quia non num eius modi tempora
              incidunt ut labore et dolore magna volutatem exercitationem ullam.
            </p>
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
                    <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
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
                <img className={styles.img} src="" alt=""></img>
                <p className={styles.text}>100% Guarantee</p>
              </div>
              <div className={styles.service}>
                <img className={styles.img} src="" alt=""></img>
                <p className={styles.text}>24/7 Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NewProductDetails
