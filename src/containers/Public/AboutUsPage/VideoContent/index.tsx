import * as React from 'react'
import styles from './styles.module.scss'
import playStyleIcon from 'sources/images/AboutUsPage/playIcon.png'
import ReactPlayer from 'react-player'

const VideoContent = () => {
  return (
    <>
      <section className={styles.videoContent}>
        <div className={styles.container}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="100%"
            height="643px"
            playIcon={<img src={playStyleIcon}/>}
          />
        </div>
      </section>
    </>
  )
}

export default VideoContent
