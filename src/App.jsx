import './App.css';
import { Home } from './Home';
import { About } from './About';
import { Service } from './Service';
import { Contact } from './Contact';
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Footer from './Footer';

// In Latest version we have to replace Switch with Routes 
// exact is replaced with element 
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
       </Routes>
        <Footer/>
      </>
  );
}

export default App;
