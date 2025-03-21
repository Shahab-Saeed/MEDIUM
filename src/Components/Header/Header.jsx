import React from 'react'
import './Header.css'
// import {assets} from '../../assets/assets'
const Header = () => {
    
  return (
    <div className='headerchild'>
      <div className="child1">
        <div className="logo">Medium</div>
      </div>
      <div className="child2">
        <ul>
            <li>Our Story</li>
            <li>membership</li>
            <li>Write</li>
            <li className='sign'>Sign in</li>
            <li className='highlight'>Get Started</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
