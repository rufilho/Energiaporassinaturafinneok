import React, { useState } from 'react';
import { Send } from 'lucide-react';

const LeadForm: React.FC = () => {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const whatsappLink = "https://api.whatsapp.com/send?phone=557799423049&text=Ol%C3%A1!%20Desejo%20saber%20mais%20sobre%20a%20economia%20da%20FinneBr!";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Cria o contato
      const contatoResponse = await fetch("https://saman.bitrix24.com.br/rest/3869/3a4gtpmrdcmnaunp/crm.contact.add.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: {
            NAME: form.nome,
            PHONE: [{ VALUE: form.telefone, VALUE_TYPE: "WORK" }],
            EMAIL: [{ VALUE: form.email, VALUE_TYPE: "WORK" }]
          }
        })
      });

      const contatoData = await contatoResponse.json();
      const contatoID = contatoData.result;

      if (!contatoID) {
        alert("Erro ao criar o contato no Bitrix.");
        console.error("Contato não criado:", contatoData);
        setIsSubmitting(false);
        return;
      }

      // 2. Cria o negócio vinculado ao contato
      const negocioResponse = await fetch("https://saman.bitrix24.com.br/rest/3869/3a4gtpmrdcmnaunp/crm.deal.add.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: {
            TITLE: `Lead Finne - ${form.nome}`,
            CATEGORY_ID: 39,
            STAGE_ID: "C39:NEW",
            SOURCE_ID: "WEB",
            CONTACT_ID: contatoID,

            // Campos personalizados (do negócio)
            title_text: form.nome,
            ContactEmail: form.email,
  
          }
        })
      });

      const negocioData = await negocioResponse.json();

      if (negocioData.result) {
        console.log("✅ Negócio criado com sucesso:", negocioData.result);
        setForm({ nome: '', email: '', telefone: '' });
        window.location.href = whatsappLink;
      } else {
        alert("Erro ao criar o negócio no Bitrix.");
        console.error("Erro ao criar negócio:", negocioData);
      }

    } catch (error) {
      alert("Erro na comunicação com o Bitrix.");
      console.error("Erro:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2 text-white">
          Fale com um especialista
        </h2>
        <p className="text-sm text-gray-200">
          Deixe seus dados que entraremos em contato:
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-200 mb-1">
            Nome completo
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome"
            value={form.nome}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm"
          />
        </div>

        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-200 mb-1">
            Telefone
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            placeholder="(00) 00000-0000"
            value={form.telefone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-lg text-gray-900 font-medium flex items-center justify-center gap-2 transition-all ${
            isSubmitting 
              ? 'bg-green-400 cursor-not-allowed' 
              : 'bg-green-500 hover:bg-green-400 transform hover:-translate-y-1'
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </>
          ) : (
            <>
              Falar com um consultor
              <Send size={16} />
            </>
          )}
        </button>

        <p className="text-xs text-gray-300 text-center">
          Ao enviar, você concorda em receber comunicações da Finne
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
