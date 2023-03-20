const express = require("express");

const router = express("router");

const FAQController = require("../controller/FAQ");

router.post("/", FAQController.createFAQ);
router.get("/", FAQController.getFAQ);

module.exports = router;
