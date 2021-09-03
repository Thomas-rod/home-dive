import navbar from '../styles/components/navbar.module.css'

import Link from 'next/link'
import Logo from '../components/icon/logo'
import Button_Navbar from '../components/button/button_navbar'
import Button_Text from '../components/button/button_text'
import Header_H2 from './font/header_h2'
import fontStyle from '../styles/utils/fonts.module.css'

import placeholderImage from '../../public/og-image.png'

export default function Navbar() {
    return (
        <div className={navbar.container}>
            <Link href="#">
                <a>
                    <Header_H2 text="dive" className={`${fontStyle.montSerrat}`}/>
                </a>
                
            </Link>
            
            <div>
                {/* <Button_Text text="login"/> */}
                <Button_Navbar text="get your demo" link=""/>
            </div> 
        </div>
    )
}

