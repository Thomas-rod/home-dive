import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

import styles from '../styles/Team.module.css'
import utilStyle from '../styles/utils.module.css'

export default function Success() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={styles.containerTeam}>
                <h1 className={`${utilStyle.headingTitle} ${utilStyle.bold}`}>Thanks for signing up</h1>
                <p className={utilStyle.headingSubTitle}>We’ll be in touch shortly. We are currently running a private beta and only onboarding a few users per week to ensure we provide the best experience</p>
                <p>Keep an eye and your inbox! 💌</p>
            </div>
        </Layout>
    )
  }