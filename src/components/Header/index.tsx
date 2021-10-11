import * as React from 'react'
import styles from './styles.module.scss'
import LogoImg from '../../sources/images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faUser,
  faHeart,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'
import { useStore } from 'stores'
import { observer } from 'mobx-react'

const Header = observer(() => {
  const {productStore} = useStore()
  return (
    <>
      <header className={styles.mainHeader}>
        <div className={styles.container}>
          <div className={styles.header}>
            <a className={styles.logo} href="/">
              <img className={styles.icon} src={LogoImg} alt="Logo"></img>
            </a>
            <ul className={styles.navList}>
              <li className={styles.item}>
                <a className={styles.link} href="/">
                  Home{' '}
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="/">
                  About
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="/shop">
                  Shop
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="/">
                  Pages{' '}
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="/">
                  Blog{' '}
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="/">
                  Contact{' '}
                </a>
              </li>
            </ul>
            <ul className={styles.sotialList}>
              <li className={styles.item}>
                <a className={styles.link} href="/">
                  <FontAwesomeIcon
                    icon={faSearch}
                    color="#9fcb22"
                    className={styles.icon}
                  />
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="/">
                  <FontAwesomeIcon
                    icon={faUser}
                    color="#9fcb22"
                    className={styles.icon}
                  />
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="/">
                  <FontAwesomeIcon
                    icon={faHeart}
                    color="#9fcb22"
                    className={styles.icon}
                  />
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.linkCart} href="/">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    color="#9fcb22"
                    className={styles.icon}
                  />
                </a>
              </li>
              <li>
                <a className={styles.linkCartLength}>
                  {productStore.cart.length}
                </a>
              </li>
              <li>
                <a className={styles.linkLikeLength}>
                  {productStore.likes.length}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
})

export default Header
