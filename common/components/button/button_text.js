import fonts from '../../styles/utils/fonts.module.css'
import buttons from '../../styles/components/button.module.css'

import Link from 'next/link'

export default function Button_Text({text, link, target}) {
    return (
        <Link href={link || "localhost:3000"}>
            <a target={target} className={`${buttons.button} ${buttons.button_text} ${fonts.paragraph}`}>
                {text}
            </a>
        </Link>
    )
}

