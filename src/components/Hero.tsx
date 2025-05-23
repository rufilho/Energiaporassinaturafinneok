import React from 'react';
import { ArrowRight } from 'lucide-react';
import LeadForm from './LeadForm';

const Hero: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=557799423049&text=Ol%C3%A1!%20Desejo%20saber%20mais%20sobre%20a%20economia%20da%20FinneBr!";

  const scrollToCalculator = () => {
    const calculator = document.getElementById('calculadora');
    if (calculator) {
      calculator.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
              Energia Solar por{' '}
              <span className="text-[#22c55e] block mt-2">
                Assinatura
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed max-w-lg">
              Economize até <span className="text-white font-semibold">25%</span> na sua conta de luz sem investimento inicial.
              Energia limpa e sustentável para sua empresa.
            </p>
            
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                <p className="text-2xl font-bold text-white mb-1">0</p>
                <p className="text-xs md:text-sm text-gray-200">Investimento Inicial</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                <p className="text-2xl font-bold text-white mb-1">25%</p>
                <p className="text-xs md:text-sm text-gray-200">Economia Garantida</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                <p className="text-2xl font-bold text-white mb-1">100%</p>
                <p className="text-xs md:text-sm text-gray-200">Energia Limpa</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={scrollToCalculator}
                className="bg-white text-[#00232b] px-6 py-3 rounded-full hover:bg-gray-100 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-base font-medium group w-full sm:w-auto"
              >
                Calcule sua Economia
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white border-2 border-white/20 px-6 py-3 rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2 text-base font-medium w-full sm:w-auto"
              >
                Fale com um Consultor
              </a>
            </div>
          </div>
          
          <div className="mt-8 lg:mt-0">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;