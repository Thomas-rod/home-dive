import fontStyle from '../../styles/utils/fonts.module.css'
import buttonStyle from '../../styles/components/button.module.css'
import { headers } from '../../../next.config'
import { PopupButton } from '@typeform/embed-react'

import { useState } from 'react'

import Link from 'next/link'

export default function Button_Form({text, link, target, type, withForm, hiddenFields}) {
    const [stateButton, setStateButton] = useState("default")

    const message = (stateButton === "default") ? text : "Thanks! Stay tuned 🔥"
    
    const handleOnClick = async(event) => {
        event.preventDefault()
        const email = document.getElementById("email")

        if(email.value.includes("@") && stateButton === "default") {
            try {
                await fetch('/api/early-access', {
                    method: 'post', 
                    body: JSON.stringify({email: email.value})
                })
                email.value = "Thanks! Stay tuned 🔥"
            }
            catch(e) {
                console.log(e)
                
            }
            finally {
                
            }
        }
        
    };

    const renderButtonForm = () => {
        if(withForm === true) {
            return  <div onClick={handleOnClick}>
                        <PopupButton
                        
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
                    </div>
            
        }
        else {
            return <Link href={link || "#"} >
                        <button onClick={handleOnClick} type={type} target={target} className={`${buttonStyle.button} ${buttonStyle.button_bg} ${buttonStyle.button_form} ${fontStyle.input_size} ${fontStyle.p_ls__positive}`}>
                            {text}
                        </button>
                    </Link>
        }
    }

    return (
        renderButtonForm()
    )
}

