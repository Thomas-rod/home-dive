import Image from 'next/dist/client/image'
import imageStyle from '../../styles/components/image.module.css'
import React, { useRef, useState, useEffect } from "react";


const isSafari = () => {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
  };

export default function Image_With_Rectangle({src, alt, width, height, type}) {
    const videoParentRef = useRef();

    const [shouldUseImage, setShouldUseImage] = useState(false);
    useEffect(() => {
    // check if user agent is safari and we have the ref to the container <div />
    if (isSafari() && videoParentRef.current) {
        // obtain reference to the video element
        const player = videoParentRef.current.children[0];

        // if the reference to video player has been obtained
        if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = true;
        player.playsinline = true;
        player.muted = true;
        player.setAttribute("muted", ""); // leave no stones unturned :)
        player.autoplay = true;

        // Let's wait for an event loop tick and be async.
        setTimeout(() => {
            // player.play() might return a promise but it's not guaranteed crossbrowser.
            const promise = player.play();
            // let's play safe to ensure that if we do have a promise
            if (promise.then) {
            promise
                .then(() => {})
                .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                videoParentRef.current.style.display = "none";
                setShouldUseImage(true);
                });
            }
        }, 0);
        }
    }
    }, []);

    const renderVideoOrImage = () => {
        if(type === "video") {
            return shouldUseImage ? (
                <img src={"/fallback_video.png"} alt="Muted Video" />
              ) : (
                <div
                  ref={videoParentRef}
                  dangerouslySetInnerHTML={{
                    __html: `
                    <video
                      loop
                      muted
                      autoplay
                      playsinline
                      preload="metadata"
                    >
                    <source src="${src}" type="video/mp4" />
                    </video>`
                  }}
                />
              );            
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



