const path = require("path");

const express = require("express");

const router = express.Router();

const adminController = require("../controller/admin");

router.get("/", adminController.getCarname);

router.get("/demo", adminController.demo);

module.exports = router;
