import * as React from 'react'
import styles from './styles.module.scss'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <ul className={styles.footer_list}>
            <li className={styles.footer_list_item}>
              <h4 className={styles.footer_list_item_title}>Store Location</h4>
              <p className={styles.footer_list_item_subtitle}>Address:</p>
              <p className={styles.footer_list_item_text}>
                121 King Street Melbourne,3000, Australia
              </p>
              <p className={styles.footer_list_item_subtitle}>Email:</p>
              <p className={styles.footer_list_item_text}>
                info@groxistore.com
              </p>
              <p className={styles.footer_list_item_subtitle}>Phone:</p>
              <p className={styles.footer_list_item_text}>+123456789</p>
            </li>

            <li className={styles.footer_list_item}>
              <h4 className={styles.footer_list_item_title}>Useful Links</h4>
              <p className={styles.footer_list_item_text}>About us</p>
              <p className={styles.footer_list_item_text}>Blog</p>
              <p className={styles.footer_list_item_text}>Check out</p>
              <p className={styles.footer_list_item_text}>Contact</p>
              <p className={styles.footer_list_item_text}>Service</p>
              <p className={styles.footer_list_item_text}>Shop</p>
            </li>

            <li className={styles.footer_list_item}>
              <h4 className={styles.footer_list_item_title}>Categories</h4>
              <p className={styles.footer_list_item_text}>
                Fruits & Vegetables
              </p>
              <p className={styles.footer_list_item_text}>Dairy Products</p>
              <p className={styles.footer_list_item_text}>Package Foods</p>
              <p className={styles.footer_list_item_text}>Beverage</p>
              <p className={styles.footer_list_item_text}>Health & Wellness</p>
              <p className={styles.footer_list_item_text}>Meat Varieties</p>
            </li>

            <li className={styles.footer_list_item}>
              <h4 className={styles.footer_list_item_title}>Opening Hours</h4>
              <p className={styles.footer_list_item_subtitle}>
                Monday – Saturday
              </p>
              <p className={styles.footer_list_item_text}>12.00 – 14.45</p>
              <p className={styles.footer_list_item_subtitle}>
                Sunday – Thursday
              </p>
              <p className={styles.footer_list_item_text}>17.30 – 00.00</p>
              <p className={styles.footer_list_item_subtitle}>
                Friday – Saturday
              </p>
              <p className={styles.footer_list_item_text}>17.30 – 00.00</p>
            </li>
          </ul>
          <div className={styles.footer_copyright}>
            <p className={styles.footer_copyright_text}>
              Copyright 2020, Groxi Store. All Rights Reserved.
            </p>
            <p className={styles.footer_copyright_followUs}>Follow Us:</p>
            <ul className={styles.footer_copyright_list}>
              <li className={styles.footer_copyright_item}>
                <a className={styles.footer_copyright_item_link}></a>
              </li>
              <li className={styles.footer_copyright_item}>
                <a className={styles.footer_copyright_item_link}></a>
              </li>
              <li className={styles.footer_copyright_item}>
                <a className={styles.footer_copyright_item_link}></a>
              </li>
              <li className={styles.footer_copyright_item}>
                <a className={styles.footer_copyright_item_link}></a>
              </li>
              <li className={styles.footer_copyright_item}>
                <a className={styles.footer_copyright_item_link}></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
