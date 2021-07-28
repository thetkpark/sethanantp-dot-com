import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import styles from '../styles/AboutItem.module.css'
import { Fragment } from 'react'

const AboutItem = ({ item }) => {
  const { title, detail1, detail2, github, googlePlay, website } = item

  const getIcon = (href, icon) => {
    return (
      <Link href={href}>
        <a>
          <FontAwesomeIcon icon={icon} color="#F4F3F3" size="lg" className={styles.icon} />
        </a>
      </Link>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <div className={styles.iconsContainer}>
          {github ? getIcon(github, faGithub) : undefined}
          {website ? getIcon(website, faExternalLinkAlt) : undefined}
          {googlePlay ? getIcon(googlePlay, faGooglePlay) : undefined}
        </div>
      </div>
      <h4>{detail1}</h4>
      <h4>{detail2}</h4>
    </div>
  )
}

export default AboutItem
