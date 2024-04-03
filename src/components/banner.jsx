import React from 'react'
import img from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/solespics/Banner.png'

export const Banner = () => {
  return (
    <div id='Banner'>
    <img src={img} alt="" id='Bannerimg'/>
    <h2 id='Bannertxt'>your shoes should be comfortable.</h2>
    <div id='ShopBox'>
    <h2 id='ShopNow'>Shop Now</h2>
    </div>
</div>
  )
}

export default Banner