import React from 'react';
import { Leaf, Wallet, Sun, BarChart, Shield, Clock } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Wallet className="h-12 w-12 text-[#00232b]" />,
      title: 'Economia Garantida',
      description: 'Reduza sua conta de luz em até 20% sem nenhum investimento inicial.',
    },
    {
      icon: <Leaf className="h-12 w-12 text-[#00232b]" />,
      title: 'Energia Sustentável',
      description: 'Contribua para o meio ambiente usando energia 100% limpa e renovável.',
    },
    {
      icon: <Sun className="h-12 w-12 text-[#00232b]" />,
      title: 'Sem Instalação',
      description: 'Não é necessário instalar painéis solares em sua residência ou empresa.',
    },
    {
      icon: <BarChart className="h-12 w-12 text-[#00232b]" />,
      title: 'Monitoramento Simples',
      description: 'Acompanhe seu consumo e economia através de um app intuitivo.',
    },
    {
      icon: <Shield className="h-12 w-12 text-[#00232b]" />,
      title: 'Sem Riscos',
      description: 'Não há preocupações com manutenção ou eficiência dos painéis.',
    },
    {
      icon: <Clock className="h-12 w-12 text-[#00232b]" />,
      title: 'Contrato Flexível',
      description: 'Planos que se adaptam às suas necessidades, sem multas complicadas.',
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#00232b]">
            Por que escolher a Finne?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Finne oferece uma solução simples e eficiente para você economizar na conta de luz enquanto ajuda o planeta.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#00232b]">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#home" 
            className="inline-block bg-[#00232b] text-white px-8 py-4 rounded-full hover:bg-[#003444] transition-all transform hover:-translate-y-1 text-lg font-medium"
          >
            Calcule sua Economia
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;