import Image from 'next/dist/client/image'
import imageStyle from '../../styles/components/image.module.css'

export default function Image_With_Rectangle({src, alt, width, height, type}) {
    const renderVideoOrImage = () => {
        if(type === "video") {
            return <video controls playsinline autoPlay muted loop src="https://res.cloudinary.com/dad2k5sll/video/upload/v1630399800/demo_product_homepage_i5sckd.webm"></video>              
        }
        else if(type === "image"){
            return <Image
                        src={src || "https://res.cloudinary.com/dad2k5sll/image/upload/v1629802762/testimonial_alexandre_rpur_ifs8xg.png"}
                        alt={alt || "image-dive-analytics"}
                        layout="fill"
                    />
        }
    }
    return (
        <div className={`${imageStyle.image_with_rectangle}`} style={{width: width, height: height}}>
                {renderVideoOrImage()}
            <div className={`${imageStyle.rectangle_behind_image}`} style={{width: width, height: height}}></div>
        </div>
    )
}