const express = require("express");

const router = express("Router");

const carController = require("../controller/car");

router.post("/", carController.createCars);
router.get("/", carController.getCars);
router.post("/CarByCompany", carController.getCarByCompanyId);
router.post("/findCarByPrice", carController.findCars);
router.put("/getCarUpdate", carController.getUpdateCar);
router.delete("/deletecar", carController.getDeleteCar);
module.exports = router;
