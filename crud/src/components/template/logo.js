import React from 'react'
import './logo.css'
import Logo from '../../assets/logo/x_Logotipo__4_-removebg-preview.png'

export default props =>
    <aside className="logo">
        <a href='/' className='logo'>
            <img src={Logo} alt='logo'></img>
        </a>
    </aside>

