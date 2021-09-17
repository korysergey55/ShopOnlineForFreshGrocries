import * as React from 'react'
import styles from './styles.module.scss'
import formBanner from '../../sources/images/footer/Left_Image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faTwitter, faLinkedin, faPinterest, faInstagram,} from '@fortawesome/free-brands-svg-icons'


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
                <a className={styles.footer_copyright_item_link} href="">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className={styles.footer_copyright_item_link_icon}
                  />
                </a>
              </li>
              <li className={styles.footer_copyright_item}>
                <a className={styles.footer_copyright_item_link} href="">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className={styles.footer_copyright_item_link_icon}
                  />
                </a>
              </li>
              <li className={styles.footer_copyright_item}>
                <a className={styles.footer_copyright_item_link} href="">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className={styles.footer_copyright_item_link_icon}
                  />
                </a>
              </li>
              <li className={styles.footer_copyright_item}>
                <a className={styles.footer_copyright_item_link} href="">
                  <FontAwesomeIcon
                    icon={faPinterest}
                    className={styles.footer_copyright_item_link_icon}
                  />
                </a>
              </li>
              <li className={styles.footer_copyright_item}>
                <a className={styles.footer_copyright_item_link} href="">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={styles.footer_copyright_item_link_icon}
                  />
                </a>
              </li>
            </ul>
          </div>
          <form className={styles.footer_form}>
            <h2 className={styles.footer_form_title}>
              Subscribe To Newsletter
            </h2>
            <input
              className={styles.footer_form_input}
              placeholder="Enter Your Email Address"
            ></input>
            <button className={styles.footer_form_button} type="submit">
              Subscribe Now
            </button>
            <img className={styles.footer_form_img} src={formBanner} alt="" />
          </form>
        </div>
      </footer>
    </>
  )
}

export default Footer
