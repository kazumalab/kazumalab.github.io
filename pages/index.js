import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>kazumalab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>kazumalab's page</h1>
      </main>

      <footer className={styles.footer}>
        <p>kazumalab 2020</p>
      </footer>
    </div>
  )
}
