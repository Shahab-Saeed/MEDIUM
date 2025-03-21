 import React from 'react'
 import './MainSection.css'
import {assets} from '../../assets/assets'
 const MainSection = () => {
   return (
     <div className='mainsection'>
        <div className="child1">
          <h1>Human <br />Stories & ideas</h1>
          <p>A place to read, write, and deepen your understanding</p>
          <p className="btn">Start reading</p>
        </div>
        <div className="child2">
          <img src={assets.pic} alt="" />
        </div>
     </div>
   )
 }
 
 export default MainSection
 