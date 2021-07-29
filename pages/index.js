import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'semantic-ui-react'
import { Fragment } from 'react'
import styles from '../styles/Home.module.css'
import 'semantic-ui-css/components/button.min.css'
import { getJoke } from '../utils/joke'

export default function Home({ joke }) {
  return (
    <Fragment>
      <Head>
        <title>Sethanant Pipatpakorn | Backend Developer</title>
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
            <div style={{ width: '5vw' }} />
            <div>
              <h1 className={styles.name}>Sethanant</h1>
              <h1 className={styles.name}>Pipatpakorn</h1>
            </div>
          </div>
          <div className={styles.sectorTwo}>
            <h4>Backend, Cloud, Ops, Blockchain, ... but not frontend</h4>
          </div>
          <div className={styles.sectorThree}>
            <Button inverted basic circular>
              <Link href="/about">
                <a>About</a>
              </Link>
            </Button>
            <Button inverted basic circular>
              <a href="https://blog.sethanantp.com">Blog</a>
            </Button>
            <Button inverted basic circular>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </Button>
          </div>
        </div>
        <div className={styles.joke}>
          <Image src="/images/nong.svg" width="40px" height="70px" alt="just a joke" />
          <span>{joke}</span>
        </div>
      </div>
    </Fragment>
  )
}

export async function getServerSideProps(_) {
  return {
    props: {
      joke: getJoke(),
    },
  }
}
