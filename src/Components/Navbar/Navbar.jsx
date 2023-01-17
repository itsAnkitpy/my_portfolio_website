import React, {useState} from 'react'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';
import {SiPython} from 'react-icons/si'


const Navbar = () => {
  // code to toggle the navbar on-off at small width
  const [active, setActive] = useState('navBar')

  // this will bring the navbar from the top
  const showNavbar = () => {
    setActive('navBar activeNavbar')
  }

  // this will hide the navbar again
  const removeNavbar = () => {
    setActive('navBar')
  }

  // code to add background state color to header
  const [activeHeader, setactiveHeader] = useState('header')
  const addBg = () => {
    if (window.scrollY >= 10){
      setactiveHeader('header activeHeader')
    }

    else{
      setactiveHeader('header')
    }
  }

  window.addEventListener('scroll', addBg)

  return (
    <header className={activeHeader}>
      <div className="logoDiv">
        <h1 className="logo">
          <SiPython />
          <a href="#home"> ankit.py</a>
        </h1>
      </div>

      <div className={active}>
        <ul onClick={removeNavbar} className="navLists">
          <li className="navItem">
            <a href="#about" className='navLink'> 
            <span className='headerNumber'>1. </span>About</a>
          </li>

          <li className="navItem">
            <a href="#skill" className='navLink'>
            <span className='headerNumber'>2. </span>Skills</a>
          </li>

          <li className="navItem">
            <a href="#projects" className='navLink'>
            <span className='headerNumber'>3. </span>Projects</a>
          </li>

          <li className="navItem">
            <a href="#contact" className='navLink'> 
            <span className='headerNumber'>4. </span>Contact</a>
          </li>

          <button className="btn"><a href="Ankit Sharma.docx" download="Ankit Sharma.docx">Resume</a></button>
        </ul>

        <div onClick={removeNavbar} className="closeNavBar">
          <AiFillCloseCircle className="icon"/>
        </div>
      </div>

      <div onClick={showNavbar} className="toggleNavBar">
        <TbGridDots className="icon"/>
      </div>
    </header>
  )
}

export default Navbar