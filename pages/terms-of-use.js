import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Team.module.css'
import utilStyle from '../styles/utils.module.css'

export default function TermsOfUse() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={styles.containerTeam}>
                <h1 className={`${utilStyle.headingTitle} ${utilStyle.bold}`}>Terms of Use</h1>
                <p className={utilStyle.headingSubTitle}></p>
            </div>
        </Layout>
    )
  }