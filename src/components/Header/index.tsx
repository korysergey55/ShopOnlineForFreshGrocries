import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import classnames from 'classnames'
import LogoImg from '../../sources/images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faUser,
  faHeart,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'
import { useStore } from 'stores'
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router'
import { observer } from 'mobx-react'

const Header = observer(() => {
  const { productStore } = useStore()
  const [colorHeader, setColorHeader] = useState(false)
  const history = useHistory()
  const location = useLocation<any>()
  const { pathname } = useLocation()

  const scrollHeader = () => {
    const last_known_scroll_position = window.scrollY
    if (last_known_scroll_position <= 10) {
      setColorHeader(false)
    } else {
      setColorHeader(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader)
    return () => {
      window.removeEventListener('scroll', scrollHeader)
    }
  }, [])
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <header
      className={classnames({
        [styles.mainHeader]: true,
        [styles.colorHeader]: colorHeader,
      })}
    >
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
              <a className={styles.link} href="/aboutUs">
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
            <li className={styles.item} onClick={()=> history.push('/contact')}>
              <a className={styles.link}>
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
            <li className={styles.item} onClick={() => history.push('/likes')}>
              <a className={styles.link}>
                <FontAwesomeIcon
                  icon={faHeart}
                  color="#9fcb22"
                  className={styles.icon}
                />
              </a>
            </li>
            <li className={styles.item} onClick={() => history.push('/cart')}>
              <a className={styles.linkCart}>
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
  )
})

export default Header
