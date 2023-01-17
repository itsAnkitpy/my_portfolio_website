import React from 'react'
import './project.css'
import {AiFillYoutube} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
import img from '../../assets/1.jpg'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'
import img7 from '../../assets/7.jpg'
import img8 from '../../assets/8.jpg'
import img9 from '../../assets/9.jpg'

const data = [
  {id: 1,
  image : img,
  demo: 'https://www.youtube.com/watch?v=kUtwgy-16x4&list=RDMMkUtwgy-16x4&start_radio=1&ab_channel=PTN-USA',
  liveLink: '',
  github: '',
  title: 'Real Estate website',
  desc: 'It is a real estate website with all the features',
  tech1:'HTML',
  tech2:'CSS',
  tech3:'Django',
  tech4:'Python',
  },

  { id: 2,
    image : img2,
    demo: 'https://www.youtube.com/watch?v=kUtwgy-16x4&list=RDMMkUtwgy-16x4&start_radio=1&ab_channel=PTN-USA',
    liveLink: '',
    github: '',
    title: 'Real Estate website',
    desc: 'It is a real estate website with all the features',
    tech1:'HTML',
    tech2:'CSS',
    tech3:'Django',
    tech4:'Python',
  },

  { id: 3,
    image : img3,
    demo: 'https://www.youtube.com/watch?v=kUtwgy-16x4&list=RDMMkUtwgy-16x4&start_radio=1&ab_channel=PTN-USA',
    liveLink: '',
    github: '',
    title: 'Real Estate website',
    desc: 'It is a real estate website with all the features',
    tech1:'HTML',
    tech2:'CSS',
    tech3:'Django',
    tech4:'Python',
  },

  { id: 4,
    image : img4,
    demo: 'https://www.youtube.com/watch?v=kUtwgy-16x4&list=RDMMkUtwgy-16x4&start_radio=1&ab_channel=PTN-USA',
    liveLink: '',
    github: '',
    title: 'Real Estate website',
    desc: 'It is a real estate website with all the features',
    tech1:'HTML',
    tech2:'CSS',
    tech3:'Django',
    tech4:'Python',
  },

  { id: 5,
    image : img5,
    demo: 'https://www.youtube.com/watch?v=kUtwgy-16x4&list=RDMMkUtwgy-16x4&start_radio=1&ab_channel=PTN-USA',
    liveLink: '',
    github: '',
    title: 'Real Estate website',
    desc: 'It is a real estate website with all the features',
    tech1:'HTML',
    tech2:'CSS',
    tech3:'Django',
    tech4:'Python',
  },

  { id: 6,
    image : img6,
    demo: 'https://www.youtube.com/watch?v=kUtwgy-16x4&list=RDMMkUtwgy-16x4&start_radio=1&ab_channel=PTN-USA',
    liveLink: '',
    github: '',
    title: 'Real Estate website',
    desc: 'It is a real estate website with all the features',
    tech1:'HTML',
    tech2:'CSS',
    tech3:'Django',
    tech4:'Python',
  },

  { id: 7,
    image : img7,
    demo: 'https://www.youtube.com/watch?v=kUtwgy-16x4&list=RDMMkUtwgy-16x4&start_radio=1&ab_channel=PTN-USA',
    liveLink: '',
    github: '',
    title: 'Real Estate website',
    desc: 'It is a real estate website with all the features',
    tech1:'HTML',
    tech2:'CSS',
    tech3:'Django',
    tech4:'Python',
  },

  { id: 8,
    image : img8,
    demo: 'https://www.youtube.com/watch?v=kUtwgy-16x4&list=RDMMkUtwgy-16x4&start_radio=1&ab_channel=PTN-USA',
    liveLink: '',
    github: '',
    title: 'Real Estate website',
    desc: 'It is a real estate website with all the features',
    tech1:'HTML',
    tech2:'CSS',
    tech3:'Django',
    tech4:'Python',
  },

  { id: 9,
    image : img9,
    demo: 'https://www.youtube.com/watch?v=kUtwgy-16x4&list=RDMMkUtwgy-16x4&start_radio=1&ab_channel=PTN-USA',
    liveLink: '',
    github: '',
    title: 'Real Estate website',
    desc: 'It is a real estate website with all the features',
    tech1:'HTML',
    tech2:'CSS',
    tech3:'Django',
    tech4:'Python',
  }
]

const Project = () => {
  return (
    <section id='projects' className='projects container section'>

      <div className="sectionTitle">

        <span className="titleNumber">03.</span>
        <h5 className="titleText">My Projects
        <div className="underline"><span></span></div>
        </h5>

      </div>

      <div className="projectContainer grid">
        {
          data.map(({id, github, image, liveLink, desc, demo, title, tech1, tech2, tech3, tech4}) =>{
            return (
              <div key={id} className="singleProject">

                <div className="externalLinks flex">
                  <div className="youtubeIcon">
                    <a href="{demo}" target="_blank">
                      <AiFillYoutube className='icon'/>
                    </a>
                  </div>

                  <div className="githubIcon">
                    <a href="{github}" target="_blank">
                      <FaGithub className='icon'/>
                    </a>
                  </div>


                </div>

                <div className="imgDiv">
                  <a href={liveLink} target='_blank'> 
                    <img src={image} alt={title} />
                  </a>
                </div>

                <div className="projectTitle">
                  <h3>{title}</h3>
                </div>

                <div className="desc">
                  {desc}
                </div>

                <div className="technologies flex">
                  <small>{tech1}</small>
                  <small>{tech2}</small>
                  <small>{tech3}</small>
                  <small>{tech4}</small>
                </div>

              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Project