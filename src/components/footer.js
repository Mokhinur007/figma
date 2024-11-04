import React from 'react'
import './footer.css'
import Logoteo from '../imgs/logoteo.png'
import Link from '../imgs/socialsteo.png'

function Footer() {
  return (
    <div>
      <div className='div_div'>
          <div className='content'>
             <div className='wrap'>
                <a href="#">
                  <img src={Logoteo} alt="" />
                </a>
                <p>
                Createx Online School is a leader in online studying. <br />
                We have lots of courses and programs from the main <br />
                market experts. We provide relevant approaches to on <br />
                line learning, internships and employment in the largest <br /> 
                companies in the country. 
                </p>

                <div>
                   <img src={Link} alt="" />
                </div>
              </div>


              <div className='wrap'>
                 <h4>SITE MAP</h4>
                 <div>
                  <p>About Us</p>
                  <p>Courses</p>
                  <p>Events</p>
                  <p>Blog</p>
                  <p>Contacts</p>
                 </div>
              </div>

              <div className='wrap'>
                 <h4>COURSES</h4>
                 <div>
                  <p>Marketing</p>
                  <p>Management</p>
                  <p>HR & Recruting</p>
                  <p>Design</p>
                  <p>Development</p>
                 </div>
              </div>

              <div className='wrap'>
                 <h4>CONTACT US</h4>
                 <div>
                  <p>(405) 555-0128</p>
                  <p>hello@createx.com</p>
                 </div>
              </div>

              <div className='wrap'>
                 <h4>SIGN UP TO OUR NEWSLETTER</h4>
                 <div>
                  <input type="text" placeholder='Email address'/>
                  <p>*Subscribe to our newsletter to receive <br />
                   communications and early updates 
                   from <br /> Createx SEO Agency.</p>
                 </div>
              </div>

            

            </div>
      </div>
    </div>
  )
}

export default Footer;

{/*             
            <div className='wrap'>
            

            
            </div> */}
