import './App.css';
import { Hero } from './Components/Hero';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from "./Components/Skills";
import { Footer } from './Components/Footer';
import Work from './Components/Work';



function App() {
  return (
    <main id="home" className="text-white bg-gray-800">
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Skills />
      <Projects />
      <hr className="opacity-30" />
      <Contact />
      <Footer />
     
    </main>
  );
}

export default App;
