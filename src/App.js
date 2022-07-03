import './App.css';
import Header from './components/Header';
import Home from './sections/Home';
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
      <Route path="/" element={<Home/>} />
      <Route path="contact_us" element={<ContactUs/>} />
    </Routes>
    </div>
  );
}

export default App;
