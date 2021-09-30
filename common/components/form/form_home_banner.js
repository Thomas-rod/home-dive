import fonts from '../../styles/utils/fonts.module.css'
import form from '../../styles/components/form.module.css'

import Button_Form from '../button/button_form'

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'


function Form_Home_Banner() {

    const [hiddenFields, setHiddenFields] = useState({email: ""})
    
    const handleOnSubmit = async(e) => {
        e.preventDefault()
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
            if(!field.name) return
            formData[field.name] = field.value
        })

        
        if(email.value.includes("@")) {
            console.log(email)
            try {
                 const response = await fetch('/api/early-access', {
                    method: 'post', 
                    body: JSON.stringify(formData)
                })
                console.log(response)
                
            }
            catch(error) {
                console.log(error)
            }
            finally {
                
            }
        }
    }
    const onChangeFormHomeBanner = (e) => {
        if(e) {
            setHiddenFields({email: e.target.value})
        }
    }

    return (
        <form method='post' onSubmit={handleOnSubmit} >
            <div className={form.container}>
                <input onChange={onChangeFormHomeBanner} id="email" name="email" type="text" autoComplete="email" placeholder="your email" className={`${fonts.input_size} ${form.input_home_banner} ${fonts.robotoMono} ${fonts.p_ls__positive}`}/>
                <Button_Form type="submit" text={"request early access"}  withForm={true} hiddenFields={hiddenFields}/>
            </div>
            <div className={`${form.snippet_home_banner}`}>
                <p className={`${fonts.__white} ${fonts.__white}`}>
                    <FontAwesomeIcon icon={faCheckCircle}/>
                    NO CODE. NO ENGINEERING TIME.
                </p>
            </div>
        </form>
    )
}

export default Form_Home_Banner