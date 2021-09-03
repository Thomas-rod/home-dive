import faqStyle from '../styles/components/faq.module.css'
import fontStyle from '../styles/utils/fonts.module.css'
import iconStyle from '../styles/components/icon.module.css'

import { useState } from 'react'

export default function FaqItem({question, answer, status}) {
    
    const [state, setValue] = useState(status)

    function clicked() {
        setValue((state === "active") ? "inactive" : "active")
    }
    
    return(
        <div className={`${faqStyle.container_item}`}>
            <div className={`${faqStyle.container_question}`} >
                <p className={`${fontStyle.subtitle} ${fontStyle.__bold} ${fontStyle.__white}`} dangerouslySetInnerHTML={{ __html: question || "Placeholder question"}} />
                <svg onClick={clicked} className={`${iconStyle.icon_dropdown} ${(state === "active") ? iconStyle.icon_dropdown_active : iconStyle.icon_dropdown_inactive}`} width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14 15L25 1L3 1L14 15Z" stroke="white" strokeWidth="2"/>
                </svg>

            </div>
            <div className={`${(state === "active") ? faqStyle.active_answer : faqStyle.inactive_answer}`}>
                <p className={`${fontStyle.paragraph} ${fontStyle.__white} ${fontStyle.p_fw_200}`} dangerouslySetInnerHTML={{ __html: answer || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eet dolore magna aliqua."}}/>
            </div>
        </div>
    )
}