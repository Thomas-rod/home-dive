import fontStyle from '../../styles/utils/fonts.module.css'
import buttonStyle from '../../styles/components/button.module.css'
import { PopupButton } from '@typeform/embed-react'

import { useState } from 'react'

export default function Button_Form({text, link, target, type, withForm, hiddenFields, page}) {
    const [stateButton, setStateButton] = useState("default")

    const renderButtonForm = () => {
        if(withForm === true && page === "home") {
            return  <PopupButton
                        type={type}
                        //id="NYNisXfP"
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
            
        } else if (withForm === true && page === "pricing") {
            return  <PopupButton
                        type={type}
                        //id="NYNisXfP"
                        id="deVeePvV"
                        size={80}
                        hidden={
                            hiddenFields
                        }
                        className={`${buttonStyle.button_pricing}  ${fontStyle.__white}`}
                        medium="main-banner"
                        
                        >
                            {text}
                        </PopupButton>
        }
        else {
            return  <button type={type} target={target} className={`${buttonStyle.button} ${buttonStyle.button_bg} ${buttonStyle.button_form} ${fontStyle.input_size} ${fontStyle.p_ls__positive}`}>
                        {text}
                    </button>
        }
    }

    return (
        renderButtonForm()
    )
}

