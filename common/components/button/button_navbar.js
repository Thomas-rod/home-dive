import fontStyle from '../../styles/utils/fonts.module.css'
import buttonStyle from '../../styles/components/button.module.css'

import Link from 'next/link'
import { PopupButton } from '@typeform/embed-react'

export default function Button_Navbar({text, link, target, withForm}) {

    const renderButtonNavbar = () => {
        if(withForm === true) {
            return <PopupButton
                        id="deVeePvV"
                        size={80}
                        className={`${buttonStyle.button} ${buttonStyle.button_bg} ${buttonStyle.button_navbar} ${fontStyle.paragraph} ${fontStyle.p_ls__positive}`}
                        medium="button-vintage"
                    >
                        {text}
                    </PopupButton>
        }
        else {
            return <Link href={link || "#"} >
                        <a  target={target} className={`${buttonStyle.button} ${buttonStyle.button_bg} ${buttonStyle.button_navbar} ${fontStyle.paragraph} ${fontStyle.p_ls__positive}`}>
                            {text}
                        </a>
                    </Link>
        }
    }

    return (
            renderButtonNavbar()
    )
}

