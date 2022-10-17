import React from 'react'
import "./calculator.css"
import {calculatorButtons} from './buttons.js'



const Calculator = () => {

    const createButtons = calculatorButtons.map( button => {
        return (
            <button key={button.name} className='buttons col-2'>
                {button.symbol}
            </button>
        )
    })
    
    // style={{maxWidth: '100%'}}
  return (
    <div className='container calculator col-6' >
        <div className='display-screen row'>
            <div className='operations p-0'>
                operations
            </div>
            <div className='result p-0'>
                results
            </div>
        </div>
        <div className='input-buttons row'>
            {createButtons}
        </div>
    </div>
  )
}
 
export default Calculator