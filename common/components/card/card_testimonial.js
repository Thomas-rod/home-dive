import imageStyle from '../../styles/components/image.module.css'
import fontsStyle from '../../styles/utils/fonts.module.css'
import cardStyle from '../../styles/components/card.module.css'
import Image_With_Rectangle from '../image/image_with_rectangle'
import sliderStyle from '../../styles/components/slider.module.css'


export default function CardTestimonial({testimonial, signature, image, alt, elems}) {
    return (
        <div className={`${cardStyle.container} ${cardStyle.container_tesimonial_card} ${sliderStyle.slide} ${sliderStyle[elems]}`}>
            <div>
                <p className={`${fontsStyle.subtitle} ${fontsStyle.montSerrat} ${fontsStyle.__dark}`}>{testimonial}</p>
                <p className={`${fontsStyle.subtitle} ${fontsStyle.montSerrat} ${fontsStyle.__dark}`}>{signature}</p>
                
            </div>
            <div className={`${cardStyle.container_image_with_rectangle}`}>
                <Image_With_Rectangle 
                    src={image}
                    alt={alt}
                    width={304}
                    height={364}
                    type={"image"}
                />
            </div>
        </div>
    )
}
