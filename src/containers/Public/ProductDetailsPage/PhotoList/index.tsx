import React from 'react'
import { useStore } from 'stores'
import styles from './styles.module.scss'

interface IProps {
  item?: string
}

const PhotoList: React.FC<IProps> = ({ item }) => {
  const { productStore } = useStore()
  const changePhoto = () => {
    productStore.setPhoto(item)
  }
  return (
    <>
      <li className={styles.li} onClick={changePhoto}>
        <img className={styles.img} src={item} alt=""></img>
      </li>
    </>
  )
}

export default PhotoList
