import React from 'react'
import './about.css'
import student from '../../assets/mathstudentps.png'
import { MdPersonSearch, MdOutlineQuiz, MdOutlineDashboardCustomize } from 'react-icons/md';
import { SiBookstack, SiFuturelearn } from 'react-icons/si';
import { RiFunctionLine } from 'react-icons/ri';
import { GiClassicalKnowledge } from 'react-icons/gi'
import { AiFillRobot } from 'react-icons/ai';
import { motion } from 'framer-motion';
// import { features } from './aboutInformation'
const About = () => {
  const transition = {
      type: "tween",
      duration: 2
  }

  // const generateArticles = (features) => {
  //   features.map((feature,index) => {
  //     return (
  //       <article key={index} className='article'>
  //         <h1>{feature.title}</h1>
  //         {
  //           feature.points.map((point, index)=> {
  //             return (
  //               <div key={index} className={index === 0 ? 'article__first__row' : 'article__second__row'}>
  //                 {point.icon}
  //                 <p>{point.content}</p>
  //               </div>
  //             )
  //           })
  //         }
  //       </article>
  //     )
  //   })
  // }

  return (
    <section id='about' className='about'>
        <div className='about__container__top container'>
          <div className="feature__articles">
            {/* { generateArticles(features)} */}
            <article className='article'>
                <h1>Interactive</h1>
                <div className='article__first__row'>
                  <RiFunctionLine className='about__icons interactive__icon'/>
                  <p>
                    Interactive lessons: Our lessons are designed to be engaging 
                    and interactive, making it easy for you to understand and 
                    retain new Maths concepts.
                  </p>
                </div>
                <div className='article__second__row'>
                  <MdOutlineQuiz className='about__icons quiz__icon'/>
                  <p>
                    Quizzes and practice problems: Test your knowledge with quizzes 
                    and practice problems that are tailored to your skill level 
                    and the exam format.
                  </p>
                </div>
            </article>
            <article className='article'>
                <h1>Personalised learning</h1>
                <div className='article__first__row'>
                  <MdPersonSearch className='about__icons personalised__icon'/>
                  <p>
                    Personalized instruction: Our system tracks your progress and 
                    adjusts the difficulty of the lessons and problems to match your skill level.
                  </p>
                </div>
                <div className='article__second__row'>
                  <MdOutlineDashboardCustomize className='about__icons topics__icon'/>
                  <p>
                    Topic selection: Study at your own pace by choosing which topics to repeat, with unique questions generated everytime.
                  </p>
                </div>
            </article>
            <article className='article'>
                <h1>Expert knowledge</h1>
                <div className='article__first__row'>
                  <GiClassicalKnowledge className='about__icons knowledge__icon'/>
                  <p>
                    Expert teachers: Get help from expert tutors who are available to answer 
                    your questions and provide feedback on your work.
                  </p>
                </div>
                <div className='article__second__row'>
                  <SiFuturelearn className='about__icons progress__icon'/>
                  <p>
                    Progress tracking: Track your progress and see how far you've come over time.
                  </p>
                </div>
            </article>
            <article className='article'>
                <h1>Exam ready</h1>
                <div className='article__first__row'>
                  <SiBookstack className='about__icons pastpapers__icon' />
                  <p>
                    Past Exam Papers: Access to a bank of past exam papers, so you can 
                    get familiar with the format of the actual exam.
                  </p>
                </div>
                <div className='article__second__row'>
                  <AiFillRobot className='about__icons mockpapers__icon'/>
                  <p>
                    Auto-generated Mock Papers: so you can practice as many times as you like.
                  </p>
                </div>
            </article>
          </div>
        </div>
        <motion.div
        initial={{opacity:0, x:-100}}
        whileInView={{opacity: 1, x: 0}}
        // animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: 100}}
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
                <h1>Who we are</h1>
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



