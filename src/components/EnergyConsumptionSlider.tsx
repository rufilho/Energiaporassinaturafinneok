import React from 'react';

interface EnergyConsumptionSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const EnergyConsumptionSlider: React.FC<EnergyConsumptionSliderProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const getBackgroundSize = () => {
    const min = 50;
    const max = 1000;
    return { backgroundSize: `${((value - min) * 100) / (max - min)}% 100%` };
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium text-green-500">50 kWh</span>
        <span className="text-sm font-medium text-green-500">1000 kWh</span>
      </div>
      <input
        type="range"
        min="50"
        max="1000"
        step="10"
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-green-300 rounded-lg appearance-none cursor-pointer accent-green-400"
        style={{
          ...getBackgroundSize(),
          background: `linear-gradient(to right, #0c7450 0%, #04db73 ${((value - 50) * 100) / (1000 - 50)}%, #e5e7eb ${((value - 50) * 100) / (1000 - 50)}%, #e5e7eb 100%)`,
        }}
      />
      <div className="mt-1 text-center">
        <span className="text-2xl font-bold text-green-500">{value} kWh</span>
      </div>
    </div>
  );
};

export default EnergyConsumptionSlider;