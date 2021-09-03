import navbar from '../styles/components/navbar.module.css'

import Link from 'next/link'
import Logo from '../components/icon/logo'
import Button_Navbar from '../components/button/button_navbar'
import Button_Text from '../components/button/button_text'

import placeholderImage from '../../public/og-image.png'

export default function Navbar() {
    return (
        <div className={navbar.container}>
            <Link href="#">
                <a>
                    <Logo/>
                </a>
                
            </Link>
            
            <div>
                {/* <Button_Text text="login"/> */}
                <Button_Navbar text="get your demo" link=""/>
            </div> 
        </div>
    )
}

