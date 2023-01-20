import React from 'react'
import './MainHeader.css'
// import './testHeader.css'
import headerBg from '../../assets/mathsHero.png'
import { AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai';

const MainHeader = () => {
  return (
    <section id='hero' className='main__header'>
        <div className="container main__header__container img-container">
            {/* <div className='main__header__socials'>
                <div className='social__icons'>
                    <AiFillLinkedin/>
                    <AiFillInstagram/>
                    <AiFillTwitterSquare/>
                    <AiFillYoutube/>
                </div>
            </div>
            <div className="main__header__content">
                <div className='main__header__logo left-div'>
                    <h3>A1Maths</h3>
                </div>
                <div className='main__header__ad middle-div'>
                    <h1>Elevate Your Math Skills</h1>
                    <h2>
                        Master Math with our Interactive Lessons and Tools
                    </h2>
                    <div className="main__header__buttons">
                        <button className="custom-btn btn-5">
                            <span>Learn More</span>
                        </button>
                        <button className="custom-btn btn-4">
                            <span>Sign Up Now</span>
                        </button>
                    </div>
                </div>
                <div className='main__header__nav right-div'>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Teachers</li>
                            <li>Students</li>
                            <li>Resources</li>
                            <li>Contact</li>
                            <li>Register</li>
                            <li>Login</li>
                        </ul>
                    </nav>
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default MainHeader