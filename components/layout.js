import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

export const siteTitle = "Dive Analytics"

export default function Layout({ children}) {
  return (
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico"/>
          {/* META DESCRIPTION START */}
          <meta
            name="Description"
            content="Learn how to builde a website"
          />
          {/* <meta
            property="og:image"
            content=
          /> */}
          {/* <meta
            name="og:title"
            content="Dive Analytics - {}"
          /> */}
          {/* META DESCRIPTION END */}

        </Head>
        <header>
          <div className={styles.bannerLinear}><p className={utilStyles.sizeSubtitleText}>We are lauching a beta sooo blablablabla</p></div>
          <nav className={utilStyles.paddingSide}>
            <div className={styles.listNavigation}>
              <div className={styles.internalNavigation}>
                <Link href="/">
                  <a>
                    <Image src="/logo-dive.svg" alt="logo-dive" width="195" height="73" />
                  </a>
                </Link>
                <Link href="/team">
                  <a className={utilStyles.headingSubTitle}>Team</a>
                </Link>              
                <Link href="/manifesto">
                  <a className={utilStyles.headingSubTitle}>Manifesto</a>
                </Link>
              </div>
              <div className={styles.appNavigation}>
                <a href="#" className={utilStyles.headingSubTitle}>Login</  a>
              </div>
            </div>
          </nav>
        </header>
        <main className={utilStyles.paddingSide}>
          <div className={styles.backgroundMainLayout}>
            <span className={`${styles.bubbleHome} ${styles.bubbleHomePurple}`}></span>
            <span className={`${styles.bubbleHome} ${styles.bubbleHomeGreen}`}></span>
            <span className={`${styles.bubbleHome} ${styles.bubbleHomeYellow}`}></span>
            <span className={`${styles.bubbleHome} ${styles.bubbleHomeCoral}`}></span>
          </div>
          {children}
        </main>
        <footer className={utilStyles.paddingSide}>
        </footer>
      </div>
  )
}