import { Link, useLocation } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'
import './navbar.css'
import { ImCross } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react'
import { useEffect } from 'react';

const Navbar = () => {

  // const { logout } = useLogout()
  // const { user } = useAuthContext()

  // const handleClick = () => {
  //   logout()
  // }
  const location = useLocation();
  const[isNavShowing, setIsNavShowing] = useState(false);
  const[path, setPath] =useState(false);

  useEffect(()=>{
    if(location.pathname){
      setPath(location.pathname)
    }
  },[location.pathname] )
    
  const navOptions = [
        {
          name: 'Home',
          address: '/',
          id: 'hero'
        },
        {
          name: 'About',
          address: '/',
          id: 'about'
        },
        {
          name: 'Schools & Teachers',
          address: '/schools',
          id: 'schools'
        },
        {
          name: 'Parents & Students',
          address: '/courses',
          id: 'courses'
        },
        {
          name: 'Pricing',
          address: '/pricing',
          id: 'pricing'
        },
        {
          name: 'Blog',
          address: '/blog',
          id: 'blog'
        },
        {
          name: 'Contact',
          address: '/contact',
          id: 'contact'
        }
  ];

  const scrollToSection = (target) => {
    //use location hook instead of window.location..
    if (window.location.pathname === '/'){
      const scrolledToElement = document.getElementById(target);
        if (scrolledToElement) {
          scrolledToElement.scrollIntoView();
        }
        //add handling here
    }
  }

  return (
    <nav
    style={path !== '/' ? {background:'rgb(3, 137, 182)', position: 'sticky'} : {background:'transparent', position: 'fixed'}}
    className="navbar">
      <div className='container navbar__container'>
      <Link 
              to='/'
              state={{targetId: 'hero'}}
              className='navbar__logo'
              onClick={()=> {
                setIsNavShowing(false);
                scrollToSection('hero');
                }}>
              <strong>A1 MXTHS</strong>
            </Link>
            <ul className={`navbar__links ${isNavShowing ? 'show__navbar' : 'hide__navbar'}`}>
              {
                navOptions.map((link, index) => {
                  return (
                    <li key={index}>
                      <Link 
                        to={link.address}
                        state={{targetId: link.id}} 
                        onClick={()=> {
                          setIsNavShowing(false);
                          scrollToSection(link.id);
                          }}>
                          {link.name}
                      </Link>
                    </li>
                  )
                })
              }
              <li><Link to='/register' className='navbar__links__members'>Register</Link></li>
              <li><Link to='/login' className='navbar__links__members'>Login</Link></li>
            </ul>
            <button className="navbar__toggle-btn" onClick={()=> setIsNavShowing(!isNavShowing)}>
              { isNavShowing ? <ImCross/> : <GiHamburgerMenu/> }
            </button>
      </div>
    </nav>
  )
}

export default Navbar