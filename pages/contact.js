import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'
import { getContactJoke } from '../utils/joke'
import styles from '../styles/Contact.module.css'

const Contacts = ({ joke }) => {
  const contactData = [
    {
      icon: faEnvelope,
      text: 'sethanant.p@icloud.com',
      link: 'mailto:sethanant.p@icloud.com',
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
        <div className={styles.joke}>
          <Image src="/images/nong.svg" width="40px" height="70px" alt="just a joke" />
          <span>{joke}</span>
        </div>
      </div>
    </Fragment>
  )
}

export async function getStaticProps(_) {
  return {
    props: {
      joke: getContactJoke(),
    },
  }
}

export default Contacts
