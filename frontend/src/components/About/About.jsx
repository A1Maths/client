import React from 'react'
import './about.css'
import student from '../../assets/mathstudentps.png'

import { MdOutlineQuiz } from 'react-icons/md';
import { MdPersonSearch } from 'react-icons/md';
import { SiBookstack } from 'react-icons/si';
import { RiFunctionLine } from 'react-icons/ri';
import { SiFuturelearn } from 'react-icons/si';
import { GiClassicalKnowledge } from 'react-icons/gi'

const About = () => {
  return (
    <section id='about' className='about'>
        <div className='about__container__top container'>
          <div className="feature__articles">
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
            </article>
            <article className='article'>
                <h1>Expert knowledge</h1>
                <div className='article__first__row'>
                  <GiClassicalKnowledge className='about__icons knowledge__icon'/>
                  <p>
                    Expert tutors: Get help from expert tutors who are available to answer 
                    your questions and provide feedback on your work.
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
                  <SiFuturelearn className='about__icons progress__icon'/>
                  <p>
                    Progress tracking: Track your progress and see how far you've come over time.
                  </p>
                </div>
            </article>
          </div>
        </div>
        <div className='about__container__bottom container'>
          <div className='about__bottom__left__section'>
            <article className='article'>
                <h1>What we do!</h1>
                <p>Welcome to our online math learning platform! 
                  We understand that math can be a challenging subject for many students, 
                  which is why we have created this website to help you master math with 
                  the help of expert tutors and interactive tools.</p>
                   
                  <p>Our team is composed of experienced math teachers and tutors who have a passion for helping 
                  students succeed. With our platform, you can enjoy the convenience and 
                  personalized instruction of online learning from the comfort of your own home. 
                  Sign up now to start elevating your math skills today!</p>
            </article>
            <article className='article'>
                <h1>Article 2</h1>
                <p>
                  Online learning has been proven to be an effective way to improve math skills.
                   Studies have shown that students who take online math classes perform just as 
                   well as, or even better than, students who take traditional classes in a 
                   brick-and-mortar school.
                </p>
                <p>
                  Our online math learning platform is designed with 
                  best practices for online education in mind, including interactive lessons, 
                  quizzes, and personalized instruction. Additionally, we have had many success 
                  stories from students who have used our platform to improve their math skills.
                </p>
            </article>
            <div className="about__buttons">
              <button>Meet the Team</button>
              <button>Register interest</button>
            </div>
          </div>
          <div className='about__bottom__right__section'>
            <img src={student} alt='image'/>
          </div>
        </div>
    </section>
  )
}

export default About



