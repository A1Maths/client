import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineLinkedin} from 'react-icons/ai'
import emailjs from 'emailjs-com'

const Contact = () => {

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
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>raffe.ahmed@hotmail.co.uk</h5>
            <a href="mailto:raffe.ahmed@hotmail.co.uk" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <AiOutlineLinkedin className='contact_option_icon'/>
            <h4>Linkedin</h4>
            <h5>Rafee Ahmed</h5>
            <a href="https://www.linkedin.com/in/rafee-ahmed/" target="_blank">Add Me on Linkedin</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option_icon'/>
            <h4>Whatsapp</h4>
            <h5>+447985482218</h5>
            <a href="https://api.whatsapp.com/send?phone=4407985482218" target="_blank">Whatsapp me</a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact