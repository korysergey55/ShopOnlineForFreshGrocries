import React from 'react'
import { useStore } from 'stores'
import styles from './styles.module.scss'

interface IProps {
  item?: string 
 }

const PhotoList: React.FC<IProps> = ({ item }) => {
  const { productStore } = useStore()
  const changeFoto = () => {
    console.log('changed')
    productStore.setFoto(item)
    console.log(item)
  }
  return (
    <>
      <li className={styles.li} onClick={changeFoto}>
        <img className={styles.img} src={item} alt=""></img>
      </li>
    </>
  )
}

export default PhotoList;