import React from 'react'
import './research.css'
import euclid from '../../assets/researchbg1.png'
import { RxDotsHorizontal } from 'react-icons/rx'
// import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import { AiOutlineSmallDash } from 'react-icons/ai'
import { CiSignpostR1 } from 'react-icons/ci'
import { HiChevronDoubleRight } from 'react-icons/hi'
import { AiFillBank } from 'react-icons/ai';

const Research = () => {
  return (
    <section id='research' className='research'>
        <div className='research__container__top container'>
            <img src={euclid} alt="" />
            <div className='research__top__content'>
                <article>
                    <AiFillBank className='research__icons__top'/>
                    <h1>Effectiveness of Online Learning</h1>
                    <p>
                        Online learning has been proven to be an effective way to 
                        prepare for the GCSE Maths exam. Studies have shown that 
                        students who take online Maths classes perform just as well as, 
                        or even better than, students who take traditional classes in 
                        a brick-and-mortar school. Our online GCSE Maths learning platform 
                        is designed with best practices for online education in mind, 
                        including interactive lessons, quizzes, personalized instruction 
                        and access to past exam papers. Additionally, we have had many 
                        success stories from students who have used our platform to prepare 
                        for the GCSE Maths exam and achieved good results. Sign up now and be one of them!
                    </p>
                </article>
            </div>
        </div>
        <div className='research__container__bottom container'>
            <div className='research__bottom__content'>
                <article className='research__article__first__column'>
                    <AiOutlineSmallDash className='research__icons'/>
                    <h1>Interactive</h1>
                    <h2>author: insert name</h2>
                    <p>
                        Personalized instruction: Our system tracks your progress and 
                        adjusts the difficulty of the lessons and problems to match your skill level.
                        Personalized instruction: Our system tracks your progress and 
                        adjusts the difficulty of the lessons and problems to match your skill level.
                        Personalized instruction: Our system tracks your progress and 
                        adjusts the difficulty of the lessons and problems to match your skill level.
                        Personalized instruction: Our system tracks your progress and 
                        adjusts the difficulty of the lessons and problems to match your skill level.
                    </p>
                    <HiChevronDoubleRight className='research__icons__link'/>
                </article>
                <article className='research__article__second__column'>
                    <RxDotsHorizontal className='research__icons'/>
                    <h1>Interactive</h1>
                    <h2>author: insert name</h2>
                    <p>
                        Personalized instruction: Our system tracks your progress and 
                        adjusts the difficulty of the lessons and problems to match your skill level.
                        Personalized instruction: Our system tracks your progress and 
                        adjusts the difficulty of the lessons and problems to match your skill level.
                        Personalized instruction: Our system tracks your progress and 
                        adjusts the difficulty of the lessons and problems to match your skill level.
                        Personalized instruction: Our system tracks your progress and 
                        adjusts the difficulty of the lessons and problems to match your skill level.
                    </p>
                    <HiChevronDoubleRight className='research__icons__link'/>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Research