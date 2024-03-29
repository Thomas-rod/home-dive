import handStyle from '../../styles/components/hand.module.css'

export default function Hand_Green_Left({displayMobile}) {
 
    return (
        <div className={`${handStyle.container} ${(displayMobile === true) ? handStyle.displayMobile : ""}`}>
            <svg width="104" height="64" viewBox="0 0 104 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${handStyle.svg_green}`}>
                <path d="M43.2406 14.4404C43.2406 14.4404 61.1598 12.947 72.4269 11.9972C83.6941 11.0466 90.7532 10.503 94.8255 11.3179C98.8978 12.1329 102.156 15.1189 102.02 19.0555C101.885 22.9921 99.7128 25.7067 95.2326 25.9781C90.7532 26.2503 76.2279 26.5217 71.4771 26.9287C66.7255 27.3366 60.21 27.8794 60.21 27.8794" stroke="#26CEA9" strokeWidth="3"/>
                <path d="M61.4517 12.9188C61.4517 12.9188 57.4948 3.71564 51.9283 2.63014C46.3634 1.5438 38.3536 1.95086 31.9729 3.17374C25.5931 4.39492 16.6335 6.03329 10.9329 19.3998" stroke="#26CEA9" strokeWidth="3"/>
                <path d="M76.0753 26.6675C76.0753 26.6675 77.7212 29.3728 77.7212 33.3094C77.7212 37.2461 73.6893 40.3686 61.4513 40.3686" stroke="#26CEA9" strokeWidth="3"/>
                <path d="M13.3203 14.7375C13.3203 14.7375 9.16712 12.4561 6.58905 14.7375C4.0093 17.0189 1.97315 24.3494 2.24452 32.0878C2.5159 39.8253 2.92296 44.7118 4.82343 47.4272C6.72474 50.1427 9.16712 51.0925 12.0182 49.3277" stroke="#26CEA9" strokeWidth="3"/>
                <path d="M72.1066 39.1313C72.1066 39.1313 73.9237 44.4408 72.6325 47.4276C71.3414 50.4136 68.4903 52.7211 59.2593 52.1784" stroke="#26CEA9" strokeWidth="3"/>
                <path d="M64.6894 52.2578C64.6894 52.2578 65.7749 61.9523 52.8787 61.8167C39.9833 61.681 29.2581 61.9523 20.5699 56.2509C11.8825 50.5495 10.1177 44.0332 9.43845 42.2684" stroke="#26CEA9" strokeWidth="3"/>
            </svg>
        </div>
    )
}
