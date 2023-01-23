import React from 'react'
import './MainHeader.css'
// import './testHeader.css'
import headerBg from '../../assets/mathsHero.png'
import { AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai';

const MainHeader = () => {
  return (
    <section id='hero' className='main__header'>
        <div className="container main__header__container">
            <div className="main__header__content">
                <div className='main__header__ad'>
                    <h1>
                        Master Math with our Interactive Lessons and Tools
                    </h1>
                    <p>
                        Take the first step towards academic success with our GCSE 
                        Maths online learning platform. With our comprehensive GCSE 
                        Maths preparation program, you will have all the resources 
                        you need to ace the exam. Whether you are a student looking 
                        to improve your grades or a teacher looking to prepare your 
                        class, our platform is the perfect solution.
                    </p>
                </div>
                <div className="main__header__buttons">
                    <button className="cta__learn cta">
                        <span>Learn More</span>
                    </button>
                    <button className="cta__register cta">
                        <span>Sign Up Now</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MainHeader