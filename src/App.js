import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from './components/footer';
import Experience from './pages/experience';
import About from './pages/about';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router className="App">
            <Navbar />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/portfolio" element={<Portfolio />} />
           <Route path="/experience" element={<Experience />} />
           <Route path="/contact" element={<Contact />} />
         </Routes>
          <Footer />
    </Router>
  );
}

export default App;
