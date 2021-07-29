import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import styles from '../styles/About.module.css'
import AboutSection from '../components/AboutSection'
import aboutData from '../utils/aboutData'
import skillsData from '../utils/skillsData'
import BackButton from '../components/BackButton'
import SkillSection from '../components/SkillsSection'

const About = () => {
  return (
    <Fragment>
      <Head>
        <title>Sethanant Pipatpakorn | About</title>
      </Head>
      <div className={styles.container}>
        <BackButton />
        <div className={styles.main}>
          <div className={styles.header}>
            <Image
              className={styles.profileImage}
              width="220px"
              height="220px"
              alt="profile picture"
              src="/images/profile_pic.webp"
            />
            <div style={{ width: '4vw' }} />
            <div className={styles.texts}>
              <h1>Sethanant Pipatpakorn</h1>
              <h4>{`"We choose to go to the moon ... not because they are easy, but because they are hard." - JFK`}</h4>
            </div>
          </div>
          {aboutData.map(({ heading, items }, index) => (
            <AboutSection key={index} heading={heading} items={items} />
          ))}
          <div>
            <h2 className={styles.headerText}>Skills</h2>
            <div className={styles.skillMain}>
              {skillsData.map(({ heading, items }, index) => (
                <SkillSection key={index} heading={heading} items={items} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default About
