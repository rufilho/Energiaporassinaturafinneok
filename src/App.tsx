import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Calculator from './components/Calculator';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Partners from './components/Partners';

function App() {
  return (
    <div className="font-sans antialiased">
      <div className="fixed inset-0 w-full h-full z-0 bg-[#00232b]">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="absolute inset-0 animate-pulse">
          <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent blur-2xl transform rotate-45" />
          <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent blur-2xl transform -rotate-45" />
        </div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        
        <div className="bg-white">
          <main>
            <Calculator />
            <Benefits />
            <Partners />
            <Testimonials />
            <FAQ />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;