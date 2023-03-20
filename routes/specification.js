const express = require("express");

const router = express("router");

const specificationController = require("../controller/specification");

router.post("/", specificationController.createSpecification);
router.get("/", specificationController.getSpecification);

module.exports = router;
