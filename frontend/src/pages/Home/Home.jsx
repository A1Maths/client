import React from 'react'
import About from '../../components/About/About'
import MainHeader from '../../components/MainHeader/MainHeader'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Research from '../../components/Research/Research'
import Register from '../Register/Register'

// import './home.css'
const Home = () => {

  const { state } = useLocation();
  const { targetId } = state || {};

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView();
    }
  }, [targetId]);

  return (
    <div id='hero' className='home'>
      <MainHeader/>
      <About/>
      <Research/>
    </div>
  )
}

export default Home