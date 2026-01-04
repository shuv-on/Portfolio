import { Helmet } from 'react-helmet-async'; // এটা ইম্পোর্ট করুন
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  // Google Schema Markup (গুগলকে আপনার পরিচয় দেওয়ার জন্য)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Md Shishir Kaysar Shuvon",
    "alternateName": ["Shuvon", "Shishir Kaysar", "শিশির কায়সার শোভন", "শোভন"],
    "url": "https://shuvon-portfolio.web.app", // আপনার ডেপ্লয় করা লিংক এখানে দেবেন
    "sameAs": [
      "https://github.com/shuv-on",
      "https://linkedin.com/in/shishir-kaysar-shuvon",
      "https://x.com/_Shuvon",
      "https://facebook.com/yourprofile" // যদি থাকে
    ],
    "jobTitle": "Full Stack Web Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Self-Employed"
    },
    "description": "Md Shishir Kaysar Shuvon is a passionate Full Stack Web Developer based in Dhaka, Bangladesh, specializing in MERN Stack."
  };

  return (
    <>
      <Helmet>
        {/* --- Primary Meta Tags --- */}
        <title>Md Shishir Kaysar Shuvon | Full Stack Developer</title>
        <meta name="title" content="Md Shishir Kaysar Shuvon | Full Stack Developer" />
        <meta name="description" content="Portfolio of Md Shishir Kaysar Shuvon (Shuvon). A Full Stack Web Developer from Bangladesh specializing in React, Node.js, and modern web technologies." />
        
        {/* --- Keywords (আপনার কাঙ্ক্ষিত সার্চ কিওয়ার্ড) --- */}
        <meta name="keywords" content="shuvon, md shishir kaysar shuvon, md shishir kaysar, kaysar, shishir, শিশির কায়সার শোভন, শোভন, web developer bangladesh, react developer, full stack developer, software engineer dhaka" />
        
        {/* --- Author --- */}
        <meta name="author" content="Md Shishir Kaysar Shuvon" />

        {/* --- Open Graph / Facebook / LinkedIn (সোশ্যাল মিডিয়ায় শেয়ার করলে যা দেখাবে) --- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shuvon-portfolio.web.app" />
        <meta property="og:title" content="Md Shishir Kaysar Shuvon | Full Stack Developer" />
        <meta property="og:description" content="Hi, I'm Shuvon. Check out my portfolio to see my latest full-stack projects and skills." />
        <meta property="og:image" content="https://i.ibb.co/your-image-link.jpg" /> {/* আপনার একটি ভালো ছবির ডিরেক্ট লিংক এখানে দিলে শেয়ার প্রিভিউতে ছবি আসবে */}

        {/* --- Twitter --- */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://shuvon-portfolio.web.app" />
        <meta property="twitter:title" content="Md Shishir Kaysar Shuvon | Full Stack Developer" />
        <meta property="twitter:description" content="Portfolio of Md Shishir Kaysar Shuvon - Full Stack Web Developer." />
        
        {/* --- JSON-LD Schema (গুগল রোবটের জন্য) --- */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 font-sans">
         <Navbar />
         <main className="flex-grow">
           <Hero />
           <About />
           <Skills />
           <Projects />
           <Blog />
           <Contact />
         </main>
         <Footer />
      </div>
    </>
  );
};

export default App;