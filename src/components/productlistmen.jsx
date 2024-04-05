import shoesData from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/Data.json'; // replace with the path to your JSON file

import birkenstockLowBend from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/birkenstockLowBend.png';
import colehann_oxford from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/colehann_oxford.png';
import clarks_tilden_oxford from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/clarks_tilden_oxford.png';
import chuck_taylor_all_star_high_street_high_top_sneaker from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/chuck-taylor-all-star-high-street-high-top-sneaker.png';
import columbia_norton_hikingboot from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/columbia_norton_hikingboot.png';
import merrell_runningshoe from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/merrell_runningshoe.png';




const images = {
  'birkenstockLowBend.png': birkenstockLowBend,
  'colehann_oxford.png': colehann_oxford,
  'clarks_tilden_oxford.png': clarks_tilden_oxford,
  'chuck-taylor-all-star-high-street-high-top-sneaker.png': chuck_taylor_all_star_high_street_high_top_sneaker,
  'columbia_norton_hikingboot.png': columbia_norton_hikingboot,
  'merrell_runningshoe.png': merrell_runningshoe
};


const productlist = () => {
  return (
    <div id='productlist'>
      <h2>Mens Shoes</h2>
      <div id='productcont'>
        {shoesData.product.filter(item => parseInt(item.productId) > 3500).map((item, index) => (
          <div className='scrollbox' key={index}>
              <img src={images[item.image.split('/').pop()]} alt="" className='scrollimgs'/>
              <h3>{item.name}</h3>
              <h4>${item.price}</h4>
          </div>
    ))}
    </div>


    </div>
  )
}

export default productlist