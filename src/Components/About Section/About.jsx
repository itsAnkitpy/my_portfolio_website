import React from 'react'
import './about.css'
import {TbCloudDownload} from 'react-icons/tb'
import img from '../../assets/new.jpg'

const About = () => {
  return (
    <section id='about' className='about section container'>

      <div className="sectionTitle">

        <span className="titleNumber">01.</span>
        <h5 className="titleText">About Me 
        <div className="underline"><span></span></div>
        </h5>

      </div>

      <div className="sectionContent grid">

        <div className="textSection">
          <h4>
          Hello! My name is Ankit and I enjoy creating things that live on the internet. My interest in web 
          development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking 
          together a custom reblog button taught me a lot about HTML & CSS!
          <br />
          Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge 
          corporation, and a student-led design studio. My main focus these days is building accessible, inclusive 
          products and digital experiences at Upstatement for a variety of clients.
          </h4>

          <div className="aboutBtn">
            <a href="Ankit Sharma.docx" download="Ankit Sharma.docx" className="flex">
              Download CV <TbCloudDownload className='icon'/>
            </a>
          </div>
        </div>

        <div className="aboutImgDiv">
          <img src={img} alt="Ankit Sharma" className="aboutImg" />
        </div>
      </div>
    </section>
  )
}

export default About