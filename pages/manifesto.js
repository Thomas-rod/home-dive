import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Team.module.css'
import utilStyle from '../styles/utils.module.css'

export default function Manifesto() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={styles.containerTeam}>
                <h1 className={`${utilStyle.headingTitle} ${utilStyle.bold}`}>Our Manifesto</h1>
                <p className={utilStyle.headingSubTitle}>Coming soon ⏳</p>
            </div>
        </Layout>
    )
  }