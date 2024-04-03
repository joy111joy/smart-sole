import Banner from './banner.jsx';
import img from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/solespics/birkenstock_Arizona-removebg-preview.png';
import shoesData from '/Users/keyinstudent/Documents/Semester 2/FinalSprint/smart-sole/src/shoes.json'; // replace with the path to your JSON file

const Home = () => {
    return (
      <div>
          <Banner/>
          <div id='HomeMensSection'>
              <h2>Mens</h2>
              <div id='MenScroll'>
                  {shoesData.product.filter(item => parseInt(item.productId) > 3500).map((item, index) => (
                      <div className='scrollbox' key={index}>
                          <img src={item.image} alt="" className='scrollimgs'/>
                          <h3>{item.name}</h3>
                          <h4>${item.price}</h4>
                      </div>
                  ))}
              </div>
          </div>
          <div id='HomeWomensSection'>
              <h2>Womens</h2>
              <div id='WomenScroll'>
                  {shoesData.product.filter(item => parseInt(item.productId) < 3500).map((item, index) => (
                      <div className='scrollbox' key={index}>
                          <img src={item.image} alt="" className='scrollimgs'/>
                          <h3>{item.name}</h3>
                          <h4>${item.price}</h4>
                      </div>
                  ))}
              </div>
          </div>
      </div>
    )
  }
  
  export default Home