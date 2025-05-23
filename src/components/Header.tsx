import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappLink = "https://api.whatsapp.com/send?phone=557799423049&text=Ol%C3%A1!%20Desejo%20saber%20mais%20sobre%20a%20economia%20da%20FinneBr!";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://i.imgur.com/j1DZXRg.png" 
              alt="Finne Logo"
              className="h-8 w-auto"
            /> 
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('beneficios')} 
              className="font-medium text-gray-700 hover:text-[#00232b] transition-colors"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollToSection('beneficios')} 
              className="font-medium text-gray-700 hover:text-[#00232b] transition-colors"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('calculadora')} 
              className="font-medium text-gray-700 hover:text-[#00232b] transition-colors"
            >
              Calcule sua Economia
            </button>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-gray-700 hover:text-[#00232b] transition-colors"
            >
              Contato
            </a>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#00232b] text-white px-5 py-2 rounded-full hover:bg-[#003444] transition-colors"
            >
              Economize agora
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-2 border-t">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('beneficios')}
                className="font-medium py-2 text-gray-700 hover:text-[#00232b] transition-colors"
              >
                Como Funciona
              </button>
              <button 
                onClick={() => scrollToSection('beneficios')}
                className="font-medium py-2 text-gray-700 hover:text-[#00232b] transition-colors"
              >
                Benefícios
              </button>
              <button 
                onClick={() => scrollToSection('calculadora')}
                className="font-medium py-2 text-gray-700 hover:text-[#00232b] transition-colors"
              >
                Calcule sua Economia
              </button>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium py-2 text-gray-700 hover:text-[#00232b] transition-colors"
              >
                Contato
              </a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00232b] text-white w-full px-5 py-2 rounded-full hover:bg-[#003444] transition-colors text-center"
              >
                Fale Conosco
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;