const express = require("express");

const router = express("Router");

const areaController = require("../controller/area");

router.post("/", areaController.createArea);
router.get("/", areaController.getArea);
router.post("/areaById", areaController.getAreaById);

module.exports = router;
