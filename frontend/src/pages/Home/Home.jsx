import React from 'react'
import About from '../../components/About/About'
import MainHeader from '../../components/MainHeader/MainHeader'

// import './home.css'
const Home = () => {
  return (
    <div className='home'>
      <MainHeader/>
      <About/>
    </div>
  )
}

export default Home