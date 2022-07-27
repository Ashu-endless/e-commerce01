import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './sections/Home';
import ShoppingCart from './sections/ShoppingCart';
import AboutUs from './sections/AboutUs';
import ViewProduct from './components/ViewProduct';
import UserProfile from './sections/UserProfile';
import {
  Routes,
  Route,
} from "react-router-dom";
import ContactUs from './sections/ContactUs';
import SearchBar from './components/SearchBar';
import SearchResult from './sections/SearchResult';
function App() {
  return (
    <div className="App">
     <Header />
     <SearchBar styleattr="mobile-searchdiv" />
     <Routes>
      <Route path="/e-commerce01/" element={<Home/>} />
      <Route path="/profile" element={<UserProfile/>} />
      <Route path="/contact_us/" element={<ContactUs/>} />
      <Route path="/my_cart/" element={<ShoppingCart/>} />
      <Route path="/about_us/" element={<AboutUs/>} />
      <Route path="/search=:slug/" element={<SearchResult/>} />
      <Route path="/view_product=:slug/" element={<ViewProduct/>} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
