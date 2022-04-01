import thirdBannerStyle from '../styles/thirdBanner.module.css'
import logoStyle from '../styles/utils/logos.module.css'
import spacingStyle from '../styles/utils/spacing.module.css'

import Header_H2 from './font/header_h2'
import Image from 'next/image'
import Link from 'next/link'

export default function Third_Banner() {
    return (
        <div className={`${thirdBannerStyle.container} ${spacingStyle.container}`}>
            <Header_H2 text="Powering fast-growing <br> D2C brands"/>
            <div className={`${thirdBannerStyle.container_logo_clients}`}>
                <div className={`${logoStyle.logo_asphalte} ${logoStyle.logo_clients}`}>
                    <Link href="https://www.asphalte.com/?utm_source=dive&utm_medium=home_page" passHref={true}>
                        <a target="_blank">
                            <Image src="https://res.cloudinary.com/dad2k5sll/image/upload/v1633683174/Asphalte_Logo_RGB_OffWhite_1x_p2avwl.svg" layout="fixed" width={200} height={40} quality={100}/>
                        </a>
                    </Link>
                </div>
                <div className={`${logoStyle.logo_lovebox} ${logoStyle.logo_clients}`}>
                    <Link href="https://fr.lovebox.love/?utm_source=dive&utm_medium=home_page">
                        <a target="_blank">
                            <Image src="https://res.cloudinary.com/dad2k5sll/image/upload/v1629879362/LoveBox_ehi4y4.png" layout="fixed" width={100} height={100} quality={100}/>
                        </a>
                    </Link>
                </div>
                <div className={`${logoStyle.logo_merci_handy} ${logoStyle.logo_clients}`}>
                    <Link href="https://www.mercihandy.com/?utm_source=dive&utm_medium=home_page" passHref={true}>
                        <a target="_blank">
                            <Image src="https://res.cloudinary.com/dad2k5sll/image/upload/v1629879362/MerciHandy_bgftr4.png" layout="fixed" width={215} height={85} quality={100}/>
                        </a>
                        
                    </Link>
                </div>
                <div className={`${logoStyle.logo_cabaia} ${logoStyle.logo_clients}`}>
                    <Link href="https://www.cabaia.com/?utm_source=dive&utm_medium=home_page" passHref={true}>
                        <a target="_blank">
                            <Image src="https://res.cloudinary.com/dad2k5sll/image/upload/v1629879362/Cabaia_d1rhwg.png" layout="fixed" width={120} height={110} quality={100}/>
                        </a>
                    </Link>
                </div>
                <div className={`${logoStyle.logo_rpur} ${logoStyle.logo_clients}`}>
                    <Link href="https://www.r-pur.com/?utm_source=dive&utm_medium=home_page" passHref={true}>
                        <a target="_blank">
                            <Image src="https://res.cloudinary.com/dad2k5sll/image/upload/v1629879362/R-Pur_ntsujf.png" layout="fixed" width={160} height={65} quality={100}/>
                        </a>
                    </Link>
                </div>
                <div className={`${logoStyle.logo_rpur} ${logoStyle.logo_clients}`}>
                    <Link href="https://seasonly.fr/?utm_source=dive&utm_medium=home_page" passHref={true}>
                        <a target="_blank">
                            <Image src="https://res.cloudinary.com/dad2k5sll/image/upload/v1648651804/seasonly_white_vdtrwe.png" layout="fixed" width={160} height={65} quality={100}/>
                        </a>
                    </Link>
                </div>
                <div className={`${logoStyle.logo_rpur} ${logoStyle.logo_clients}`}>
                    <Link href="https://syncprotein.com/?utm_source=dive&utm_medium=home_page" passHref={true}>
                        <a target="_blank">
                            <Image src="https://res.cloudinary.com/dad2k5sll/image/upload/v1648652464/sync_white_qqlwpv.png" layout="fixed" width={160} height={65} quality={100}/>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}