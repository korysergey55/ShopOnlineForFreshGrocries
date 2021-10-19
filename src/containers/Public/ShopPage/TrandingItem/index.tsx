import * as React from 'react'
import styles from './styles.module.scss'
import IProduct from '../../../../models/product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router'

interface IProps {
  item: IProduct
}

const TrandingItem: React.FC<IProps> = ({ item }) => {
  const history = useHistory()
  return (
    <>
      <li className={styles.item} onClick={()=>history.push(`/product/${item.id}`)}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={item.img} alt="img" />
        </div>
        <div className={styles.rigthSide}>
          <h4 className={styles.title}>{item.text}</h4>
          <p className={styles.oldPrice}>${item.oldPrice}</p>
          <p className={styles.price}>${item.price}</p>
          <ul className={styles.starsList}>
            <li className={styles.starsItem}>
              <a className={styles.link} href="/">
                <FontAwesomeIcon icon={item.star} className={styles.starIcon} />
              </a>
            </li>
            <li className={styles.starsItem}>
              <a className={styles.link} href="/">
                <FontAwesomeIcon icon={item.star} className={styles.starIcon} />
              </a>
            </li>
            <li className={styles.starsItem}>
              <a className={styles.link} href="/">
                <FontAwesomeIcon icon={item.star} className={styles.starIcon} />
              </a>
            </li>
            <li className={styles.starsItem}>
              <a className={styles.link} href="/">
                <FontAwesomeIcon
                  icon={item.starRegular}
                  className={styles.starIcon}
                />
              </a>
            </li>
            <li className={styles.starsItem}>
              <a className={styles.link} href="/">
                <FontAwesomeIcon
                  icon={item.starRegular}
                  className={styles.starIcon}
                />
              </a>
            </li>
          </ul>
        </div>
      </li>
    </>
  )
}

export default TrandingItem
