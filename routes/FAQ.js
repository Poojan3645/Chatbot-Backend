const express = require("express");

const router = express("router");

const FAQController = require("../controller/FAQ");

router.post("/", FAQController.createFAQ);
router.get("/", FAQController.getFAQ);
router.put("/getFAQUpdate", FAQController.getUpdateFAQ);

module.exports = router;
