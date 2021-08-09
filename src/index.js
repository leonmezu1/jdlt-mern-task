const express = require("express");
const connectDB = require("./config/db");

connectDB();

const app = express();

const PORT = process.env.PORT || 4000;

app.use("/api/users", require("./routes/users"));

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.listen(PORT, () => {
  console.log(`Server is working in port: ${PORT}`);
});
