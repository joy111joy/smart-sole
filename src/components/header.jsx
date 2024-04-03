import 'primeicons/primeicons.css';

const header = () => {
  return (
    <header>
        <h1>Smart Sole</h1>
        <nav>
            <ul>
                <li>Home</li>
                <li>Womens</li>
                <li>Mens</li>
            </ul>
        </nav>

        <div id="Cart"><i className='pi pi-shopping-cart' style={{fontSize:"2rem"}}></i></div>
    </header>
  )
}

export default header