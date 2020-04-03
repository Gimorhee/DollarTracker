const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
const transactions = require("./routes/transactions");

// BODY PARSER
app.use(express.json());

app.use("/api/transactions", transactions);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("dollar-tracker/build"));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "dollar-tracker", "build", "index.html")
    )
  );
}

app.listen(PORT, () => {
  console.log(
    `Server is running on Port ${PORT} in ${process.env.NODE_ENV} mode.`
  );
});
