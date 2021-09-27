import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import { createPortal } from 'react-dom'
import { useStore } from 'stores'

const Modal: React.FC = ({ children }) => {
  const { productStore } = useStore()

  useEffect(() => {
    window.addEventListener('keydown', handleEsc)
    const body: any = document.querySelector('body')
    body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleEsc)
      const body: any = document.querySelector('body')
      body.style.overflow = 'auto'
    }
  })

  const handleEsc = (evt: any) => {
    if (evt.code === 'Escape') {
      productStore.setModal()
    }
  }
  const handleBackdropClick = (evt: any) => {
    if (evt.target !== evt.currentTarget) return
    productStore.setModal()
  }
  const taggleModal = () => {
    productStore.setModal()
  }
  const modalRoot: any = document.getElementById('modal-root')
  return createPortal(
    <>
      <div className={styles.Overlay} onClick={handleBackdropClick}>
        <div className={styles.Modal}>
          <button
            type="button"
            className={styles.closeModal}
            onClick={taggleModal}
          >
            X
          </button>
          <div className={styles.childrenContainer}>{children}</div>
        </div>
      </div>
    </>,
    modalRoot
  )
}

export default Modal
