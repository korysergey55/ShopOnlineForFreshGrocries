import * as React from 'react'
import styles from './styles.module.scss'
import Header from 'components/Header'
import HeroAboutUs from 'containers/Public/AboutUsPage/HeroAboutUs/index'
import WeGive from 'containers/Public/AboutUsPage/WeGive/index'
import VisionGoal from 'containers/Public/AboutUsPage/VisionGoal/index'

const AboutUsPage = () => {
  return (
    <>
      <div className={styles.headerHeroContainer}>
        <div className={styles.headerLeftBg}></div>
        <Header />
        <HeroAboutUs />
      </div>
      <WeGive />
      <VisionGoal/>
    </>
  )
}

export default AboutUsPage
