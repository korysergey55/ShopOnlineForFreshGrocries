import * as React from 'react'
import styles from './styles.module.scss'
import FormBannerImg from '../../sources/images/Footer/Left_Image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faPinterest,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <form className={styles.form}>
            <h2 className={styles.title}>Subscribe To Newsletter</h2>
            <input
              className={styles.input}
              placeholder="Enter Your Email"
            ></input>
            <button className={styles.button} type="submit">
              Subscribe Now
            </button>
            <img className={styles.img} src={FormBannerImg} alt="FormBanner" />
          </form>
          <ul className={styles.list}>
            <li className={styles.item}>
              <h4 className={styles.title}>Store Location</h4>
              <p className={styles.subtitle}>Address:</p>
              <a
                className={styles.text}
                href="https://www.google.com/maps/place/121+King+St,+Melbourne+VIC+3000,
                +%D0%90%D0%B2%D1%81%D1%82%D1%80%D0%B0%D0%BB%D0%B8%D1%8F/@-37.8172467,
                144.9535863,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad65d4dd5a05d97:0x3e64f855a564844d!8m2!3d
                -37.817251!4d144.955775?hl=ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                121 King Street Melbourne,3000, Australia
              </a>
              <p className={styles.subtitle}>Email:</p>
              <a className={styles.text} href="mailto:info@groxistore.com">
                korysergey55@gmail.com
              </a>
              <p className={styles.subtitle}>Phone:</p>
              <a className={styles.text} href="tel:+380633926523">
                +380633926523
              </a>
            </li>

            <li className={styles.item}>
              <h4 className={styles.title}>Useful Links</h4>
              <p className={styles.text}>About us</p>
              <p className={styles.text}>Blog</p>
              <p className={styles.text}>Check out</p>
              <p className={styles.text}>Contact</p>
              <p className={styles.text}>Service</p>
              <p className={styles.text}>Shop</p>
            </li>

            <li className={styles.item}>
              <h4 className={styles.title}>Categories</h4>
              <p className={styles.text}>Fruits & Vegetables</p>
              <p className={styles.text}>Dairy Products</p>
              <p className={styles.text}>Package Foods</p>
              <p className={styles.text}>Beverage</p>
              <p className={styles.text}>Health & Wellness</p>
              <p className={styles.text}>Meat Varieties</p>
            </li>

            <li className={styles.item}>
              <h4 className={styles.title}>Opening Hours</h4>
              <p className={styles.subtitle}>Monday – Saturday</p>
              <p className={styles.text}>12.00 – 14.45</p>
              <p className={styles.subtitle}>Sunday – Thursday</p>
              <p className={styles.text}>17.30 – 00.00</p>
              <p className={styles.subtitle}>Friday – Saturday</p>
              <p className={styles.text}>17.30 – 00.00</p>
            </li>
          </ul>
          <div className={styles.copyright}>
            <p className={styles.text}>
              Copyright 2020, Groxi Store. All Rights Reserved.
            </p>
            <p className={styles.followUs}>Follow Us:</p>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a className={styles.link} href="/">
                  <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="/">
                  <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="/">
                  <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="/">
                  <FontAwesomeIcon icon={faPinterest} className={styles.icon} />
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="/">
                  <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
