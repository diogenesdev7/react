import { BiCameraMovie } from 'react-icons/bi'
import { BiMenu } from 'react-icons/bi'
import { IoClose } from 'react-icons/io5'

import { Link } from 'react-router-dom'
import { useState } from 'react'

import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'

import '../styles/header.sass'


const Header = () => {

    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }

  return (
    <header>
        <Link to='/'>
            <div className="logo">
                <BiCameraMovie />
                <h1>CineDatabase</h1>
            </div>
        </Link>

        <nav>
                { menu ? <MenuMobile menu={menu} /> : '' }
                
                <MenuDesktop />

                { menu ? 
                    <IoClose className='mobile-icon' onClick={handleMenu} />
                     : 
                    <BiMenu className='mobile-icon' onClick={handleMenu} />
                }

        </nav>
    </header>
  )
}

export default Header