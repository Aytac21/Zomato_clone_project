const express = require("express");
const app = express();
const port = 8000;

const jsonData = require("./delivery.json"); // "./" ile dosyanın adını belirtin

// Endpoint to get the JSON data
app.get("/api/foods", (req, res) => {
  res.json(jsonData.food);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
