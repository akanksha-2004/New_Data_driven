// frontend/src/components/PricingCalculator.js

import React, { useState } from "react";

const PricingCalculator = () => {
  const [creditScore, setCreditScore] = useState(0);
  const [creditLines, setCreditLines] = useState(0);
  const [subscriptionPrice, setSubscriptionPrice] = useState(null);

  const handleCalculate = async () => {
    try {
      const response = await fetch("/pricing/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ creditScore, creditLines }),
      });
      const data = await response.json();
      setSubscriptionPrice(data.subscriptionPrice);
    } catch (error) {
      console.error("Error calculating subscription price:", error);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={creditScore}
        onChange={(e) => setCreditScore(e.target.value)}
      />
      <input
        type="number"
        value={creditLines}
        onChange={(e) => setCreditLines(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate Price</button>
      {subscriptionPrice && <p>Subscription Price: ${subscriptionPrice}</p>}
    </div>
  );
};

export default PricingCalculator;
