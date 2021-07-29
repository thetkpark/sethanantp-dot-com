import { Fragment } from 'react'
import styles from '../styles/SkillSection.module.css'

const SkillSection = ({ heading, items }) => {
  const skillItem = items.map((text, index) => {
    return (
      <Fragment key={index}>
        <h4 className={styles.skillItem}>{text}</h4>
      </Fragment>
    )
  })

  return (
    <div className={styles.container}>
      <h2 className={styles.skillHeading}>{heading}</h2>
      <div className={styles.skillItemsContainer}>{skillItem}</div>
    </div>
  )
}
export default SkillSection
