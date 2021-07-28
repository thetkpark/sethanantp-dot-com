import { Fragment } from 'react'

const SkillSection = ({ heading, items }) => {
  const skillItem = items.map((text, index) => {
    return (
      <Fragment key={index}>
        <h4>{text}</h4>
      </Fragment>
    )
  })

  return (
    <div>
      <h2>{heading}</h2>
      <div>{skillItem}</div>
    </div>
  )
}
export default SkillSection
