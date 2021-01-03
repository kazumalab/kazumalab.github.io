import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import ListLink from '../components/ListLink'

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
            <Link href="/about">
              <a>
                About
              </a>
            </Link>
          </li>
          <ListLink title="Blog" url="https://kazumalab.hatenablog.com/"></ListLink>
          <ListLink title="Twitter" url="https://twitter.com/kazumalab"></ListLink>
          <ListLink title="Github" url="https://github.com/kazumalab"></ListLink>
          <ListLink title="npm" url="https://www.npmjs.com/~kazumalab"></ListLink>
        </ul>
      </main>

      <footer className={styles.footer}>
        <p>kazumalab 2020</p>
      </footer>
    </div>
  )
}
