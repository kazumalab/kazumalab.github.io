import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>kazumalab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>kazumalab's page</h1>

        <ul>
          <li>
            <Link href="https://kazumalab.hatenablog.com/">
              <a target="_blank">
                Blog
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/kazumalab">
              <a target="_blank">
                Twitter
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/kazumalab" target="_blank">
              <a target="_blank">
                Github
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.npmjs.com/~kazumalab" target="_blank">
              <a target="_blank">
                npm
              </a>
            </Link>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <p>kazumalab 2020</p>
      </footer>
    </div>
  )
}
