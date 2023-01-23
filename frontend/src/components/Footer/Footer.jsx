import React from 'react'
import './footer.css'
// import {AiOutlineLinkedin} from 'react-icons/ai'
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineYoutube, AiOutlineTwitter} from 'react-icons/ai'

import { Link } from 'react-router-dom'

const Footer = () => {
    return (
    <footer className="footer">
        <div className='footer__container container'>
            <div className='footer__logo'>
                <h1>A1 MXTHS</h1>
            </div>
            <div className='footer__menu'>

                <div className='footer__nav'>
                    <h2 href="#" className='footer__header'><strong>A1 Maths</strong></h2>
                    <ul className='permalinks'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#schools">Schools & Teachers</a></li>
                        <li><a href="#courses">Parent & Students</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </div>

                <div className='footer__schools__teachers'>
                    <h2 href="#" className='footer__header'>Schools & Teachers</h2>
                    <ul className='permalinks'>
                        <li><a href="#register">Register</a></li>
                        <li><a href="#faq">Teacher FAQs</a></li>
                        <li><a href="#schools">Schools & Teachers</a></li>
                    </ul>
                </div>

                <div className='footer__parents__students'>
                    <h2 href="#" className='footer__header'>Parents & Students</h2>
                    <ul className='permalinks'>
                        <li><a href="#register">Register</a></li>
                        <li><a href="#faq">Student FAQs</a></li>
                        <li><a href="#schools">Parents & Students</a></li>
                    </ul>
                </div>


                <div className="footer__socials">
                    <h2 href="#" className='footer__header'>Connect with us</h2>
                    <Link href="" target='_blank' className='footer__social__links'><AiOutlineLinkedin/></Link>
                    <Link href="" target='_blank' className='footer__social__links'><AiOutlineInstagram/></Link>
                    <Link href="" target='_blank' className='footer__social__links'><AiOutlineYoutube/></Link>
                    <Link href="" target='_blank' className='footer__social__links'><AiOutlineTwitter/></Link>
                </div>
                
                <div className='footer__company'>
                    <h2 href="#" className='footer__header'>Company</h2>
                    <ul className='permalinks'>
                        <li><a href="#register">Privacy Policy</a></li>
                        <li><a href="#faq">Cookie Policy</a></li>
                        <li><a href="#faq">Terms and Conditions</a></li>
                        <li><a href="#faq">Company Information</a></li>
                    </ul>
                </div>
                
            </div>

            <div className='footer__copyright'>
                © 2022 Copyright: A1Maths.co.uk
            </div>

        </div>
    </footer>
    )
  }
  
  export default Footer
