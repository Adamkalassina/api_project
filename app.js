const express = require("express");
const app = express();
const xlsx = require("xlsx");
const cors = require("cors");
const wb = xlsx.readFile("employees.xlsx");
const sheetName = wb.SheetNames[0]; // Assuming 'Sheet1' is the first sheet
const ws = wb.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(ws);

const PORT = process.env.PORT || 3030;

// your code
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

app.use(cors());
app.use("/epmloyees_info", (req, res) => {
  // res.send(data);
  res.send("Hello");
});
