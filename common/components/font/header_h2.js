import fontStyle from '../../styles/utils/fonts.module.css'

export default function Header_H2({text, align}) {
    return (
        <h2 className={`${fontStyle.h2} ${fontStyle.p_ls__negative} ${fontStyle.montSerrat} ${fontStyle.__bold} ${(align && align === "center") ? fontStyle.__align_center : ""} ${fontStyle.__white}`} dangerouslySetInnerHTML={{ __html: text }}/>
    )
}

