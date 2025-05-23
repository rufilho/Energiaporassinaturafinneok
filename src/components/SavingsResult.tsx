import React from 'react';
import { ArrowLeft, CheckCircle, Star, Trophy, Award } from 'lucide-react';

interface SavingsResultProps {
  consumption: number;
  monthlyBill: number;
  savings: {
    plans: {
      basic: {
        percentage: number;
        monthly: number;
        annual: number;
      };
      intermediate: {
        percentage: number;
        monthly: number;
        annual: number;
      };
      premium: {
        percentage: number;
        monthly: number;
        annual: number;
      };
    };
  };
  onReset: () => void;
}

const SavingsResult: React.FC<SavingsResultProps> = ({
  consumption,
  monthlyBill,
  savings,
  onReset
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center text-finne-green mb-6">
        <Trophy className="h-12 w-12" />
      </div>

      <h3 className="text-xl font-semibold text-center mb-6 text-finne-green">
        Escolha o melhor plano para você!
      </h3>

      <div className="space-y-4">
        <div className="bg-finne-dark/50 border border-finne-green/20 p-4 rounded-lg">
          <div className="flex justify-between mb-2">
            <span className="text-finne-green">Consumo Atual:</span>
            <span className="font-semibold text-finne-green">{consumption} kWh</span>
          </div>
          <div className="flex justify-between">
            <span className="text-finne-green">Valor Atual da Conta:</span>
            <span className="font-semibold text-finne-green">
              R$ {monthlyBill.toFixed(2).replace('.', ',')}
            </span>
          </div>
        </div>

        {/* Plano Básico */}
        <div className="bg-finne-dark/30 p-4 rounded-lg border border-finne-green/10 transition-all hover:border-finne-green/30">
          <div className="flex items-center gap-2 mb-2">
            <Star className="h-5 w-5 text-finne-green" />
            <h4 className="text-lg font-semibold text-finne-green">Plano Básico</h4>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-300">Economia:</span>
              <span className="font-semibold text-finne-green">{savings.plans.basic.percentage}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Economia Mensal:</span>
              <span className="font-semibold text-finne-green">
                R$ {savings.plans.basic.monthly.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Economia Anual:</span>
              <span className="font-semibold text-finne-green">
                R$ {savings.plans.basic.annual.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>
          <a
            href="https://wa.me/5577998508377?text=Olá%2C%20desejo%20saber%20mais%20sobre%20a%20energia%20por%20assinatura%20da%20Finne%20com%2015%25%20de%20desconto!"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full mt-4 text-center bg-finne-green text-finne-dark py-3 rounded-lg font-semibold hover:bg-finne-green-light transition-colors"
          >
            Escolher Plano Básico
          </a>
        </div>

        {/* Plano Intermediário */}
        <div className="bg-finne-dark/30 p-4 rounded-lg border border-finne-green/10 transition-all hover:border-finne-green/30">
          <div className="flex items-center gap-2 mb-2">
            <Award className="h-5 w-5 text-finne-green" />
            <h4 className="text-lg font-semibold text-finne-green">Plano Intermediário</h4>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-300">Economia:</span>
              <span className="font-semibold text-finne-green">{savings.plans.intermediate.percentage}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Economia Mensal:</span>
              <span className="font-semibold text-finne-green">
                R$ {savings.plans.intermediate.monthly.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Economia Anual:</span>
              <span className="font-semibold text-finne-green">
                R$ {savings.plans.intermediate.annual.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>
          <a
            href="https://wa.me/5577998508377?text=Olá%2C%20desejo%20saber%20mais%20sobre%20a%20energia%20por%20assinatura%20da%20Finne%20com%2020%25%20de%20desconto!"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full mt-4 text-center bg-finne-green text-finne-dark py-3 rounded-lg font-semibold hover:bg-finne-green-light transition-colors"
          >
            Escolher Plano Intermediário
          </a>
        </div>

        {/* Plano Premium */}
        <div className="bg-finne-dark/20 p-6 rounded-lg border-2 border-finne-green transition-all hover:border-finne-green relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-finne-green text-finne-dark px-4 py-1 text-sm font-semibold transform translate-x-8 translate-y-4 rotate-45">
            MELHOR OPÇÃO
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="h-6 w-6 text-finne-green" />
            <h4 className="text-xl font-semibold text-finne-green">Plano Premium</h4>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-300">Economia:</span>
              <span className="font-semibold text-finne-green text-lg">{savings.plans.premium.percentage}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Economia Mensal:</span>
              <span className="font-semibold text-finne-green text-lg">
                R$ {savings.plans.premium.monthly.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Economia Anual:</span>
              <span className="font-semibold text-finne-green text-lg">
                R$ {savings.plans.premium.annual.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>
          <a
            href="https://wa.me/5577998508377?text=Olá%2C%20desejo%20saber%20mais%20sobre%20a%20energia%20por%20assinatura%20da%20Finne%20com%2025%25%20de%20desconto!"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full mt-4 text-center bg-finne-green text-finne-dark py-3 rounded-lg font-semibold hover:bg-finne-green-light transition-colors"
          >
            Escolher Plano Premium
          </a>
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={onReset}
          className="w-full py-3 px-4 rounded-lg bg-finne-dark/50 hover:bg-finne-dark/70 transition-colors flex items-center justify-center gap-2 text-gray-300 font-medium border border-finne-green/20"
        >
          <ArrowLeft size={18} />
          Calcular novamente
        </button>
      </div>
    </div>
  );
};

export default SavingsResult;