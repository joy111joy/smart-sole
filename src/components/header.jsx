import 'primeicons/primeicons.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
        <h1>Smart Sole</h1>
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/men">Men's Products</Link></li>
            <li><Link to="/women">Women's Products</Link></li>
            </ul>
        </nav>

        <div id="Cart"><i className='pi pi-shopping-cart' style={{fontSize:"2rem"}}></i></div>
    </header>
  )
}

export default Header