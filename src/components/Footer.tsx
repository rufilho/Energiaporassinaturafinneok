import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="https://i.imgur.com/j1DZXRg.png" 
                alt="Finne Logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-600">
              Sua energia, sua escolha.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#00232b]">Navegação</h3>
            <ul className="space-y-2">
              <li><a href="#como-funciona" className="text-gray-600 hover:text-[#00232b]">Como Funciona</a></li>
              <li><a href="#beneficios" className="text-gray-600 hover:text-[#00232b]">Benefícios</a></li>
              <li><a href="#calculadora" className="text-gray-600 hover:text-[#00232b]">Calculadora</a></li>
              <li><a href="#contato" className="text-gray-600 hover:text-[#00232b]">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#00232b]">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">contato@finnebr.com.br</li>
              <li className="text-gray-600">(77) 9.9850-8377</li>
              <li className="text-gray-600">Caetité, BA</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#00232b]">Redes Sociais</h3>
            <ul className="space-y-2">
              <li><a href="https://instagram.com/finnebr" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#00232b]">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#00232b]">LinkedIn</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#00232b]">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Finne Energia. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-600 hover:text-[#00232b]">Política de Privacidade</a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#00232b]">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;