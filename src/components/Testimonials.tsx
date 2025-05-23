import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      text: "Recomendo a todos! Além da economia mensal, é gratificante saber que estamos contribuindo para um futuro mais sustentável.",
      author: "João Filho",
      location: "Caetite, BA",
      role: "Gestor",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      text: "Economizei 23% na minha conta no primeiro mês! O processo foi super simples e a equipe da Finne me ajudou em todas as etapas.",
      author: "Mariana Silva",
      location: "São Paulo, SP",
      role: "Proprietária de Restaurante",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    },
    {
      text: "Sempre quis contribuir com o meio ambiente, mas instalar painéis solares no meu apartamento não era uma opção. A Finne trouxe a solução perfeita!",
      author: "Carlos Eduardo",
      location: "Belo Horizonte, MG",
      role: "Empresário",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      text: "Além da economia na conta de luz, me sinto bem em saber que estou usando energia limpa. O app é muito intuitivo e mostra exatamente quanto estou economizando.",
      author: "Patricia Santos",
      location: "Curitiba, PR",
      role: "Professora",
      image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg"
    },
    {
      text: "Processo muito transparente e profissional. A economia na conta de luz é real e o suporte da Finne é excelente!",
      author: "Roberto Almeida",
      location: "Salvador, BA",
      role: "Comerciante",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#00232b]">
            O que dizem sobre a Finne
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos clientes estão falando sobre a experiência com energia solar por assinatura
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden pb-8 hide-scrollbar"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={index}
                className="w-[350px] flex-shrink-0 bg-gradient-to-br from-gray-50 to-gray-100 p-1 rounded-2xl transform transition-all duration-300 hover:scale-105 border border-[#00232b]"
              >
                <div className="bg-white p-6 rounded-xl h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#00232b]"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-[#00232b] mb-4" />
                  <p className="text-gray-700 flex-grow">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full border border-[#00232b]">
            <span className="text-[#00232b] font-medium">Junte-se a mais de 1000 clientes satisfeitos</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;