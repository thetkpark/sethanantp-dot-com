import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
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
          <Link href="/about">
            <a className={styles.link}>About</a>
          </Link>
          <Link href="https://blog.sethanantp.com">
            <a className={styles.link}>Blog</a>
          </Link>
          <Link href="/contact">
            <a className={styles.link}>Contact</a>
          </Link>
        </div>
      </div>
      <div className={styles.joke}>
        <Image src="/images/nong.svg" width="40px" height="70px" alt="just a joke" />
        <span>What? no frontend</span>
      </div>
    </div>
  )
}
