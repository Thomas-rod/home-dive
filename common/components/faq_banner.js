import faqBannnerStyle from '../styles/faqBanner.module.css'
import spacingStyle from '../styles/utils/spacing.module.css'

import questionsFaq from '../data/questions_faq'

import Header_H2 from "./font/header_h2"
import FaqItem from '../components/faq'

export default function Faq_Banner() {
    
    return (
        <div className={`${faqBannnerStyle.container} ${spacingStyle.container}`}>
            <Header_H2 text="Frequently asked<br><span style='color:#26CEA9'>questions.</span>"/>
            <div className={`${faqBannnerStyle.container_faq}`}>
                {
                    questionsFaq.dataQuestionsFaq.map((obj) => (
                        <FaqItem
                            key={obj.id}
                            question={obj.question}
                            answer={obj.answer}
                            status={obj.status}
                        />
                    ))
                }
            </div>
        </div>
    )
}