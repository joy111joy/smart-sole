import './App.css';
import Home from './components/home.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Productlistmen from './components/productlistmen.jsx';
import Productlistwomen from './components/productlistwomen.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/men" element={<Productlistmen />} />
          <Route path="/women" element={<Productlistwomen />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
