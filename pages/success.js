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
                <p className={utilStyle.headingSubTitle}>We'll be in touche. We're only onboarding a feew users per week to ensure we provide the experience</p>
                <p>Keep an eye on your inbox, so you don't miss out!</p>
            </div>
        </Layout>
    )
  }