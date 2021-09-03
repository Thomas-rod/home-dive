import fonts from '../../styles/utils/fonts.module.css'
import buttons from '../../styles/components/button.module.css'

import Link from 'next/link'

export default function Button_Navbar({text, link, target}) {
    return (
        <Link href={link || "localhost:3000"} >
            <a  target={target} className={`${buttons.button} ${buttons.button_bg} ${buttons.button_navbar} ${fonts.paragraph} ${fonts.p_ls__positive}`}>
                {text}
            </a>
        </Link>
    )
}

