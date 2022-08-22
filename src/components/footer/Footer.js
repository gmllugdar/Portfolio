import React from 'react'
import './Footer.css'

const Footer = () => {
    let direcction
    function redirect(num) {
        if (num === 1) {
            direcction = "https://www.linkedin.com/in/guillermollugdar-dev/"
        } else if (num === 2) {
            direcction = "https://twitter.com/matullugdar_93"
        } else if (num === 3) {
            direcction = "https://www.instagram.com/guillollugdar/"
        } else if (num === 4) {
            direcction = "https://github.com/gmllugdar/GuillermoLlugdar"
        }
        window.location.href = direcction
    }
    return (
        <div className='footer'>
            <div className='footer-info'>
                <h1>Guillermo Matias Llugdar</h1>
                <p>Santiago Del Estero , Argentina</p>
            </div>
            <div className='footer-contact'>
                <h3>Contact me</h3>
                <p>And let´s get down to work</p>
            </div>
            <div className='footer-sns'>
                Desing    By   Guillermo

                <div className='sns-links'>
                    <a href='https://www.linkedin.com/in/guillermollugdar-dev/' target="_blank" rel='noreferrer'>
                        <i className='fab fa-linkedin linkedin' onClick={() => { redirect(1) }}></i>
                    </a>
                    <a href='https://twitter.com/matullugdar_93' target="_blank" rel='noreferrer'>
                        <i className='fab fa-twitter twitter' onClick={() => { redirect(2) }}></i>
                    </a>
                    <a href='https://www.instagram.com/guillollugdar/' target="_blank" rel='noreferrer'>
                        <i className='fab fa-instagram instagram' onClick={() => { redirect(3) }}></i>
                    </a>
                    <a href='https://www.instagram.com/guillollugdar/' target="_blank" rel='noreferrer'>
                        <i className='fab fa-github instagram ' onClick={() => { redirect(4) }}></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
