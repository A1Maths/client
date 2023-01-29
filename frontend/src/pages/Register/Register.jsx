import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
// import './form.css'
import formbg from '../../assets/EuclidBustTablet.png'
import './register.css'
import { motion } from 'framer-motion'

const Register = () => {

  const transition = {
    type: "tween",
    duration: 2
  }

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_dbkshrg', 'template_918kpyj', form.current, 'WGit7AI4aeaTfj9Kp')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });

  //   e.target.reset();
  // };

  return (
    <section id='register' className='form'>
      <div className="container form__container">
        
        <motion.div
        initial={{opacity:0, x:-50}}
        animate={{opacity: 1, x: 0}}
        transition={transition}
        className='form__left__column'>
          <img src={formbg} alt="" />
        </motion.div>

        <motion.div
        initial={{opacity:0, x:+50}}
        animate={{opacity: 1, x: 0}}
        transition={transition} 
        className='form__right__column'>
          <div className='form__right__column__header'>
            <h5>Mastery of math starts with a single step</h5>
            <h2>- Take it with us</h2>
          </div>
          <form 
          className="form__input__section"
          // ref={form} 
          // onSubmit={sendEmail}
          >
            <div className="form__input__section__grid">
                <div className="form__input__section__grid__row">
                    <input type="text" placeholder="Name:" className="form__input__section__input" />
                    <input type="email" placeholder="Email:" className="form__input__section__input" />
                </div>
                <input type="subject" placeholder="Subject:" className="form__input__section__input"/>
                <textarea placeholder="Enter your message here..." className="form__input__section__textarea"></textarea>
                <button className="form__input__section__button">SEND MESSAGE</button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}


export default Register