import AboutItem from './AboutItem'
import styles from '../styles/AboutSection.module.css'

const AboutSection = ({ heading, items }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.headerText}>{heading}</h2>
      <div className={styles.gridContainer}>
        {items.map((item, index) => (
          <AboutItem key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default AboutSection
