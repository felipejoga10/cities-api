import React from 'react'
import './header.css'



export default props =>
    <header className='header'>
        <h1>{props.title}</h1>
        <p className="load text-muted">header</p>
    </header>