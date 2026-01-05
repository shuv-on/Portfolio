import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Linkedin, Github, Twitter, MessageCircle, ExternalLink } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const myEmail = "mdshishirkaysarshuvon.ict.mbstu@gmail.com"; 
  const myPhone = "+8801788297749"; // ⚠️ তোমার আসল নাম্বার

  // 🔥 Smart Email Handler Function
  const handleEmailClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;

    if (isMobile) {
      // Mobile: Open Default Email App (usually Gmail on Android)
      window.location.href = `mailto:${myEmail}`;
    } else {
      // Desktop: Open Gmail Web Composer directly
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}`, '_blank');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate sending (replace with EmailJS later if needed)
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSent(false), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact <span className="text-gradient-animate font-extrabold">Info</span>
          </h2>
          <div className="w-20 h-1 btn-gradient-animate mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>

            {/* Email Card (Updated) */}
            <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
               <div className="flex items-center gap-4">
                  <div className="p-3 bg-white dark:bg-gray-700 rounded-full text-purple-600 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-gray-900 dark:text-white font-medium break-all text-sm md:text-base">
                        {myEmail}
                    </p>
                  </div>
                  
                  {/* 👇 New Email Button Logic */}
                  <button 
                    onClick={handleEmailClick} 
                    className="p-3 bg-white dark:bg-gray-700 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all shadow-sm hover:scale-110"
                    title="Send Email"
                  >
                    <ExternalLink size={20} />
                  </button>
               </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
               <div className="flex items-center gap-4">
                  <div className="p-3 bg-white dark:bg-gray-700 rounded-full text-blue-600 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="text-gray-900 dark:text-white font-medium">{myPhone}</p>
                  </div>
                  {/* WhatsApp Button */}
                  <a 
                    href={`https://wa.me/${myPhone.replace(/[^0-9]/g, '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-green-500 hover:scale-110 transition-transform"
                    title="Chat on WhatsApp"
                  >
                    <MessageCircle size={28} />
                  </a>
               </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 p-2">
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-full text-red-500">
                    <MapPin size={24} />
                </div>
                <span className="font-medium">Tangail, Dhaka, Bangladesh</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
                {[
                { icon: Github, link: "https://github.com/shuv-on", color: "hover:text-gray-900 dark:hover:text-white" },
                { icon: Linkedin, link: "https://linkedin.com/in/shishir-kaysar-shuvon", color: "hover:text-blue-600" },
                { icon: Twitter, link: "https://x.com/_Shuvon", color: "hover:text-sky-500" }
                ].map((social, idx) => (
                <a 
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-50 dark:bg-gray-800 rounded-full text-gray-500 dark:text-gray-400 transition-all hover:scale-110 shadow-sm ${social.color}`}
                >
                    <social.icon size={22} />
                </a>
                ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 focus:border-purple-500 outline-none dark:text-white" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 focus:border-purple-500 outline-none dark:text-white" placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea name="message" required rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 focus:border-purple-500 outline-none resize-none dark:text-white" placeholder="Your Message..."></textarea>
              </div>
              <button type="submit" disabled={isSending || isSent} className="w-full py-4 rounded-xl text-white font-bold text-lg btn-gradient-animate shadow-lg hover:opacity-90 flex items-center justify-center gap-2">
                {isSending ? "Sending..." : isSent ? <>Sent <span className="text-xl">✅</span></> : <>Send Message <Send size={20} /></>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;