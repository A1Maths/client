import React from 'react'
import './MainHeader.css'
// import { AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai';
import { motion } from 'framer-motion';
const MainHeader = () => {
    const transition = {
        type: "spring",
        duration: 3
    }

    const scrollToSection = (target) => {
        if (window.location.pathname === '/'){
          const scrolledToElement = document.getElementById(target);
            if (scrolledToElement) {
              scrolledToElement.scrollIntoView();
            }
            //add handling here
        }
      }

  return (
    <section id='hero' className='main__header'>
        <div className="container main__header__container">
            <motion.div
            initial={{opacity:0, x:-100}}
            whileInView={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 100}}
            transition={transition}
            className="main__header__content">
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
                    <button onClick={()=>{scrollToSection('about')}} className="cta__learn cta">
                        <span>Learn More</span>
                    </button>
                    <button className="cta__register cta">
                        <span>Sign Up Now</span>
                    </button>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default MainHeader