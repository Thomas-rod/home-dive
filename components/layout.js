import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/footer'

import styles from './layout.module.css'
import utilStyle from '../styles/utils.module.css'

export const siteTitle = "Dive - Simple & powerful analytics tool"

import dynamic from 'next/dynamic'

const CrispWithNoSSR = dynamic(
  () => import('../components/crisp'),
  { ssr: false }
)

export default function Layout({ children, siteTitle}) {
  return (
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico"/>
          {/* Open Graph */}
          <meta property="og:url" content="http://www.diveanalytics.co" key="ogurl" />
          <meta property="og:title" content={siteTitle} key="ogtitle" />
          <meta property="og:description" content="Simple & powerful analytics to unleash your brand growth" key="ogdesc" />
          <meta property="og:image" content="https://homeimagedive.s3.eu-west-3.amazonaws.com/og-image.png"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-KR6FGBNXQH"/>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KR6FGBNXQH', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        {/* <CrispWithNoSSR/> */}
        <header>
          <div className={styles.bannerLinear}><p className={utilStyle.sizeSubtitleText}>We’re currently running a private beta and looking for early testers! 🔥 🔥 🔥</p></div>
          <nav className={utilStyle.paddingSide}>
            <div className={styles.listNavigation}>
              <div className={styles.internalNavigation}>
                <Link href="/">
                  <a className={styles.logo}>
                    <Image src="/logo-dive.svg" alt="logo-dive" width="195" height="73" />
                  </a>
                </Link>
                <Link href="/team">
                  <a className={utilStyle.headingSubTitle}>Team</a>
                </Link>              
                <Link href="/manifesto">                
                  <a className={utilStyle.headingSubTitle}>Manifesto</a>
                </Link>
              </div>
              <div className={styles.appNavigation}>
                <a href="#" className={utilStyle.headingSubTitle}>Login</  a>
              </div>
            </div>
          </nav>
        </header>
        <main className={utilStyle.paddingSide}>
          <div className={styles.backgroundMainLayout}>
            <span className={`${styles.bubbleHome} ${styles.bubbleHomePurple}`}></span>
            <span className={`${styles.bubbleHome} ${styles.bubbleHomeGreen}`}></span>
            <span className={`${styles.bubbleHome} ${styles.bubbleHomeYellow}`}></span>
            <span className={`${styles.bubbleHome} ${styles.bubbleHomeCoral}`}></span>
          </div>
          {children}
        </main>
        <Footer/>
      </div>
  )
}