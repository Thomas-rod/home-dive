import fonts from '../../styles/utils/fonts.module.css'

export default function Header_H1({text}) {
    return (
        <h1 className={`${fonts.h1} ${fonts.montSerrat} ${fonts.__bold} ${fonts.__white}`} dangerouslySetInnerHTML={{ __html: text }}/>
    )
}

