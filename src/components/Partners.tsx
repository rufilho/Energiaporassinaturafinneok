import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: "Anima Educação",
      logo: "https://i.imgur.com/LNwz6NO.png"
    },
    {
      name: "Infor Barra",
      logo: "https://i.imgur.com/Yw9Wg6i.png"
    },
    {
      name: "Supel",
      logo: "https://i.imgur.com/Up31eHv.png"
    },
    {
      name: "FHSS4",
      logo: "https://i.imgur.com/CSYJIVi.png"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#00232b]">
          Empresas que confiam na Finne
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="w-full max-w-[200px] h-24 flex items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;