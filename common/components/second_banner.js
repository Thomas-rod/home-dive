import secondBannerStyle from '../styles/secondBanner.module.css'
import Header_H2 from './font/header_h2'
import Header_Subtitle from './font/header_subtitle'
import Text_Side from './font/text_side'
import spacingStyle from '../styles/utils/spacing.module.css'

import Button_Vintage from './button/button_vintage'
import HandGreenLeft from './icon/hand_green_left'
import HandGreenRight from './icon/hand_green_right'

import Image_With_Rectangle from './image/image_with_rectangle'

export default function MainBanner() {

    return (
        <div className={`${secondBannerStyle.container} ${spacingStyle.container}`}>
            <Text_Side text="Dive" side="left"/>
            <Text_Side text="Dive" side="right"/>
            <div>
                <Header_H2 text="The best of spreadsheets <br>and dashboards.<br><span style='color:#26CEA9'>Without the hurdles.</span>"/>
                <Header_Subtitle text="
                    Connect and store all your data effortlessly. <br>
                    Build custom metrics and dashboard 10x faster with spreadhseets. <br>
                    Run data analysis in a snap. <br>
                    Share gorgeous visuals. <br>
                    Be the superhero of your team.
                "/>
                <div className={`${secondBannerStyle.container_image}`}>
                    <Image_With_Rectangle 
                        src="https://res.cloudinary.com/dad2k5sll/video/upload/v1630399800/demo_product_homepage_i5sckd.webm"
                        layout={"fill"}
                        type={"video"}
                    />
                </div>
                <div className={`${secondBannerStyle.container_button}`}>
                    <HandGreenLeft displayMobile={true}/>
                    <Button_Vintage text="request your demo" withForm={true}/>
                    <HandGreenRight displayMobile={true}/>
                </div>
            </div>
        </div>
    )

}