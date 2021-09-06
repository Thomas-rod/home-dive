import React, { useState } from "react"
import Btn_Slider from '../button/button_slider_testimonials'

import sliderStyle from '../../styles/components/slider.module.css'

import fontsStyle from '../../styles/utils/fonts.module.css'
import cardStyle from '../../styles/components/card.module.css'
import Image_With_Rectangle from '../image/image_with_rectangle'

import Testimonials from '../../data/testimonials'

export default function Testimonials_Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        console.log("nextSlide -> ", slideIndex)
        if(slideIndex !== Testimonials.dataTestimonials.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === Testimonials.dataTestimonials.length) {
            setSlideIndex(1)
        }

    }

    const prevSlide = () => {
        console.log("prevSlide -> ", slideIndex)
        if(slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(Testimonials.dataTestimonials.length)
        }

    }
    
    return (
        <div className={`${sliderStyle.container_testimonials}`}>

            {
                Testimonials.dataTestimonials.map((obj, index) => (
                    <div 
                        key={obj.id}
                        className={`${cardStyle.container} ${cardStyle.container_tesimonial_card} ${sliderStyle.slide_testimonials} ${slideIndex === index + 1 ? sliderStyle.active_anim_testimonials : ""}`}
                    >
                        <div style={{textAlign: "center"}}>
                            <p className={`${fontsStyle.h3} ${fontsStyle.montSerrat} ${fontsStyle.__dark} ${fontsStyle.__bold} ${fontsStyle.__italic}`}>{obj.testimonial}</p>
                            <p className={`${fontsStyle.paragraph} ${fontsStyle.montSerrat} ${fontsStyle.__dark} ${fontsStyle.__bold}`}>{obj.name}</p>
                            <p className={`${fontsStyle.paragraph} ${fontsStyle.montSerrat} ${fontsStyle.__dark}`}>{obj.job}</p>
                            
                        </div>
                        <div className={`${cardStyle.container_image_with_rectangle}`}>
                            <Image_With_Rectangle 
                                src={obj.image}
                                alt={obj.alt}
                                layout={"fill"}
                                type={"image"}
                            />
                        </div>
                    </div>
                ))
            }
            <div className={`${sliderStyle.container_buttons_testimonials}`}>
                <Btn_Slider direction="previous" moveSlide={prevSlide}/>
                <Btn_Slider direction="next" moveSlide={nextSlide}/>
            </div>
        </div>
    )
}
