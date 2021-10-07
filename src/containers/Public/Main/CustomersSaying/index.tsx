import * as React from 'react'
import styles from './styles.module.scss'
import CustomerLogoImg from '../../../../sources/images/Main/customersSaying/customerLogo.png'
import CustomerLogoSecondImg from '../../../../sources/images/Main/customersSaying/customerLogo2.png'
import СustomerLogoThirdImg from '../../../../sources/images/Main/customersSaying/customerLogo3.png'
import CustomerLogoFourthImg from '../../../../sources/images/Main/customersSaying/customerLogo4.png'
import BeforeImg from '../../../../sources/images/Main/customersSaying/before.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const CustomersSaying = () => {
  return (
    <>
      <section className={styles.customersSaying}>
        <div className={styles.container}>
          <h3 className={styles.customersSaying_subtitle}>Testimonials</h3>
          <h2 className={styles.customersSaying_title}>
            What Our Customers Saying
          </h2>
          <ul className={styles.customersSaying_list}>
            <li className={styles.customersSaying_list_item}>
              <img
                className={styles.customersSaying_list_item_img}
                src={BeforeImg}
                alt="img"
              />
              <p className={styles.customersSaying_list_item_text}>
                ”Quisquam est, qui dolorem ipsum quia dolor sit consectetur
                adipisci velit sed quia non numqua eius modi tempora incidunt ut
                labore et dolore magnam aliquam quaerat voluptatem repudia sint
                et molestiae”
              </p>
              <ul className={styles.customersSaying_starsList}>
                <li className={styles.customersSaying_starsList_item}>
                  <a
                    className={styles.customersSaying_starsList_item_link}
                    href="/"
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.customersSaying_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.customersSaying_starsList_item}>
                  <a
                    className={styles.customersSaying_starsList_item_link}
                    href="/"
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.customersSaying_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.customersSaying_starsList_item}>
                  <a
                    className={styles.customersSaying_starsList_item_link}
                    href="/"
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.customersSaying_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.customersSaying_starsList_item}>
                  <a
                    className={styles.customersSaying_starsList_item_link}
                    href="/"
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.customersSaying_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.customersSaying_starsList_item}>
                  <a
                    className={styles.customersSaying_starsList_item_link}
                    href="/"
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.customersSaying_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
              </ul>
              <p className={styles.customersSaying_list_item_userName}>
                Alina Parker
              </p>
              <p className={styles.customersSaying_list_item_userCompany}>
                Ceo, GTD
              </p>
            </li>

            <li className={styles.customersSaying_list_item}>
              <img
                className={styles.customersSaying_list_item_img}
                src={BeforeImg}
                alt="Img"
              />
              <p className={styles.customersSaying_list_item_text}>
                ”Exercitationem ullam corporis suscipit laborio nisi ut aliquid
                ex ea commodi consequatur uis autem vel eum iure reprehenderit
                qui in ea vou velit esse quam nihil molestiae consequatur, vel
                illum qui dolorem eum fugiat”
              </p>
              <ul className={styles.customersSaying_starsList}>
                <li className={styles.customersSaying_starsList_item}>
                  <a
                    className={styles.customersSaying_starsList_item_link}
                    href="/"
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.customersSaying_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.customersSaying_starsList_item}>
                  <a
                    className={styles.customersSaying_starsList_item_link}
                    href="/"
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.customersSaying_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.customersSaying_starsList_item}>
                  <a
                    className={styles.customersSaying_starsList_item_link}
                    href="/"
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.customersSaying_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.customersSaying_starsList_item}>
                  <a
                    className={styles.customersSaying_starsList_item_link}
                    href="/"
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.customersSaying_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
                <li className={styles.customersSaying_starsList_item}>
                  <a
                    className={styles.customersSaying_starsList_item_link}
                    href="/"
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles.customersSaying_starsList_item_link_icon
                      }
                    />
                  </a>
                </li>
              </ul>
              <p className={styles.customersSaying_list_item_userName}>
                Kevin Andrew
              </p>
              <p className={styles.customersSaying_list_item_userCompany}>
                Manager, Rex{' '}
              </p>
            </li>
          </ul>

          <ul className={styles.customersSaying_logoList}>
            <li className={styles.customersSaying_logoList_item}>
              <img
                className={styles.customersSaying_logoList_item_img}
                src={CustomerLogoImg}
                alt="CustomerLogo"
              />
            </li>
            <li className={styles.customersSaying_logoList_item}>
              <img
                className={styles.customersSaying_logoList_item_img}
                src={CustomerLogoSecondImg}
                alt="CustomerLogo"
              />
            </li>
            <li className={styles.customersSaying_logoList_item}>
              <img
                className={styles.customersSaying_logoList_item_img}
                src={СustomerLogoThirdImg}
                alt="CustomerLogo"
              />
            </li>
            <li className={styles.customersSaying_logoList_item}>
              <img
                className={styles.customersSaying_logoList_item_img}
                src={CustomerLogoFourthImg}
                alt="CustomerLogo"
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default CustomersSaying
