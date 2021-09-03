import React from "react"
import buttonStyle from '../../styles/components/button.module.css'
import iconStyle from '../../styles/components/icon.module.css'

export default function Button_Slider_Testimonials({direction, moveSlide}) {
        
    return (
            <svg onClick={moveSlide} className={`${iconStyle.icon_dropdown} ${(direction === "next") ? buttonStyle.button_testimonials_prev : buttonStyle.button_testimonials_next}`} width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14 15L25 1L3 1L14 15Z" stroke="white" strokeWidth="4"/>
            </svg>
    )

}