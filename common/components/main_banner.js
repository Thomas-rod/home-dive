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
                    // src="https://res.cloudinary.com/dad2k5sll/image/upload/v1648653343/test_main_banner_uffpcj.png"
                    layout={"fill"}
                />
            </div>
            <div className={`${mainBannerStyle.container_content}`}>
                <Header_H1 text="Business Intelligence for <span class='span' style='color:#26CEA9'>Commerce data.</span>"/>
                {/* <Header_H1 text="<span class='span' style='color:#26CEA9'>the omnichannel<br>Commerce</span>."/> */}
                 
                <Header_Subtitle text="
                                        Dive is the collaborative workspace to<br>
                                        centralize, explore, and share Commerce data.<br>
                                    "/>
                <Form_Home_Banner/>
            </div>
        </div>
    )

}