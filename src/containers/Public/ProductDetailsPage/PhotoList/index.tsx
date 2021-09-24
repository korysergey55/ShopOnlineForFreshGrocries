import React from 'react'
import { useStore } from 'stores'
import styles from './styles.module.scss'

interface IProps {
  item?: string
 
 }
// const contentStyle: any = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// }
const PhotoList: React.FC<IProps> = ({ item }) => {
  const { productStore } = useStore()
  const changeFoto = () => {
    console.log('changed')
    productStore.setFoto(item)
    console.log(item)
  }
  return (
    <>
      <li  className={styles.li} onClick={changeFoto}>
        <img className={styles.img} src={item} alt=""></img>
      </li>
    </>
  )
}

export default PhotoList;