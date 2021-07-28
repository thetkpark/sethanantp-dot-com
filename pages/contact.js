import Head from 'next/head'
import Link from 'next/link'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'
import styles from '../styles/Contact.module.css'

const Contacts = () => {
  const contactData = [
    {
      icon: faEnvelope,
      text: 'sethanant.p@icloud.com',
      link: '',
    },
    {
      icon: faGithub,
      text: 'github.com/thetkpark',
      link: 'https://github.com/thetkpark',
    },
    {
      icon: faLinkedin,
      text: 'linkedin.com/in/sethanant-p',
      link: 'https://linkedin.com/in/sethanant-p',
    },
  ]

  const contact = contactData.map(({ icon, text, link }, index) => {
    return (
      <div key={index} className={styles.contact}>
        <Link href={link}>
          <a>
            <FontAwesomeIcon size={'3x'} icon={icon} color="#F2F2F2" />
          </a>
        </Link>
        <div style={{ width: '40px' }} />
        <Link href={link}>
          <a>
            <h4 className={styles.contactText}>{text}</h4>
          </a>
        </Link>
      </div>
    )
  })

  return (
    <Fragment>
      <Head>
        <title>Sethanant Pipatpakorn | Contact</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.heading}>Contact</h1>
          <div>{contact}</div>
        </div>
      </div>
    </Fragment>
  )
}

export default Contacts
