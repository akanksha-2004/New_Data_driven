// backend/routes/upload.js

const express = require("express");
const multer = require("multer");
const csvParser = require("csv-parser");
const fs = require("fs");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("csv"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const results = [];
  fs.createReadStream(req.file.path)
    .pipe(csvParser())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      fs.unlinkSync(req.file.path); // Delete the temporary file
      res.json({ message: "CSV uploaded successfully", data: results });
    });
});

module.exports = router;
