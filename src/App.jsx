
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  // ... (Schema Markup code যা আগে দিয়েছিলাম সেটা এখানে থাকবে) ...

  return (
    <>
     

      {/* flex এবং min-h-screen ব্যবহার করা হয়েছে লেআউট ঠিক করার জন্য */}
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 font-sans">
         
         <Navbar />
         
         {/* <main> ট্যাগ এবং flex-grow ব্যবহার করায় এটি সব ফাঁকা জায়গা নিয়ে নেবে */}
         <main className="flex-grow">
           <Hero />
           <About />
           <Skills />
           <Projects />
           <Blog />
           <Contact />
         </main>

         {/* Footer সবসময় নিচে থাকবে */}
         <Footer />
      </div>
    </>
  );
};

export default App;