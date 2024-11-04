import './section.css';
import React from 'react'
import Map from '../imgs/map.png'
import Sms from '../imgs/Chat.png'
import Iphone from '../imgs/iPhone.png'
import Xarita from '../imgs/Pin.png'
import Insta from '../imgs/socials.png'
import Children from '../imgs/illustration (1).png'
import Check from '../imgs/checked.png'


function Section() {
  return (
    <div>
      <div className='one'>
        <div>
          <p>Contact info</p>
          <h2>Get in touch</h2>

          <div className='icon'>
            <div className='img'>
              <img src={Sms} alt="" />
            </div>
            <div>
              <p>Talk to us:</p>
              <h4>hello@createx.com</h4>
            </div>
          </div>

          <div className='icon'>
            <div className='img'>
              <img src={Iphone} alt="" />
            </div>
            <div>
              <p>Call us:</p>
              <h4>(405) 555-0128</h4>
            </div>
          </div>


          <div className='icon'>
            <div className='img'>
              <img src={Xarita} alt="" />
            </div>
            <div>
              <p>Address:</p>
              <h4>2464 Royal Ln. Mesa, New Jersey 45463, USA</h4>
            </div>
          </div>

          <div>
            <p>FOLLOW US:</p>
            <img src={Insta} alt="" />
          </div>
        </div>

        <div>
          <img className='map' src={Map} alt="" />
         
        </div>
      </div>

      <div className='divs'>
        <div>
          <img src={Children} alt="" />
        </div>
        <div className='texts'>
          <p>Any questions?</p>
          <h2>Drop us a line</h2>

          <div className='input'>

            <div>
              <div>
              <h4>First Name*</h4>
              <input  type="text" placeholder='Your first name'/>
              </div>

              <div>
              <h4>Email*</h4>
              <input type="text" placeholder='Your working email'/>
              </div>
            </div>

            <div>
              <div>
              <h4>Last  Name*</h4>
              <input type="text" placeholder='Your last name'/>
              </div>

              <div>
              <h4>Phone</h4>
              <input type="text" placeholder='Your phone number'/>
              </div>
            </div>

          </div>

          <div>
            <h4>Message*</h4>
            <textarea name="" id="" cols="75" rows="10"></textarea>
          </div>

          <div className='text'>
            <div className='check'>
              <img src={Check} alt="" />
              <p>
                I agree to receive communications from <br />
                Createx Online School
               </p>
            </div>
            <div>
            <button className='btn'>
                    <span>Get consultation</span>
                </button>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Section
