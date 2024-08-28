const express = require("express");
const cors = require("cors");
require("dotenv").config();

const paymentRoutes = require("./routes/payment");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Payment Routes
app.use("/api/payment", paymentRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
