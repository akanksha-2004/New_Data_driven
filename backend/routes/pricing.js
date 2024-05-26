// backend/routes/pricing.js

const express = require("express");
const router = express.Router();

router.post("/calculate", (req, res) => {
  const { creditScore, creditLines } = req.body;
  const basePrice = 50; // Example base price
  const pricePerCreditLine = 10; // Example price per credit line
  const pricePerCreditScorePoint = 2; // Example price per credit score point

  const subscriptionPrice =
    basePrice +
    pricePerCreditLine * creditLines +
    pricePerCreditScorePoint * creditScore;

  res.json({ subscriptionPrice });
});

module.exports = router;
