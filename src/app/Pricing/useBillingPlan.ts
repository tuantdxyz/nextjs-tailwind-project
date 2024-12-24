import { useState } from 'react';

export const useBillingPlan = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const toggleBillingPlan = () => {
    setIsAnnual(prev => !prev);
  };

  return { isAnnual, toggleBillingPlan };
};