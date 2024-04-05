import shoesData from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/Data.json'; // replace with the path to your JSON file

import clarks_laurieann from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/clarks_laurieann.png';
import clarksMiraFlatTideSandel from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/clarksMiraFlatTideSandel.jpeg';
import k_kGenna from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/k_kGenna.png';
import K_KHailee from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/K_KHailee.png';
import blowfish_chelseabootie from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/blowfish_chelseabootie.png';
import converse_CTLift_sneaker from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/converse_CTLift_sneaker.png';
import clarkswestlynnLoafer from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/clarkswestlynnLoafer.png';
import birkenstock_Arizona from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/birkenstock_Arizona.png';
import taxiWinteranklebootie from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/taxiWinterAnkleBootie.png';
import asics_jolt from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/asics_jolt.png';
import BOBSBCutesneaker from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/images/BOBSBCutesneaker.png';


const images = {
    'clarks_laurieann.png': clarks_laurieann,
    'clarksMiraFlatTideSandel.jpeg': clarksMiraFlatTideSandel,
    'k_kGenna.png': k_kGenna,
    'K_KHailee.png': K_KHailee,
    'blowfish_chelseabootie.png': blowfish_chelseabootie,
    'converse_CTLift_sneaker.png': converse_CTLift_sneaker,
    'clarkswestlynnLoafer.png': clarkswestlynnLoafer,
    'birkenstock_Arizona.png': birkenstock_Arizona,
    'taxiWinteranklebootie.png': taxiWinteranklebootie,
    'asics_jolt.png': asics_jolt,
    'BOBSBCutesneaker.png': BOBSBCutesneaker

  };

const productlistwomen = () => {
  return (
    <div id='productlist'>
      <h2>Womens Shoes</h2>
        <div id='productcont'>
            {shoesData.product.filter(item => {
                const id = parseInt(item.productId);
                return id >= 3000 && id <= 3499}).map((item, index) => (
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

export default productlistwomen