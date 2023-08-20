import { RiMovie2Line } from 'react-icons/ri'
import { BiMenu } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'

import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'

import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'
import '../styles/Header.sass'

function Header () {

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }


    return (
        <header>
            <nav className='center'>
                <Link to='/'>
                    <div className="logo">
                        <RiMovie2Line />
                        <h1>CineDatabase</h1>
                    </div>
                </Link>

                {showMenu ? <MenuMobile /> : <MenuDesktop />}
                

                <div onClick={toggleMenu} className='hamburguer'>
                    {showMenu ? <IoMdClose /> : <BiMenu />}
                </div>
            </nav>
        </header>
    )
}

export default Header