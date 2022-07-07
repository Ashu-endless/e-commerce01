import './App.css';
import Header from './components/Header';
import Home from './sections/Home';
import ShoppingCart from './sections/ShoppingCart';
import AboutUs from './sections/AboutUs';

import {
  Routes,
  Route,
} from "react-router-dom";
import ContactUs from './sections/ContactUs';
function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path="/e-commerce01/" element={<Home/>} />
      <Route path="/contact_us/" element={<ContactUs/>} />
      <Route path="/my_cart/" element={<ShoppingCart/>} />
      <Route path="/about_us/" element={<AboutUs/>} />
    </Routes>
    </div>
  );
}

export default App;
