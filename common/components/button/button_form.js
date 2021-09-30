import fontStyle from '../../styles/utils/fonts.module.css'
import buttonStyle from '../../styles/components/button.module.css'
import { headers } from '../../../next.config'
import { PopupButton } from '@typeform/embed-react'

import Link from 'next/link'

export default function Button_Form({text, link, target, type, withForm, hiddenFields}) {
    const onClick = async(event) => {
        console.log("I'm in")
        event.preventDefault()
        const email = document.getElementById("email")

        if(email.value.includes("@")) {

            const res = await fetch('https://hooks.zapier.com/hooks/catch/7940043/b23dt9d/', {
            body: JSON.stringify({
              email: email.value
            }),
            method: 'POST'
          })
          try {
            const result = await res.json()
          }
          catch(e) {
              console.log(e)
          }
        }
    }

    const renderButtonForm = () => {
        if(withForm === true) {
            return <button onClick={onClick} className={buttonStyle.button__unstyle}>
                <PopupButton
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
            </button>
        }
        else {
            return <Link href={link || "#"}>
                <button type={type} onClick={onClick} target={target} className={`${buttonStyle.button} ${buttonStyle.button_bg} ${buttonStyle.button_form} ${fontStyle.input_size} ${fontStyle.p_ls__positive}`}>
                    {text}
                </button>
            </Link>
        }
    }

    return (
        renderButtonForm()
    )
}

