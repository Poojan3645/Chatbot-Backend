const express = require("express");

const router = express("router");

const companyController = require("../controller/company");

router.post("/", companyController.createCompany);
router.get("/", companyController.getCompany);
router.post("/getCompanyUpdate", companyController.getUpdatecompany);
module.exports = router;
