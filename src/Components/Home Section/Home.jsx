import React from 'react'
import './home.css'
import {AiFillGithub} from 'react-icons/ai';
import {FiTwitter} from 'react-icons/fi';
import {FaLinkedin} from 'react-icons/fa';
import {TbArrowBigRightLine} from 'react-icons/tb';
import {TbChevronsDown} from 'react-icons/tb';
 
const Home = () => {
  return (
    <section id='home' className='home section'>

      {/* Visible at wider screen */}
      <div className="leftIcons">
        <div className="socials grid">
          <a href="https://github.com" target='_blank'>
            <AiFillGithub className='icon'/>
          </a>

          <a href="https://twitter.com" target='_blank'>
            <FiTwitter className='icon'/>
          </a>

          <a href="https://linkedin.com" target='_blank'>
            <FaLinkedin className='icon'/>
          </a>

          <div className="line">
            
          </div>
        </div>
      </div>

      {/* Home content */}
      <div className="container homeContainer">
        
        <span className="introText">
          Hi, my name is
        </span>
        <h1 className='title'>Ankit Sharma</h1>

        <span className="subTitle">
        I’m a software engineer specializing in building and occasionally designing exceptional digital experiences.
        </span>

        <p className="homeParagraph">
          I code within required coding standards to serve the need.
        </p>

        <div className="lowerHomeSection">
          <button className="contactBtn">
            <a href="#contact" className="flex">
              Contact Me <TbArrowBigRightLine className='icon'/>
            </a>
          </button>

          <div className="scrollDiv">
            <a href="#about" className="flex">
              <h6 className="scroll">Scroll Down</h6>
              <TbChevronsDown className='icon'/>
            </a>
          </div>
        </div>
      </div>

      {/* RIght div with email address visible in wider screen only */}
      <div className="rightEmail">
        <div>
          <div className="emailAddress">
            <a href="https://mailto:ankit3585@gmail.com" target='_blank'>ankit3585@gmail.com</a>
          </div>

          <div className="line">
            
          </div>
        </div>
      </div>

    </section>
  )
}

export default Home