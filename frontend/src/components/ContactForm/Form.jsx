import React, { useRef } from 'react'
// import {MdOutlineEmail} from 'react-icons/md'
// import {BsWhatsapp} from 'react-icons/bs'
// import {AiOutlineLinkedin} from 'react-icons/ai'
import emailjs from '@emailjs/browser';
import './form.css'
import euclid from '../../assets/EuclidBustTablet.png'

const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dbkshrg', 'template_918kpyj', form.current, 'WGit7AI4aeaTfj9Kp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='form' className='form'>
      <div className="container form__container">
        
        <div className='form__left__column'>
          <img src={euclid} alt="" />
        </div>

        <div className='form__right__column'>
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>
          <form className="form__input__section" ref={form} onSubmit={sendEmail}>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Form