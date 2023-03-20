const express = require("express");

const router = express("router");

const dealerController = require("../controller/dealer");

router.post("/", dealerController.createDealer);
router.get("/", dealerController.getDealer);
router.post("/dealerById", dealerController.getDealerById);
module.exports = router;
