import React from 'react';
import { HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Como funciona a energia solar por assinatura?",
      answer: "A energia solar por assinatura permite que você utilize energia limpa sem instalar painéis solares. Você se conecta a uma fazenda solar e recebe os créditos de energia diretamente na sua conta."
    },
    {
      question: "Preciso fazer alguma instalação na minha casa?",
      answer: "Não! Não é necessária nenhuma instalação ou modificação na sua residência. Todo o processo é feito através da rede de distribuição existente."
    },
    {
      question: "Quanto tempo leva para começar a economizar?",
      answer: "Após a assinatura do contrato, o processo de ativação leva em média 45 a 60 dias. A partir daí, você já começa a receber os créditos de energia."
    },
    {
      question: "Existe fidelidade no contrato?",
      answer: "Nossos contratos são flexíveis e podem ser adaptados às suas necessidades. Geralmente, trabalhamos com períodos mínimos de 12 meses."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <HelpCircle className="text-[#00232b]" />
            <span className="text-[#00232b]">
              Dúvidas Frequentes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre energia solar por assinatura
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200 border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#00232b]">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;