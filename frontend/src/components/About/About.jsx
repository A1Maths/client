import React from 'react'
import './about.css'
import student from '../../assets/mathstudentps.png'
import { motion } from 'framer-motion';
import { featuresData } from './aboutInformation'
const About = () => {
  const transition = {
      type: "tween",
      duration: 2
  }

  const generateFeatureArticles = featuresData.map((feature,index) => {
    return (
      <article key={index} className='article'>
        <h1>{feature.title}</h1>
        {feature.points.map((point,index)=> {
          return (
            <div key={index} className={index === 0 ? 'article__first__row' : 'article__second__row'}>
              {point.icon}
              <p>{point.content}</p>
            </div>
          )
        })}
      </article>
    )
  })

  return (
    <section id='about' className='about'>
        <div className='about__container__top container'>
          <div className="feature__articles">
            { generateFeatureArticles }
          </div>
        </div>
        <motion.div
        initial={{opacity:0, x:-100}}
        whileInView={{opacity: 1, x: 0}}
        transition={transition} 
        className='about__container__bottom container'>
          <div className='about__bottom__left__section'>
            <article className='article'>
                <h1>About</h1>
                <p>
                  Welcome to our online GCSE Maths learning platform! We understand 
                  that preparing for the GCSE Maths exam can be a daunting task. But 
                  with our platform, you can feel confident and prepared for exam day.
                </p>
                <br />
                <p>
                  Our team of experienced Maths teachers and tutors have a passion for 
                  helping students succeed. They are dedicated to providing the best possible 
                  instruction to help students achieve their full potential. 
                </p>
            </article>
            <article className='article'>
                <h1>Our Work</h1>
                <p>
                  We understand the importance of personalization and have created interactive and engaging 
                  lesson plans, quizzes, and practice problems to ensure that you have a clear 
                  understanding of the exam format and are testing your knowledge at the right level.
                </p>
                <br />
                <p>
                  With our platform, you can enjoy the convenience and personalized instruction of 
                  online learning from the comfort of your own home. Start preparing now and ace your GCSE Maths exam!
                </p>
            </article>
            <div className="about__buttons">
              <button>Meet the Team</button>
              <button>Register interest</button>
            </div>
          </div>
          <div className='about__bottom__right__section'>
            <img src={student} alt='student on computer studying'/>
          </div>
        </motion.div>
    </section>
  )
}

export default About



