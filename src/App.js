import './App.css';
import Home from './components/home.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Productlist from './components/productlistmen.jsx';
function App() {
  return (
    <div>
      <Header />
      <div>
        <Productlist />
      </div>
      <Footer />



    </div>
  );
}

export default App;
