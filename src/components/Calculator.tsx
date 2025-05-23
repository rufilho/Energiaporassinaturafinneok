import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, Zap, ArrowRight } from 'lucide-react';
import { calculateSavings } from '../utils/calculatorUtils';
import EnergyConsumptionSlider from './EnergyConsumptionSlider';
import SavingsResult from './SavingsResult';

const Calculator: React.FC = () => {
  const [consumption, setConsumption] = useState<number>(200);
  const [monthlyBill, setMonthlyBill] = useState<number>(0);
  const [savings, setSavings] = useState<{monthly: number, annual: number}>({ monthly: 0, annual: 0 });
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  useEffect(() => {
    setMonthlyBill(consumption * 0.85);
  }, [consumption]);

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateSavings(consumption, monthlyBill);
      setSavings(result);
      setShowResult(true);
      setIsCalculating(false);
    }, 1000);
  };

  const resetCalculator = () => {
    setShowResult(false);
  };

  return (
    <section id="calculadora" className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-[#00232b] border border-white/20 rounded-2xl p-8 backdrop-blur-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Calcule sua economia
            </h2>
            <p className="text-gray-300">
              Descubra quanto você pode economizar com energia solar
            </p>
          </div>
          
          <div className="space-y-6">
            {!showResult ? (
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-white mb-4">
                  <Zap className="h-6 w-6" />
                  <h3 className="text-xl font-semibold">
                    Informe seu consumo mensal
                  </h3>
                </div>
                
                <EnergyConsumptionSlider 
                  value={consumption}
                  onChange={setConsumption}
                />
                
                <div className="bg-white/5 border border-white/20 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Consumo Mensal:</span>
                    <span className="text-white font-semibold">{consumption} kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Valor Estimado da Conta:</span>
                    <span className="text-white font-semibold">
                      R$ {monthlyBill.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={handleCalculate}
                  disabled={isCalculating}
                  className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 text-[#00232b] font-medium transition-all ${
                    isCalculating 
                      ? 'bg-white/50 cursor-not-allowed' 
                      : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  {isCalculating ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Calculando...
                    </>
                  ) : (
                    <>
                      Calcular minha economia <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </div>
            ) : (
              <SavingsResult
                consumption={consumption}
                monthlyBill={monthlyBill}
                savings={savings}
                onReset={resetCalculator}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;