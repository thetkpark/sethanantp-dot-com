import AboutItem from './AboutItem'
import styles from '../styles/AboutSection.module.css'

const AboutSection = () => {
  return (
    <div>
      <h2>Education</h2>
      <div className={styles.gridContainer}>
        <AboutItem />
        <AboutItem />
      </div>
    </div>
  )
}

export default AboutSection
