interface SavingsResult {
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
}

export const calculateSavings = (consumption: number, monthlyBill: number): SavingsResult => {
  const calculatePlanSavings = (discountPercentage: number) => {
    const monthlySavings = monthlyBill * (discountPercentage / 100);
    return {
      percentage: discountPercentage,
      monthly: monthlySavings,
      annual: monthlySavings * 12
    };
  };

  return {
    plans: {
      basic: calculatePlanSavings(15),
      intermediate: calculatePlanSavings(20),
      premium: calculatePlanSavings(25)
    }
  };
};