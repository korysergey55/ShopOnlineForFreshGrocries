import * as React from 'react'
import styles from './styles.module.scss'
const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <a className={styles.logo} href="">
            Logo
            <img src="../../sources/images/Vector_Smart_Object.png"></img>
            {/* <svg className="logoIconSvg" width="154" height="59">
          <use href="../icons/Vector_Smart_Object.png"></use>
        </svg> */}
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
                About
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
            <li className="sotialItem">
              <a className={styles.sotialLink}>
                <svg className={styles.sotiaIconSvg}>
                  <use href=""></use>
                </svg>
              </a>
            </li>
            <li className="sotialItem">
              <a className={styles.sotialLink}>
                <svg className={styles.sotiaIconSvg}>
                  <use href=""></use>
                </svg>
              </a>
            </li>
            <li className="sotialItem">
              <a className={styles.sotialLink}>
                <svg className={styles.sotiaIconSvg}>
                  <use href=""></use>
                </svg>
              </a>
            </li>
            <li className="sotialItem">
              <a className={styles.sotialLink}>
                <svg className={styles.sotiaIconSvg}>
                  <use href=""></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
