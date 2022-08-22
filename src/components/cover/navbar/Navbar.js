import React from 'react'
import './Navbar.css'
const Navbar = ({ isScrolling }) => {
    function toTheTop() {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    function redirect(num) {

    }
    return (
        <nav className={`navbar ${isScrolling > 20 ? 'scrolling' : null}`}>
            <div className='navbar-logo' onClick={toTheTop}>
                Welcome to my page !
                <div className='logos'>
                    <a href='https://wa.me/3855931920' target="_blank" rel='noreferrer'>
                        <i className='fab fa-whatsapp logo ' onClick={() => { redirect(1) }}></i>
                    </a>
                    <a href='mailto:gmllugdar@gmail.com' target="_blank" rel='noreferrer'>
                        <i className='fab fa-google logo' onClick={() => { redirect(2) }}></i>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
