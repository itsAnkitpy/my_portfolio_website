import React from 'react'
import './contact.css'
import {BsInstagram} from 'react-icons/bs'
import {TbArrowBigRightLine} from 'react-icons/tb'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact' className='contact section container'>

      <div className="sectionTitle">

        <span className="titleNumber">04.</span>
        <h5 className="titleText">Contact me
        <div className="underline"><span></span></div>
        </h5>

      </div>

      <div className="contactContainer grid">

        <div className="socialContacts grid">
          <h3>Talk to me</h3>

           <div className="cards grid">
            <div className="card">
              <div>
                <BsInstagram className='icon'/>
              </div>
              <h4>Instagram</h4>
              <span className="userName">
                @ankitpy
              </span>

              <div>
                <a href="https://www.instagram.com" className="flex" target="_blank">
                  Send Message
                  <TbArrowBigRightLine className='icon'/>
                </a>
              </div>
            </div>

            <div className="card">
              <div>
                <AiFillLinkedin className='icon'/>
              </div>
              <h4>LinkedIn</h4>
              <span className="userName">
                @ankitpy
              </span>

              <div>
                <a href="https://www.instagram.com" className="flex" target="_blank">
                  Send Message
                  <TbArrowBigRightLine className='icon'/>
                </a>
              </div>
            </div>

            <div className="card">
              <div>
                <AiOutlineTwitter className='icon'/>
              </div>
              <h4>Twitter</h4>
              <span className="userName">
                @ankitpy
              </span>

              <div>
                <a href="https://www.instagram.com" className="flex" target="_blank">
                  Send Message
                  <TbArrowBigRightLine className='icon'/>
                </a>
              </div>
            </div>


           </div>
        </div>

        <div className="form grid">
          <h3>Send me an email</h3>
          
          <form action="">
            <input type="text" placeholder='Enter your name' />
            <input type="email" placeholder='Enter your email' />
            <textarea name="message" placeholder='Enter your message'></textarea>
            <button className="formBtn" type='submit' name='submit'>Send Email</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact