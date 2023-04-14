const Area = require("../Model/area");
const Dealer = require("../Model/dealer");

exports.createDealer = async (req, res) => {
  console.log(req.body);
  const { dealername, contactnumber, areaname, companyId } = req.body;

  const Dealers = new Dealer({
    dealername: dealername,

    contactnumber: contactnumber,

    // CarId: CarId,

    areaname: areaname,

    companyId: companyId,
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
    const { dealerId, companyId } = req.body;
    const result = await Dealer.find({
      _id: { $in: dealerId },
      companyId,
    });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
exports.getUpdateDealer = async (req, res) => {
  console.log("done");
  try {
    const { dealername, contactnumber, areaname, companyId } = req.body;

    const _id = req.params.id;
    const updatedResult = await Dealer.findOneAndUpdate(
      { _id: "64130bb759bb548170b15e80" },
      {
        $set: {
          dealername,
          contactnumber,
          areaname,
          companyId,
        },
      },
      { new: true }
    );
    console.log("data was updated", updatedResult);
    res.status(200).json(updatedResult);
  } catch (error) {
    console.log(error.message);
    res.status(501).json({ message: error.message });
  }
};
exports.getDeleteDealer = async (req, res) => {
  console.log("deleted");
  try {
    const _id = req.body;
    console.log(_id);
    const deletedResult = await Dealer.deleteOne({ _id });
    console.log("data was deleted", deletedResult);
    res.status(200).json(deletedResult);
  } catch (error) {
    console.log(error.message);
    res.status(501).json({ message: error.message });
  }
};
