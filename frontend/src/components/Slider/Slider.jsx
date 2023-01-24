import React, {useState} from 'react'
import './slider.css'
import { HiChevronDoubleRight, HiChevronDoubleLeft } from 'react-icons/hi'
import { motion } from 'framer-motion';

const Slider = ({data}) => {

    const[slideIndex, setSlideIndex] = useState(0);
    const transition = {
        type: "spring",
        duration: 3
    }

    const nextSlide = () => {
        if(slideIndex !== data.length-1){
            setSlideIndex(slideIndex + 1)
        }
        else if(slideIndex === data.length-1){
            setSlideIndex(0)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 0){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 0){
            setSlideIndex(data.length-1)
        } 
    }

  return (
    <>
        <motion.div 
        key={slideIndex}
        initial={{opacity:0, x:-100}}
        whileInView={{opacity: 1, x: 0}}
        // animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: 100}}
        transition={transition}
        className="">
            <h1>{data[slideIndex].title}</h1>
            <h2>{data[slideIndex].author}</h2>
            <p>{data[slideIndex].content}</p>
        </motion.div>
        <HiChevronDoubleLeft onClick={prevSlide} className='slider__arrows'/>
        <HiChevronDoubleRight onClick={nextSlide} className='slider__arrows'/>
    </>
  )
}

export default Slider