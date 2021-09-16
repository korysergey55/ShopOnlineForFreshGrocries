import * as React from 'react'
import styles from './styles.module.scss'
import customerLogo from '../../sources/images/customersSaying/customerLogo.png'
import customerLogo2 from '../../sources/images/customersSaying/customerLogo2.png'
import customerLogo3 from '../../sources/images/customersSaying/customerLogo3.png'
import customerLogo4 from '../../sources/images/customersSaying/customerLogo4.png'

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
              <p className={styles.customersSaying_list_item_text}>
                ”Quisquam est, qui dolorem ipsum quia dolor sit consectetur
                adipisci velit sed quia non numqua eius modi tempora incidunt ut
                labore et dolore magnam aliquam quaerat voluptatem repudia sint
                et molestiae”
              </p>
              <ul className={styles.customersSaying_starsList}>
                <li className={styles.customersSaying_starsList_item}>
                  <a className={styles.customersSaying_starsList_item_link}></a>
                </li>
                <li className={styles.customersSaying_starsList_item}>
                  <a className={styles.customersSaying_starsList_item_link}></a>
                </li>
                <li className={styles.customersSaying_starsList_item}>
                  <a className={styles.customersSaying_starsList_item_link}></a>
                </li>
                <li className={styles.customersSaying_starsList_item}>
                  <a className={styles.customersSaying_starsList_item_link}></a>
                </li>
                <li className={styles.customersSaying_starsList_item}>
                  <a className={styles.customersSaying_starsList_item_link}></a>
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
              <p className={styles.customersSaying_list_item_text}>
                ”Exercitationem ullam corporis suscipit laborio nisi ut aliquid
                ex ea commodi consequatur uis autem vel eum iure reprehenderit
                qui in ea vou velit esse quam nihil molestiae consequatur, vel
                illum qui dolorem eum fugiat”
              </p>
              <ul className={styles.customersSaying_starsList}>
                <li className={styles.customersSaying_starsList_item}>
                  <a className={styles.customersSaying_starsList_item_link}></a>
                </li>
                <li className={styles.customersSaying_starsList_item}>
                  <a className={styles.customersSaying_starsList_item_link}></a>
                </li>
                <li className={styles.customersSaying_starsList_item}>
                  <a className={styles.customersSaying_starsList_item_link}></a>
                </li>
                <li className={styles.customersSaying_starsList_item}>
                  <a className={styles.customersSaying_starsList_item_link}></a>
                </li>
                <li className={styles.customersSaying_starsList_item}>
                  <a className={styles.customersSaying_starsList_item_link}></a>
                </li>
              </ul>
              <p className={styles.customersSaying_list_item_userName}>Kevin Andrew</p>
              <p className={styles.customersSaying_list_item_userCompany}>Manager, Rex </p>
            </li>
          </ul>

          <ul className={styles.customersSaying_logoList}>
            <li className={styles.customersSaying_logoList_item}>
              <img className={styles.customersSaying_logoList_item_img} src={customerLogo} alt=''/>
            </li>
            <li className={styles.customersSaying_logoList_item}>
              <img className={styles.customersSaying_logoList_item_img} src={customerLogo2} alt=''/>
            </li>
            <li className={styles.customersSaying_logoList_item}>
              <img className={styles.customersSaying_logoList_item_img} src={customerLogo3} alt=''/>
            </li>
            <li className={styles.customersSaying_logoList_item}>
              <img className={styles.customersSaying_logoList_item_img} src={customerLogo4} alt=''/>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default CustomersSaying
