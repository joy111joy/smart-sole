import shoesData from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/Data.json'; // replace with the path to your JSON file
import clarks_laurieann from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/clarks_laurieann.png';
import clarksMiraFlatTideSandel from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/clarksMiraFlatTideSandel.jpeg';
import k_kGenna from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/k_kGenna.png';
import K_KHailee from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/K_KHailee.png';
import blowfish_chelseabootie from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/blowfish_chelseabootie.png';
import converse_CTLift_sneaker from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/converse_CTLift_sneaker.png';
import clarkswestlynnLoafer from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/clarkswestlynnLoafer.png';
import birkenstock_Arizona from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/birkenstock_Arizona.png';
import birkenstockLowBend from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/birkenstockLowBend.png';
import colehann_oxford from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/colehann_oxford.png';
import clarks_tilden_oxford from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/clarks_tilden_oxford.png';
import chuck_taylor_all_star_high_street_high_top_sneaker from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/chuck-taylor-all-star-high-street-high-top-sneaker.png';
import columbia_norton_hikingboot from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/columbia_norton_hikingboot.png';
import merrell_runningshoe from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/merrell_runningshoe.png';





const images = {
  'clarks_laurieann.png': clarks_laurieann,
  'clarksMiraFlatTideSandel.jpeg': clarksMiraFlatTideSandel,
  'k_kGenna.png': k_kGenna,
  'K_KHailee.png': K_KHailee,
  'blowfish_chelseabootie.png': blowfish_chelseabootie,
  'converse_CTLift_sneaker.png': converse_CTLift_sneaker,
  'clarkswestlynnLoafer.png': clarkswestlynnLoafer,
  'birkenstock_Arizona.png': birkenstock_Arizona,
  'birkenstockLowBend.png': birkenstockLowBend,
  'colehann_oxford.png': colehann_oxford,
  'clarks_tilden_oxford.png': clarks_tilden_oxford,
  'chuck-taylor-all-star-high-street-high-top-sneaker.png': chuck_taylor_all_star_high_street_high_top_sneaker,
  'columbia_norton_hikingboot.png': columbia_norton_hikingboot,
  'merrell_runningshoe.png': merrell_runningshoe

};


const productlist = () => {
  return (
    <div>
                          {shoesData.product.filter(item => parseInt(item.productId) > 3500).map((item, index) => (
                      <div className='scrollbox' key={index}>
                          <img src={images[item.image.split('/').pop()]} alt="" className='scrollimgs'/>
                          <h3>{item.name}</h3>
                          <h4>${item.price}</h4>
                          
                      </div>
                      ))}


    </div>
  )
}

export default productlist