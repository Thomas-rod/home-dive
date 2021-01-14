import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Image from 'next/image'

import styles from '../styles/Team.module.css'
import utilStyle from '../styles/utils.module.css'
import iconStyle from '../styles/icons.module.css'

import { library } from '@fortawesome/fontawesome-svg-core';

import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Team() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={styles.containerTeam}>
                <h1 className={`${utilStyle.headingTitle} ${utilStyle.bold}`}>Our team</h1>
                <p className={utilStyle.headingSubTitle}>We come from the software and e-commerce industries, and are on a mission to help fast-growing brands grow profitably by leveraging data and providing actionable insights. </p>
                <p className={utilStyle.headingSubTitle}>Interested in knowing more about Dive ? Want to be part of the current beta? Request early access or email us at <a className={utilStyle.textUnderline} href="mailto:hello@diveanalytics.co">hello@diveanalytics.co</a></p>
                <ul className={styles.containerTeamPictures}>
                    <li className={styles.itemTeamPicture}>
                        <Image src="/pic_thomas.png" alt="logo-dive" width="200" height="200"/>
                        <p>Thomas</p>
                        <p className={utilStyle.textBlue}>Tech, Growth</p>
                        <ul className={styles.iconsContact}>
                            <li>
                                <a href="mailto:thomas@diveanalytics.co">
                                    <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textBlack}`} icon={ faEnvelope }/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/thomas-rodier/" target="_blank">
                                    <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textBlack}`} icon={ faLinkedin }/>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.itemTeamPicture}>
                        <Image src="/avatar-placeholder.png" alt="logo-dive" width="200" height="200"/>
                        <p>Rémi</p>
                        <p className={utilStyle.textBlue}>Tech</p>
                        <ul className={styles.iconsContact}>
                            <li>
                                <a href="mailto:remi@diveanalytics.co">
                                    <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textBlack}`} icon={ faEnvelope }/>
                                </a>
                            </li>
                            {/* <li>
                                <a href="https://www.linkedin.com/in/remi-beaufils/" target="_blank">
                                    <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textBlack}`} icon={ faLinkedin }/>
                                </a>
                            </li> */}
                        </ul>
                    </li>
                    <li className={styles.itemTeamPicture}>
                        <Image src="/pic_alexis.png" alt="logo-dive" width="200" height="200"/>
                        <p>Alexis</p>
                        <p className={utilStyle.textBlue}>Product, Sales</p>
                        <ul className={styles.iconsContact}>
                            <li>
                                <a href="mailto:alexis@diveanalytics.co">
                                    <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textBlack}`} icon={ faEnvelope }/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/alexisguinebretiere/" target="_blank">
                                    <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textBlack}`} icon={ faLinkedin }/>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>


        </Layout>
    )
  }