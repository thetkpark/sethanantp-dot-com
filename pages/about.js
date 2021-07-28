import Head from 'next/head'
import { Fragment } from 'react'
import styles from '../styles/About.module.css'
import AboutSection from '../components/AboutSection'

const About = () => {
  return (
    <Fragment>
      <Head>
        <title>Sethanant Pipatpakorn | About</title>
      </Head>
      <div className={styles.container}>
        <AboutSection />
      </div>
    </Fragment>
  )
}

export default About
