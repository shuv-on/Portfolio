import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// 1. এটা ইম্পোর্ট করুন
import { HelmetProvider } from 'react-helmet-async';

// 2. সেফটির জন্য একটা কনটেক্সট অবজেক্ট তৈরি করুন (React 19 এ এরর এড়াতে)
const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 3. HelmetProvider দিয়ে পুরো অ্যাপ র‍্যাপ করুন এবং context পাস করুন */}
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)