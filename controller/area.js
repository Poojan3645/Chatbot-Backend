const Area = require("../Model/area");

exports.createArea = async (req, res) => {
  console.log(req.body);
  const { areaname, dealerId } = req.body;

  const Areas = new Area({
    areaname: areaname,
    dealerId: dealerId,
  });
  const result = await Areas.save();

  res.send(result);
};
exports.getArea = async (req, res) => {
  try {
    const result = await Area.find({});
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
exports.getAreaById = async (req, res) => {
  try {
    const { areaId } = req.body;
    const result = await Area.find({
      _id: { $in: areaId },
    });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
