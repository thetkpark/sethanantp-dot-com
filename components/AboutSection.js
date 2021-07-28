import AboutItem from './AboutItem'
import styles from '../styles/AboutSection.module.css'

const AboutSection = ({ heading, items }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.headerText}>{heading}</h2>
      <div className={styles.gridContainer}>
        {items.map(({ title, detail1, detail2 }, index) => (
          <AboutItem key={index} title={title} detail1={detail1} detail2={detail2} />
        ))}
      </div>
    </div>
  )
}

export default AboutSection
