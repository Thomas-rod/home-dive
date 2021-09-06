import fontStyle from '../../styles/utils/fonts.module.css'
import buttonStyle from '../../styles/components/button.module.css'

import { PopupButton } from '@typeform/embed-react'

import Link from 'next/link'

export default function Button_Form({text, link, target, type, withForm, hiddenFields}) {

    const renderButtonForm = () => {
        if(withForm === true) {
            return <PopupButton
                        id="deVeePvV"
                        size={80}
                        hidden={
                                hiddenFields
                            }
                        className={`${buttonStyle.button} ${buttonStyle.button_bg} ${buttonStyle.button_form} ${fontStyle.input_size} ${fontStyle.p_ls__positive}`}
                        medium="main-banner"
                    >
                        {text}
                    </PopupButton>
        }
        else {
            return <Link href={link || "#"}>
                <button type={type} target={target} className={`${buttonStyle.button} ${buttonStyle.button_bg} ${buttonStyle.button_form} ${fontStyle.input_size} ${fontStyle.p_ls__positive}`}>
                    {text}
                </button>
            </Link>
        }
    }

    return (
        renderButtonForm()
    )
}

