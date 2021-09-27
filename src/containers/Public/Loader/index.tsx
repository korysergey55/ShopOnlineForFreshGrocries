import * as React from 'react'
import styles from './styles.module.scss'
import Load from 'react-loader-spinner'
const Loader = () => {
  return (
    <>
      <div className={styles.loader}>
        <Load
          type="Circles"
          color=" #9fcb22"
          height={80}
          width={80}
          timeout={1000}
        />
        <h2 className={styles.loadingText}>...Loading</h2>
      </div>
    </>
  )
}

export default Loader
