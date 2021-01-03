import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div>
      <Head>
        <title>about | kazumalab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="images/profile_icon.JPG" className={styles.profileImage} width="200" />
        <h2 className={styles.profileName}>kazumalab</h2>
        <p className={styles.profileDescription}>
          1994年徳島県生まれ。高校卒業後、大阪へ大学で進学し、編入で琉球大学に編入学。
          <br />大学卒業後は(株)みんなのウェディングに入社しエンジニアとして働く。
          <br />現在は(株)LinQにジョインしソフトウェアエンジニアとして働いている。
        </p>

        <div className={styles.back}>
          <Link href="/">
            <a>
              back
            </a>
          </Link>
        </div>
      </main>

      <footer className="footer">
        <p>kazumalab 2020</p>
      </footer>
    </div>
  )
}