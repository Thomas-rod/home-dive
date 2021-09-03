import styleFourthBanner from '../styles/fourthBanner.module.css'
import spacingStyle from '../styles/utils/spacing.module.css'

import Header_H2 from './font/header_h2'
import Hand_Purple from './icon/hand_purple'
import Features_Slider from './slider/features_slider'

import Features from '../data/features'

export default function Fourth_banner() {

    return(
        <div className={`${styleFourthBanner.container} ${spacingStyle.container}`}>
            <Hand_Purple/>
            <Header_H2 text="<span style='color:#26CEA9'>Why</span> dive" align={"center"}/>
            <Features_Slider/>
        </div>
    )
}