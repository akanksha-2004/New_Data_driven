// frontend/src/App.js
import "./App.css";
import React, { useState } from "react";
import UploadCSV from "./components/UploadCSV";
import PricingCalculator from "./components/PricingCalculator";

function App() {
  const [csvData, setCSVData] = useState(null);

  const handleUpload = (data) => {
    setCSVData(data);
  };

  return (
    <div>
      <h1>CSV Upload</h1>
      <UploadCSV onUpload={handleUpload} />
      <hr />
      {csvData && (
        <>
          <h2>CSV Data</h2>
          <pre>{JSON.stringify(csvData, null, 2)}</pre>
        </>
      )}
      <hr />
      <h2>Subscription Pricing Calculator</h2>
      <PricingCalculator />
    </div>
  );
}

export default App;
