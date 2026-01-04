import { Link } from "react-scroll";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/shuv-on" },
    { icon: Linkedin, href: "https://linkedin.com/in/shishir-kaysar-shuvon" },
    { icon: Twitter, href: "https://x.com/_Shuvon" },
    { icon: Mail, href: "mailto:mdshishirkaysarshuvon.ict.mbstu@gmail.com" },
  ];

  const quickLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-950 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* 1. Brand & Description */}
          <div className="space-y-4">
            <Link 
              to="home" 
              smooth={true} 
              duration={500} 
              className="group flex items-center gap-0.5 text-2xl font-bold font-mono tracking-tighter cursor-pointer w-fit"
            >
              <span className="text-gradient-animate transition-transform duration-300 group-hover:-translate-x-1 group-hover:rotate-12 font-extrabold">&lt;</span>
              <span className="text-gradient-animate font-extrabold mx-0.5">Shuvon</span>
              <span className="text-gradient-animate transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-12 font-extrabold">/&gt;</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              Building digital experiences with code and creativity. Let's create something amazing together.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 cursor-pointer transition-colors text-sm font-medium flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-sky-600 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Socials */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-900 rounded-full text-gray-500 dark:text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Shishir Kaysar Shuvon. All rights reserved.
          </p>
          
          <div className="flex items-center gap-1">
            Made with <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" /> using React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;