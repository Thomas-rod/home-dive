import Image from 'next/image'
import Link from 'next/link'
import FormNewsletter from '../components/newsletter'
import styles from '../components/footer.module.css'
import utilStyle from '../styles/utils.module.css'
import iconStyle from '../styles/icons.module.css'

import { library } from '@fortawesome/fontawesome-svg-core';

import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className={`${styles.container}`}>
            <div className={`${utilStyle.paddingSide} ${styles.topFooter}`}>
                <Image src="/logo-dive-white.svg" width='100' height='100'/>
                <ul className={styles.socialsContainer}>
                    <li>
                        <a href="mailto:hello@diveanalytics.co" target="_blank">
                            <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textWhite}`} icon={ faEnvelope }/>
                        </a> 
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/72219683" target="_blank">
                            <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textWhite}`} icon={ faLinkedin }/>
                        </a> 
                    </li>
                    <li>
                        <a href="https://www.facebook.com/diveanalyticsofficial" target="_blank">
                            <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textWhite}`} icon={ faFacebook }/>
                        </a> 
                    </li>
                    <li>
                        <a href="https://twitter.com/DiveAnalytics" target="_blank">
                            <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textWhite}`} icon={ faTwitter }/>
                        </a> 
                    </li>
                    <li>
                        <a href="https://www.instagram.com/diveanalytics.co/" target="_blank">
                            <FontAwesomeIcon className={`${iconStyle.iconMini} ${utilStyle.textWhite}`} icon={ faInstagram }/>
                        </a> 
                    </li>
                </ul>
            </div>            
            <div className={`${styles.middleContainer} ${utilStyle.paddingSide}`}>
                <div className={styles.contentContainer}>
                    <ul>
                        <li className={`${utilStyle.size24Text} ${utilStyle.textWhite} ${utilStyle.bold}`}>Company</li>
                        <li className={utilStyle.textWhite}>
                            <Link href="/team">Team</Link>
                        </li>
                        <li className={utilStyle.textWhite}>
                            <Link href="/manifesto">Manifesto</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={`${utilStyle.size24Text} ${utilStyle.textWhite} ${utilStyle.bold}`}>Ressources</li>
                        <li className={utilStyle.textWhite}>
                            <Link href="/terms-of-use">Terms of use</Link>
                        </li>
                        <li className={utilStyle.textWhite}>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={`${utilStyle.size24Text} ${utilStyle.textWhite} ${utilStyle.bold}`}>Support</li>
                        {/* <li className={utilStyle.textWhite}>
                            <Link href="/">Live chat</Link>
                        </li> */}
                        <li className={utilStyle.textWhite}>
                            <a href="mailto:hello@diveanalytics.co">Contact us</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.newsletterContainer}>
                    <span className={utilStyle.flexBetweenCenter}>
                        <FontAwesomeIcon className={`${iconStyle.iconLarge} ${utilStyle.textWhite}`} icon={ faEnvelope }/>
                        <h2 className={`${utilStyle.textWhite}`}>Stay in the loop</h2>
                    </span>
                    <FormNewsletter/>
                </div>
            </div>
            <div className={`${styles.editContainer} ${utilStyle.paddingSide}`}>
                <p className={utilStyle.textWhite}>Made with ❤️ and ☕ in Paris, Marseille, Lisbonne.</p>
                <p className={utilStyle.textWhite}>©2020 All rights reserved Dive</p>
            </div>
        </footer>
    )
}
