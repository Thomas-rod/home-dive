import fonts from '../../styles/utils/fonts.module.css'
import textSide from '../../styles/components/textSide.module.css'

export default function Text_Side({text, side}) {
    return (
        <div className={`${textSide.container} ${(side === "left") ? textSide.text_side_left : textSide.text_side_right}`}>
            <p className={`${textSide.text_side} ${fonts.rubikMonoOne}`}>{text || "Dive"}</p>
            <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.588 2C11.588 5.52779 15.8021 8.38642 21 8.38642L21 8.61358C15.8021 8.61358 11.588 11.4736 11.588 15L11.4106 15C11.4106 11.4736 7.19653 8.61358 2 8.61358L2 8.38642C7.19653 8.38642 11.4106 5.52779 11.4106 2L11.588 2Z" stroke="#FF00B8" strokeWidth="2.417" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg width="47" height="34" viewBox="0 0 47 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M23.6945 2.5C23.6945 10.3697 33.0098 16.7466 44.5 16.7466L44.5 17.2534C33.0098 17.2534 23.6945 23.6334 23.6945 31.5L23.3024 31.5C23.3024 23.6334 13.9871 17.2534 2.5 17.2534L2.5 16.7466C13.9871 16.7466 23.3024 10.3697 23.3024 2.5L23.6945 2.5Z" stroke="#FF00B8" strokeWidth="2.417" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}

