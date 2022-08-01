import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'semantic-ui-react'
import { Fragment } from 'react'
import styles from '../styles/Home.module.css'
import 'semantic-ui-css/components/button.min.css'
import { getJoke } from '../utils/joke'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Sethanant Pipatpakorn | Backend Developer</title>
        <meta name="theme-color" content="#1E1D1D"></meta>
      </Head>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.sectorOne}>
            <Image
              className={styles.profileImage}
              width="200px"
              height="200px"
              alt="profile picture"
              src="/images/profile_pic.webp"
            />
            <div style={{ width: '4vw' }} />
            <div className={styles.nameContainer}>
              <h1 className={styles.name}>Sethanant</h1>
              <h1 className={styles.name}>Pipatpakorn</h1>
            </div>
          </div>
          <div className={styles.sectorTwo}>
            <h4>Backend, Cloud, Ops, Blockchain, ... but not frontend</h4>
          </div>
          <div className={styles.sectorThree}>
            <Link href="/about" passHref>
              <Button inverted basic circular>
                <a className={styles.link}>About</a>
              </Button>
            </Link>
            <Button inverted basic circular>
              <a className={styles.link} href="https://blog.sethanantp.com">
                Blog
              </a>
            </Button>
            <Link href="/contact" passHref>
              <Button inverted basic circular>
                <a className={styles.link}>Contact</a>
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles.joke}>
          <Image src="/images/nong.svg" width="40px" height="70px" alt="just a joke" />
          <span>{getJoke()}</span>
        </div>
      </div>
    </Fragment>
  )
}

