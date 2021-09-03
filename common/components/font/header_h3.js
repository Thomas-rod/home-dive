import fonts from '../../styles/utils/fonts.module.css'

export default function Header_H3({text }) {
    return (
        <h3 className={`${fonts.h3} ${fonts.montSerrat} ${fonts.__bold}`} dangerouslySetInnerHTML={{ __html: text }}/>
    )
}

