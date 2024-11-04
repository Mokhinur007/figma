import './header.css';
import React from 'react'
import logo from '../imgs/logo.png'
import person from '../imgs/Profile.png'

function Header() {
  return (
    <div>
      <header>
        <nav>
            <a href="#">
                <img src={logo} alt="" />
            </a>

            <ul>
                <li>About Us</li>
                <li>Courses</li>
                <li>Events</li>
                <li>Blog</li>
                <li className='red'>Contacts</li>
            </ul>

            <div className='div'>
                <button className='btn'>
                    <span>Get consultation</span>
                </button>

                <div className='div_img'>
                    <img src={person} alt="" />
                    <span>Log in / Register</span>
                </div>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
