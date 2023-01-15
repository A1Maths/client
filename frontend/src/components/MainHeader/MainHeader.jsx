import React from 'react'
import './MainHeader.css'
import headerBg from '../../assets/mathsbg4final.png'
const MainHeader = () => {
  return (
    <section className='main__header'>
        <div className="container main__header__container img-container">
            <img src={headerBg} alt="" />
            <div className="main__header__content">
                <div className='main__header__logo left-div'>
                    <h3>A1Maths</h3>
                </div>
                <div className='main__header__ad middle-div'>
                    <h1>Elevate Your Math Skills</h1>
                    <h2>
                        Master Math with our Interactive Lessons and Tools
                    </h2>
                </div>
                <div className='main__header__nav right-div'>
                    <nav>
                        <ul>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Teachers</li>
                            <li>Students</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="main__header__buttons">
                <button className="custom-btn btn-5">
                    <span>Learn More</span>
                </button>
                <button className="custom-btn btn-4">
                    <span>Sign Up Now</span>
                </button>
            </div>
        </div>
    </section>
  )
}

export default MainHeader