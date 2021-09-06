import mainBannerStyle from '../styles/mainBanner.module.css'

import Navbar from "./navbar"
import Image from 'next/image'
import Header_H1 from './font/header_h1'
import Header_Subtitle from './font/header_subtitle'
import Form_Home_Banner from './form/form_home_banner'

export default function MainBanner() {

    return (
        <div className={`${mainBannerStyle.container}`}>
            <Navbar/>
            <div className={`${mainBannerStyle.container_bg}`}></div>
            <div className={`${mainBannerStyle.container_gif}`}>
                <Image 
                    src="https://res.cloudinary.com/dad2k5sll/image/upload/v1629816229/screen_boxp74.gif"
                    layout={"fill"}
                />
            </div>
            <div className={`${mainBannerStyle.container_content}`}>
                <Header_H1 text="Ecommerce <br>analytics, <br><span class='span' style='color:#26CEA9'>reinvented</span>."/>
                <Header_Subtitle text="Easy as a spreadsheet, powerful as a BI tool.<br> Dive is the all-in-one analytics playground <br>to help your brand reach new heights."/>
                <Form_Home_Banner/>
            </div>
        </div>
    )

}