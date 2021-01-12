import Router from 'next/router';

import buttonStyle from '../styles/buttons.module.css'
import formStyle from '../styles/forms.module.css'
import utilStyle from '../styles/utils.module.css'

import { useState } from 'react'

export default function Form({ children, type }) {
    const [input, setInput] = useState('');

    const subscribe = async (e) => {
        e.preventDefault()
        if(input === "") {
            alert('Please enter a valid email address')
        } else {
            try {
                const res = await fetch('https://hooks.zapier.com/hooks/catch/7940043/o01xo3y/', {
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
            <input type="email" name="email" placeholder="Your email..." onChange={e => setInput(e.target.value)} label="false" className={`${formStyle.boxShadowInput} ${formStyle.customInput} ${utilStyle.sizeBodyText}`}></input>
            <button type="submit" onClick={subscribe} className={`${buttonStyle.button} ${buttonStyle.buttonFormHome} ${buttonStyle.buttonForm} ${buttonStyle.buttonBlack}`}>Request early access</button>
        </form>
  )
}