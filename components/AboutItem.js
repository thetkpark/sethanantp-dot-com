import styles from '../styles/AboutItem.module.css'

const AboutItem = ({ title, detail1, detail2 }) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <h4>{detail1}</h4>
      <h4>{detail2}</h4>
    </div>
  )
}

export default AboutItem
