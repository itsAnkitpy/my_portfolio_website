import React from 'react'
import './skills.css'
import {TbBrandReactNative} from 'react-icons/tb'
import {IoLogoJavascript} from 'react-icons/io'
import {IoLogoSass} from 'react-icons/io'
import {SiCss3} from 'react-icons/si'
import {FaHtml5} from 'react-icons/fa'
import {SiPython} from 'react-icons/si'
import {SiDjango} from 'react-icons/si'
import {FaGitSquare} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {SiMysql} from 'react-icons/si' 

const Skills = () => {
  return (
    <section id='skill' className='skills container section'>
      <div className="sectionTitle">
        <span className="titleNumber">02.</span>
        <h5 className="titleText">My Skills
        <div className="underline"><span></span></div>
        </h5>
      </div>

      {/* Skills Container */}
      <div className="skillsContainer grid">
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className='title'>Web Development</h2>
            <span className="subTitle">
              1 year experience
            </span>
          </div>

          <div className="generalSkills">

            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandReactNative className='icon'/>
              </div>
              <span className="skillName">React</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoJavascript className='icon'/>
              </div>
              <span className="skillName">Javascript</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoSass className='icon'/>
              </div>
              <span className="skillName">Sass</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiCss3 className='icon'/>
              </div>
              <span className="skillName">CSS3</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <FaHtml5 className='icon'/>
              </div>
              <span className="skillName">HTML5</span>
            </div>

          </div>
        </div>

        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className='title'>Backend Development</h2>
            <span className="subTitle">
              1 year experience
            </span>
          </div>

          <div className="generalSkills">

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiPython className='icon'/>
              </div>
              <span className="skillName">Python</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiDjango className='icon'/>
              </div>
              <span className="skillName">Django</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoSass className='icon'/>
              </div>
              <span className="skillName">Sass</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiCss3 className='icon'/>
              </div>
              <span className="skillName">CSS3</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <FaHtml5 className='icon'/>
              </div>
              <span className="skillName">HTML5</span>
            </div>

          </div>
        </div>

        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className='title'>Other Skills</h2>
            <span className="subTitle">
              1 year experience
            </span>
          </div>

          <div className="generalSkills">

            <div className="singleSkill">
              <div className="iconBox flex">
                <FaGitSquare className='icon'/>
              </div>
              <span className="skillName">Git</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <AiFillGithub className='icon'/>
              </div>
              <span className="skillName">Github</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiMysql className='icon'/>
              </div>
              <span className="skillName">MySQL</span>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills