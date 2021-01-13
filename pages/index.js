import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout, { siteTitle } from '../components/layout'
import Form from '../components/form'
import ButtonForm from '../components/layout'
import ButtonArrow from '../components/layout'

import { library } from '@fortawesome/fontawesome-svg-core';

import { faCheckCircle, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from '../styles/Home.module.css'
import utilStyle from '../styles/utils.module.css'
import formStyle from '../styles/forms.module.css'
import buttonStyle from '../styles/buttons.module.css'
import iconStyle from '../styles/icons.module.css'
import cardStyle from '../styles/cards.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section >
        <div className={styles.homeBanner}>
          <div className={styles.homeBannerLeft}>
            <h1 className={`${utilStyle.headingTitle} ${utilStyle.bold}`}>Simple & powerful analytics to grow your brand</h1>
            <h2 className={utilStyle.headingSubTitle}>Dive is the analytics platform for Shopify. Track & analyze your marketing data and get actionable insights.</h2>
            <Form/>
            <div className={styles.afterForm}>
              <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textCoral}`} icon={ faCheckCircle }/>
              <p className={utilStyle.textMediumColor}>No code. No engineer time</p>
            </div>
          </div>
          <div className={styles.homeBannerRight}>
            <div className={`${cardStyle.cardMedium} ${cardStyle.card}`}>
              <Image src="/first_graph.svg" alt="logo-dive" layout="fill" />
            </div>
            <div className={`${cardStyle.cardBig} ${cardStyle.card}`}>
              <Image src="/second_graph.svg" alt="logo-dive" layout="fill" />
            </div>
            <div className={`${cardStyle.cardSmall} ${cardStyle.card}`}>
              <Image src="/third_graph.svg" alt="logo-dive" layout="fill" />
            </div>
          </div>
        </div>
        <div className={styles.homeClients}>
          <h2 className={`${utilStyle.textAlign} ${utilStyle.size24Text}`}>Trusted by fast-growing D2C brands</h2>
          <ul className={styles.homeClientsList}>
            <li><Image src="/logo-color-lovebox.svg" alt="logo-dive" width="200" height="200" /></li>
            <li><Image src="/shanty-logo.svg" alt="logo-dive" width="200" height="200" /></li>
            <li><Image src="/logo-rpur.svg" alt="logo-dive" width="200" height="200" /></li>
          </ul>
        </div>
        <div className={styles.blockFeatures}>
          <div className={styles.blockFeatureLeft}>
            <h2 className={`${utilStyle.headingTitle} ${utilStyle.bold}`}>All your marketing data in one place</h2>
            <p className={`${utilStyle.sizeSubtitleText} ${utilStyle.textLightColor} ${utilStyle.bold}`}>The single source of truth for your data</p>
            <ul className={styles.blockFeaturesList}>
              <li className={styles.blockFeaturesItems}>
                <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textCoral}`} icon={ faCheckCircle }/>
                <p>Collects & organizes your marketing data <span className={utilStyle.bold}>automatically</span></p>
              </li>
              <li className={styles.blockFeaturesItems}>
                <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textCoral}`} icon={ faCheckCircle }/>
                <p><span className={utilStyle.bold}>Native integration</span> with all marketing and advertising platforms</p>
              </li>
              <li className={styles.blockFeaturesItems}>
                <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textCoral}`} icon={ faCheckCircle }/>
                <p><span className={utilStyle.bold}>Automated</span>  reports and dynamic dashboards</p>
              </li>
            </ul>
            <span className={buttonStyle.buttonArrow}>
              <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textBlack}`} icon={ faArrowRight}/>
              <a href="#" className={`${buttonStyle.buttonSimple} ${utilStyle.bold}`}>
                Request early access
              </a>
            </span>
          </div>
          <div className={styles.blockFeatureRight}>
            <Image src="/first_block.svg" alt="logo-dive" height="600" width="600" quality="100" />
          </div>
        </div>
        <div className={styles.blockFeatures}>
          <div className={styles.blockFeatureLeft}>
            <h2 className={`${utilStyle.headingTitle} ${utilStyle.bold}`}>Monitor your performance marketing in real time</h2>
            <p className={`${utilStyle.sizeSubtitleText} ${utilStyle.textLightColor} ${utilStyle.bold}`}>Dive turns your question into answers</p>
            <ul className={styles.blockFeaturesList}>
              <li className={styles.blockFeaturesItems}>
                <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textCoral}`} icon={ faCheckCircle }/>
                <p><span className={utilStyle.bold}>Track your ROAS - CPA - Revenue</span> and other important metrics of all your acquisition campaigns</p>
              </li>
              <li className={styles.blockFeaturesItems}>
                <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textCoral}`} icon={ faCheckCircle }/>
                <p><span className={utilStyle.bold}>Monitor your profitability</span> in real time, adjust budgets and take decisions based on data</p>
              </li>
              <li className={styles.blockFeaturesItems}>
                <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textCoral}`} icon={ faCheckCircle }/>
                <p>Identify your <span className={utilStyle.bold}>top performing</span> and underperforming channels</p>
              </li>
            </ul>
            <span className={buttonStyle.buttonArrow}>
              <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textBlack}`} icon={ faArrowRight}/>
              <a href="#" className={`${buttonStyle.buttonSimple} ${utilStyle.bold}`}>
                Request early access
              </a>
            </span>
          </div>
          <div className={styles.blockFeatureRight}>
            <Image src="/second_block.svg" alt="logo-dive" height="600" width="600" quality="100" />
          </div>
        </div>
        <div className={styles.blockFeatures}>
          <div className={styles.blockFeatureLeft}>
            <h2 className={`${utilStyle.headingTitle} ${utilStyle.bold}`}>Get in the driver seat of your growth</h2>
            <p className={`${utilStyle.sizeSubtitleText} ${utilStyle.textLightColor} ${utilStyle.bold}`}>Say goodbye to manual sheets to run your store(s)</p>
            <ul className={styles.blockFeaturesList}>
              <li className={styles.blockFeaturesItems}>
                <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textCoral}`} icon={ faCheckCircle }/>
                <p><span className={utilStyle.bold}>Track</span> your daily/weekly/monthly revenue goals</p>
              </li>
              <li className={styles.blockFeaturesItems}>
                <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textCoral}`} icon={ faCheckCircle }/>
                <p>All your <span className={utilStyle.bold}>Shopify stores centralized</span> in a single interface</p>
              </li>
              <li className={styles.blockFeaturesItems}>
                <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textCoral}`} icon={ faCheckCircle }/>
                <p>No more guesswork, take <span className={utilStyle.bold}>ROI-based decisions</span> and grow your brand</p>
              </li>
            </ul>
            <span className={buttonStyle.buttonArrow}>
              <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textBlack}`} icon={ faArrowRight}/>
              <a href="#" className={`${buttonStyle.buttonSimple} ${utilStyle.bold}`}>
                Request early access
              </a>
            </span>
          </div>
          <div className={styles.blockFeatureRight}>
            <Image  src="/third_block.svg" alt="logo-dive" height="600" width="600" quality="100" />
          </div>
        </div>
        <div className={styles.homeSupportedBy}>
          <p className={`${utilStyle.textAlign} ${utilStyle.size24Text}`}> Supported by</p>
          <Image src="/thefamilylogo.png" alt="logo-the-family" width="150" height="150" quality="100" />
        </div>
        <div className={styles.homeEarlyAccess}>
          <h2 className={`${utilStyle.headingTitle} ${utilStyle.textAlign} ${utilStyle.bold}`}>Want to be an early tester?</h2>
          <Form/>
          <div className={styles.afterForm}>
            <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textCoral}`} icon={ faCheckCircle }/>
            <p className={utilStyle.textMediumColor}>No code. No engineer time</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
