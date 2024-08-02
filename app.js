const express = require("express");
const app = express();
const xlsx = require("xlsx");

const wb = xlsx.readFile(
  "C:\\Users\\Lenovo\\Desktop\\Training Web0\\2024731\\employees.xlsx"
);
const sheetName = wb.SheetNames[0]; // Assuming 'Sheet1' is the first sheet
const ws = wb.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(ws);
// console.log(data);

app.use("/epmloyees_info", (req, res) => {
  res.send(data);
});
app.listen(3000);
