import * as React from 'react'
import styles from './styles.module.scss'
import Header from 'components/Header'
import NotFoundComponent from 'containers/Public/NotFoundPage/NotFoundComponent/index'

const NotFoundPage = () => {
  return (
    <>
      <div className={styles.headerHeroContainer}>
        <div className={styles.headerLeftBg}></div>
        <Header />
        <NotFoundComponent/>
      </div>
    </>
  )
}

export default NotFoundPage
