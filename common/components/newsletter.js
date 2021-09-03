import Router from 'next/router';

import buttonStyle from '../styles/buttons.module.css'
import formStyle from '../styles/forms.module.css'
import utilStyle from '../styles/utils.module.css'

import { useState } from 'react'

export default function FormNewsletter({ children, type }) {
    const [input, setInput] = useState('');
  
    const subscribeNewsletter = async (e) => {
        e.preventDefault()
        if(input === "") {
            alert('Please enter a valid email address')
        } else {
            try {
                const res = await fetch('https://hooks.zapier.com/hooks/catch/7940043/o0l2t2e/', {
                  method: 'post',
                  headers: {
                    "Accept": "application/json",
                  },
                  body: JSON.stringify([{
                    email: `${input}`
                  }])
                })
                console.log(res)
                if (res.status === 200) {
                    Router.push('/success')
                  } else {
                    alert('Sorry, something went wrong.')
                  }
              } catch(err) { 
                alert('Sorry, something went wrong.')
              }
        };
      };
  
    return (
        <form>
            <input type="email" name="email" placeholder="Work email ...." onChange={e => setInput(e.target.value)} label="false" className={`${formStyle.newsletterInput} ${utilStyle.sizeBodyText}`}></input>
            <button type="submit" onClick={subscribeNewsletter} className={`${buttonStyle.button} ${buttonStyle.buttonFormHome} ${buttonStyle.buttonFormNewsletter} ${buttonStyle.buttonForm} ${buttonStyle.buttonWhite}`}>Subscribe to our newsletter</button>
        </form>
  )
  }