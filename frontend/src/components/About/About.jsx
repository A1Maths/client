import React from 'react'
import './about.css'
import student from '../../assets/mathstudent.png'

const About = () => {
  return (
    <section className='about'>
        <div className='about__container__top container'>
          <div className="feature__articles">
            <article className='article'>
                <h1>Article 1</h1>
                <p>Interactive lessons: Our lessons are designed to be engaging 
                  and interactive, making it easy for you to understand and 
                  retain new Maths concepts.</p>
                <p>Quizzes and practice problems: Test your knowledge with quizzes 
                  and practice problems that are tailored to your skill level 
                  and the exam format.</p>
            </article>
            <article className='article'>
                <h1>Article 2</h1>
                <p>Personalized instruction: Our system tracks your progress and 
                  adjusts the difficulty of the lessons and problems to match your skill level.</p>
            </article>
            <article className='article'>
                <h1>Article 3</h1>
                <p>Expert tutors: Get help from expert tutors who are available to answer 
                  your questions and provide feedback on your work.</p>
            </article>
            <article className='article'>
                <h1>Article 4</h1>
                <p>Past Exam Papers: Access to a bank of past exam papers, so you can 
                  get familiar with the format of the actual exam.</p>
                <p>Progress tracking: Track your progress and see how far you've come over time.</p>
            </article>
          </div>
        </div>
        <div className='about__container__bottom container'>
          <div className='about__bottom__left__section'>
            <article className='article'>
                <h1>Article 1</h1>
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
          </div>
          <div className='about__bottom__right__section'>
            <img src={student} alt='image'/>
          </div>
        </div>
    </section>
  )
}

export default About



