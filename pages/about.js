import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import styles from '../styles/About.module.css'
import AboutSection from '../components/AboutSection'
import aboutData from '../utils/aboutData'

const About = () => {
  return (
    <Fragment>
      <Head>
        <title>Sethanant Pipatpakorn | About</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.header}>
            <Image
              className={styles.profileImage}
              width="200px"
              height="200px"
              alt="profile picture"
              src="/images/profile_pic.webp"
            />
            <div style={{ width: '4vw' }} />
            <div className={styles.texts}>
              <h1>Sethanant Pipatpakorn</h1>
              <h4>What text should go on here</h4>
            </div>
          </div>
          {aboutData.map(({ heading, items }, index) => (
            <AboutSection key={index} heading={heading} items={items} />
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default About
