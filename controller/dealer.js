const Area = require("../Model/area");
const Dealer = require("../Model/dealer");

exports.createDealer = async (req, res) => {
  console.log(req.body);
  const { dealername, contactnumber, CarId, areaname } = req.body;

  const Dealers = new Dealer({
    dealername: dealername,

    contactnumber: contactnumber,

    // CarId: CarId,

    areaname: areaname,
  });
  const result = await Dealers.save();
  res.send(result);
};
exports.getDealer = async (req, res) => {
  try {
    const result = await Dealer.find({});
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
exports.getDealerById = async (req, res) => {
  try {
    const { dealerId } = req.body;
    const result = await Dealer.find({
      _id: { $in: dealerId },
    });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
