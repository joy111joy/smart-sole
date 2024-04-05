import React from 'react'
import img from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/solespics/Banner.png'
import { Link } from 'react-router-dom';

export const Banner = () => {
  return (
    <div id='Banner'>
    <img src={img} alt="" id='Bannerimg'/>
    <h2 id='Bannertxt'>your shoes should be comfortable.</h2>
    <div id='ShopBox'>
    <Link to="/men" id='ShopNow'>Shop Now</Link>
    </div>
</div>
  )
}

export default Banner