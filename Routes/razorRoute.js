const express = require("express");
const { Payment, validatePayment } = require("../Controllers/razorController");


const router = express.Router();

router.post("/order", Payment);

router.post("/order/validate", validatePayment); 

module.exports = router;
