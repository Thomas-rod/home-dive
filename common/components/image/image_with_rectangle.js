import Image from 'next/dist/client/image'
import imageStyle from '../../styles/components/image.module.css'
import ReactPlayer from 'react-player';


export default function Image_With_Rectangle({src, alt, width, height, type}) {
    

    const renderVideoOrImage = () => {
        if(type === "video") {
            
                  return <video
                      loop={false}
                      controls={true}
                      muted={true}
                      autoPlay={false}
                      volume={null}
                      playsInline={true}
                      preload="auto"
                    >    
                      <source src={src} type="video/mp4" />
                      
                    </video>
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



