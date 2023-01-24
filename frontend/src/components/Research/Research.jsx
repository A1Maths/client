import React from 'react'
import './research.css'
import euclid from '../../assets/researchbg1.png'
import { RxDotsHorizontal } from 'react-icons/rx'
import { AiOutlineSmallDash } from 'react-icons/ai'
import { HiChevronDoubleRight, HiChevronDoubleLeft } from 'react-icons/hi'
import { AiFillBank } from 'react-icons/ai';
import { leftData, rightData } from './researchData'
import Slider from '../Slider/Slider'
import { motion } from 'framer-motion';

const Research = () => {
    const transition = {
        type: "tween",
        duration: 2
    }

  return (
    <section id='research' className='research'>
        <motion.div
        initial={{opacity:0, x:100}}
        whileInView={{opacity: 1, x: 0}}
        transition={transition} 
        className='research__container__top container'>
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
                        and access to past exam papers.
                    </p>
                </article>
            </div>
        </motion.div>
        <div className='research__container__bottom container'>
            <div className='research__bottom__content'>
                <article className='research__article__first__column'>
                    <AiOutlineSmallDash className='research__icons'/>
                    <Slider data={leftData}/>
                </article>
                <article className='research__article__second__column'>
                    <RxDotsHorizontal className='research__icons'/>
                    <Slider data={rightData}/>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Research