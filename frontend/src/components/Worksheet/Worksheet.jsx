import React, { useEffect } from 'react'
import { 
  generateMultiplyingSingleTerms, 
  generateOneStepLinearEquation 
} from '../Math/Algebra/algebra'
import QuestionCard from '../QuestionCard/QuestionCard'
import './worksheet.css'
const Worksheet = () => {
  return (
    <section id='worksheet' className='worksheet'>
        <div className='worksheet__container container'>
            <div className='worksheet__column'>
              <QuestionCard topicFunction={generateOneStepLinearEquation}/>
            </div>
            <div className='worksheet__column'>
              {/* <QuestionCard topicFunction={generateMultiplyingSingleTerms}/> */}
            </div>
            <div className='worksheet__column'>
              {/* <QuestionCard topicFunction={generateMultiplyingSingleTerms}/> */}
            </div>
        </div>
    </section>
  )
}

export default Worksheet