import * as React from 'react'
import styles from './styles.module.scss'
import peopleImg from '../../../../sources/images/AboutUsPage/people.png'

const WeGive = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <img className={styles.img} src={peopleImg} alt="peopleImg"></img>
          <div className={styles.rigthSide}>
            <h3 className={styles.title}>
              We Give The Lowest Price on Grocery Items
            </h3>
            <p className={styles.text}>
              Neque porro quisquam est aui dolorem iesum ruia dolor sit amet,
              consectetur, adipisci velit, sed quia non numua eius modi tempora
              incidunt ut labore et dolore magnam volutatem exercitationem
              ullam.
              <br></br>
              <br></br>
              Quis autem vel eum iure reprehenderit aui in ea voluptae velit
              esse quam nihil molestiae consequatur, vel illum rui dolorem eum
              fugiat quo voluptas excepteur deserunt veniam adipisicing do
              adipisicing adipisicing proident esse aud irure commodo mollit
              voluptate irure alorem consequat ullamco do laboris.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default WeGive
