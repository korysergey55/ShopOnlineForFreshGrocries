import React from 'react'
import IProduct from 'models/product'
import styles from './styles.module.scss'
import classNames from 'classnames'

interface IButtonProps {
  
  value?: number
  incrementProduct: Function
  decrimentProduct: Function
  width?: boolean
}
const ButtonComponent: React.FC<IButtonProps> = ({
 
  value = 0,
  incrementProduct,
  decrimentProduct,
  width = false,
}) => {
  return (
    <>
      <div
        className={classNames({
          [styles.btnContainer]: true,
          [styles.btnContainerProdDetails]: width,
        })}
      >
        <button
          className={styles.btn}
          type="button"
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            incrementProduct()
          }}
        >
          +
        </button>
        <button
          className={styles.btn_text}
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
          }}
        >
          {value }
        </button>
        <button
          className={styles.btn}
          type="button"
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            decrimentProduct()
          }}
        >
          -
        </button>
      </div>
    </>
  )
}

export default ButtonComponent
