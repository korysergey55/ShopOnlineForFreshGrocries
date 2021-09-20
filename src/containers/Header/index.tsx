import * as React from 'react'
import styles from './styles.module.scss'
import LogoImg from '../../sources/images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faStar,
  faUser,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <a className={styles.logo} href="">
            <img className={styles.logoIcon} src={LogoImg} alt="Logo"></img>
          </a>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="">
                Home{' '}
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="">
                About
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="">
                Shop
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="">
                Pages{' '}
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="">
                Blog{' '}
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="">
                Contact{' '}
              </a>
            </li>
          </ul>
          <ul className={styles.sotialList}>
            <li className={styles.sotialList_item}>
              <a className={styles.sotialList_item_link} href="">
                <FontAwesomeIcon
                  icon={faSearch}
                  color="#9fcb22"
                  className={styles.sotialList_item_link_icon}
                />
              </a>
            </li>
            <li className={styles.sotialList_item}>
              <a className={styles.sotialList_item_link} href="">
                <FontAwesomeIcon
                  icon={faUser}
                  color="#9fcb22"
                  className={styles.sotialList_item_link_icon}
                />
              </a>
            </li>
            <li className={styles.sotialList_item}>
              <a className={styles.sotialList_item_link} href="">
                <FontAwesomeIcon
                  icon={faStar}
                  color="#9fcb22"
                  className={styles.sotialList_item_link_icon}
                />
              </a>
            </li>
            <li className={styles.sotialList_item}>
              <a className={styles.sotialList_item_linkCart} href="">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  color="#9fcb22"
                  className={styles.sotialList_item_link_icon}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
