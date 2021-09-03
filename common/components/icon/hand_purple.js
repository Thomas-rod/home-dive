import handStyle from '../../styles/components/hand.module.css'

export default function Hand_Purple({side}) {
 
    return (
        <div className={`${handStyle.container} ${
                    (side === "left")
                    ? handStyle.rotate_270
                    : (side === "right")
                    ? handStyle.rotate_90
                    : ""
                }`}>
            <svg width="75" height="121" viewBox="0 0 75 121" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${handStyle.svg_purple}`}>
                <g filter="url(#filter0_d)">
                    <path d="M57.4585 48.8941C57.4585 48.8941 57.9759 69.0183 58.3132 81.6726C58.6516 94.327 58.8054 102.252 57.6328 106.751C56.4601 111.25 52.9133 114.7 48.5221 114.295C44.1308 113.891 41.2363 111.289 41.221 106.264C41.2046 101.24 41.8349 84.9874 41.6853 79.6513C41.5348 74.3142 41.347 66.9969 41.347 66.9969" stroke="#7A18F6" strokeWidth="3"/>
                    <path d="M57.9888 69.3465C57.9888 69.3465 68.5295 65.5155 70.1006 59.3635C71.6725 53.2135 71.7324 44.2348 70.7757 37.0245C69.8208 29.8153 68.5655 19.6958 53.9922 12.4652" stroke="#7A18F6" strokeWidth="3"/>
                    <path d="M41.6819 84.8074C41.6819 84.8074 38.5524 86.4732 34.1524 86.2201C29.7525 85.9671 26.5216 81.26 27.3082 67.5816" stroke="#7A18F6" strokeWidth="3"/>
                    <path d="M59.0496 15.4328C59.0496 15.4328 61.8665 10.9374 59.4822 7.90928C57.0981 4.87926 49.0357 2.13227 40.3691 1.93819C31.7034 1.74416 26.2156 1.88505 23.0584 3.83466C19.9012 5.78522 18.6826 8.45401 20.4718 11.7541" stroke="#7A18F6" strokeWidth="3"/>
                    <path d="M28.0062 79.5705C28.0062 79.5705 21.955 81.2601 18.6996 79.625C15.4452 77.99 13.0493 74.655 14.2493 64.3724" stroke="#7A18F6" strokeWidth="3"/>
                    <path d="M13.8115 70.4367C13.8115 70.4367 2.90616 71.0268 3.88674 56.6214C4.86727 42.217 5.25333 30.212 12.1842 20.8676C19.1151 11.5242 26.5119 9.97058 28.528 9.32478" stroke="#7A18F6" strokeWidth="3"/>
                </g>
                <defs>
                    <filter id="filter0_d" x="0.72625" y="7.62939e-05" width="75.2738" height="120.829" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="1" dy="4"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>                
                        <feColorMatrix type="matrix" values="0 0 0 0 0.478431 0 0 0 0 0.0941176 0 0 0 0 0.964706 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </div>
    )
}