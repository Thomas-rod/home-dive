import fonts from '../../styles/utils/fonts.module.css'

export default function Paragraph_Text({text}) {
    return (
        <p className={`${fonts.paragraph} ${fonts.robotoMono} `}>{text}</p>
    )
}

