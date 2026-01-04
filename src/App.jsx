import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"; 
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-light dark:bg-dark min-h-screen text-gray-900 dark:text-white transition-colors duration-300 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About /> 
        <Skills/>
        <Projects/>
        <Blog/>
        <Contact/>
        
        <div className="h-[50vh]"></div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;