import fonts from '../../styles/utils/fonts.module.css'

export default function Header_Subtitle({text}) {
    return (
        <p className={`${fonts.subtitle} ${fonts.robotoMono}${fonts.p_fw__600} ${fonts.__white}`} dangerouslySetInnerHTML={{ __html: text }}/>
    )
}

