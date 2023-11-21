import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Project from "./pages/project";
import Experience from "./pages/experience";
import Home from "./pages/home";
import Footer from './components/footer';
import ProjectDisplay from './pages/projectDisplay';

function App() {
  return (
    <Router className="App">
          <Navbar />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/projects" element={<Project />} />
           <Route path="project/:id" element={<ProjectDisplay />} />
           <Route path="/experience" element={<Experience />} />
         </Routes>
          <Footer />
    </Router>
  );
}

export default App;
