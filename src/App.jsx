import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"; 
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-light dark:bg-dark min-h-screen text-gray-900 dark:text-white transition-colors duration-300 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About /> 
        <Skills/>
        <div className="h-[50vh]"></div>
      </main>
    </div>
  );
}

export default App;