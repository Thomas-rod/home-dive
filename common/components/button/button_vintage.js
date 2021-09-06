import fontStyle from '../../styles/utils/fonts.module.css'
import buttonStyle from '../../styles/components/button.module.css'

import { PopupButton } from '@typeform/embed-react'

import Link from 'next/link'
import { render } from 'react-dom'

export default function Button_Vintage({text, link, target, withForm}) {
    const renderButtonVintage = () => {
        if(withForm === true) {
            return <PopupButton
                        id="deVeePvV"
                        size={80}
                        className={`${buttonStyle.button_vintage} ${buttonStyle.button} ${buttonStyle.button_bg} ${fontStyle.paragraph} ${fontStyle.p_ls__positive}`}
                        medium="button-vintage"
                    >
                        {text}
                    </PopupButton>
        }
        else {
            return <Link href={link || "#"} className="button-form">
                        <a target={target} className={`${buttonStyle.button_vintage} ${buttonStyle.button} ${buttonStyle.button_bg} ${fontStyle.paragraph} ${fontStyle.p_ls__positive}`}>
                            {text || "request access"}
                        </a>
                    </Link>
        }
    }

    return (
        <div className={buttonStyle.button_vintage_container}>
            {renderButtonVintage()}
        </div>
    )

}

