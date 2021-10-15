import footerStyle from '../styles/footerStyle.module.css'
import fontStyle from '../styles/utils/fonts.module.css'
import iconStyle from '../styles/components/icon.module.css'

import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Image from 'next/image'
import Link from 'next/link'
import Header_H3 from '../components/font/header_h3'

export default function Footer() {
    return (
        <footer className={`${footerStyle.container}`}>
            <Link passHref={true} href='#'>
                <a target="_blank">
                    <Image 
                        src="https://res.cloudinary.com/dad2k5sll/image/upload/v1634287247/logo_dive_white_small_d4nqyy.svg"
                        width={90}
                        height={35}
                    />
                </a>
            </Link>
            <div className={`${footerStyle.container_content}`}>
                <div className={`${footerStyle.container_navigation}`}>
                    <div>
                        {/* <Link href='/#'>
                            <a>
                                <p className={`${fontStyle.input_size} ${fontStyle.robotoMono} ${fontStyle.__uppercase} ${fontStyle.p_fw__200} ${fontStyle.p_ls__positive}`}>Login</p>
                            </a>
                        </Link> */}
                        <Link href='/#'>
                            <a>
                                <p className={`${fontStyle.input_size} ${fontStyle.robotoMono} ${fontStyle.__uppercase} ${fontStyle.p_fw__200} ${fontStyle.p_ls__positive}`}>Get Access</p>
                            </a>
                        </Link>
                        <Link passHref={true} href='https://blog.diveanalytics.co/'>
                            <a target="_blank">
                                <p className={`${fontStyle.input_size} ${fontStyle.robotoMono} ${fontStyle.__uppercase} ${fontStyle.p_fw__200} ${fontStyle.p_ls__positive}`}>Blog</p>
                            </a>
                        </Link>
                        
                        
                    </div>
                    <div>
                        <Link href='/privacy-policy'>
                            <a>
                                <p className={`${fontStyle.input_size} ${fontStyle.robotoMono} ${fontStyle.__uppercase} ${fontStyle.p_fw__200} ${fontStyle.p_ls__positive}`}>Privacy policy</p>
                            </a>
                        </Link>
                        <Link href='/terms-of-use'>
                            <a>
                                <p className={`${fontStyle.input_size} ${fontStyle.robotoMono} ${fontStyle.__uppercase} ${fontStyle.p_fw__200} ${fontStyle.p_ls__positive}`}>Term of use</p>
                            </a>
                        </Link>
                        
                        
                    </div>
                </div>
                <div className={`${footerStyle.container_content_bottom}`}>
                    <div className={`${footerStyle.container_supported_by}`}>
                        <p className={`${fontStyle.input_size} ${fontStyle.robotoMono} ${fontStyle.__uppercase} ${fontStyle.p_fw__200} ${fontStyle.p_ls__positive}`}>Supported by</p>
                        <div>
                            <Link passHref={true} href="https://stationf.co/?utm_source=dive&utm_medium=home_page">
                                <a target="_blank">
                                <Image 
                                    src="https://res.cloudinary.com/dad2k5sll/image/upload/v1629920738/station_f_fsakwo.png"
                                    width={82}
                                    height={17}
                                />
                                </a>
                            </Link>
                            
                            <Link passHref={true} href="https://www.thefamily.co/?utm_source=dive&utm_medium=home_page">
                            <a target="_blank">
                                <Image 
                                    src="https://res.cloudinary.com/dad2k5sll/image/upload/v1629920738/the_family_n8rnc2.png"
                                    width={90}
                                    height={60}
                                />
                            </a>
                            </Link>
                            
                            <Link passHref={true} href="https://www.lakestar.com/?utm_source=dive&utm_medium=home_page">
                            <a target="_blank">
                                <Image 
                                    src="https://res.cloudinary.com/dad2k5sll/image/upload/v1629920738/lakestar_dfguul.png"
                                    width={54}
                                    height={54}
                                />
                            </a>
                            </Link>
                            
                            <Link passHref={true} href="https://www.supercapital.vc/?utm_source=dive&utm_medium=home_page">
                            <a target="_blank">
                                <Image 
                                    src="https://res.cloudinary.com/dad2k5sll/image/upload/v1629920738/super_capital_yaakkn.png"
                                    width={120}
                                    height={24}
                                />
                            </a>
                            </Link>
                            
                        </div>
                    </div>
                    <div className={`${footerStyle.container_socials}`}>
                        <p className={`${fontStyle.input_size} ${fontStyle.robotoMono} ${fontStyle.__uppercase} ${fontStyle.p_fw__200} ${fontStyle.p_ls__positive}`}>Follow us</p>
                        <div className={`${footerStyle.container_socials_icons}`}>
                            <Link href='https://www.facebook.com/diveanalyticsofficial' passHref={true}>
                                <a target="_blank">
                                    <FontAwesomeIcon icon={faFacebookF} className={`${iconStyle.icon_socials_footer}`}/>
                                </a>
                            </Link>
                            <Link href='https://twitter.com/DiveAnalytics' passHref={true}>
                                <a target="_blank">
                                    <FontAwesomeIcon icon={faTwitter} className={`${iconStyle.icon_socials_footer}`}/>
                                </a>
                            </Link>
                            <Link href='https://www.linkedin.com/company/72219683/' passHref={true}>
                                <a target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} className={`${iconStyle.icon_socials_footer}`}/>
                                </a>
                            </Link>
                        </div>                
                    </div>
                </div>
            </div>
        </footer>
    )
}
