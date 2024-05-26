// backend/app.js

const express = require("express");
const uploadRoute = require("./routes/upload");
const pricingRoute = require("./routes/pricing");

const app = express();

app.use(express.json());
app.use("/upload", uploadRoute);
app.use("/pricing", pricingRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
