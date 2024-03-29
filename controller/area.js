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

exports.getDeleteArea = async (req, res) => {
  console.log("deleted ");
  try {
    const _id = req.body;
    console.log(_id);
    const deletedResult = await Area.deleteOne({ _id });
    console.log("data was deleted", deletedResult);
    res.status(200).json(deletedResult);
  } catch (error) {
    console.log(error.message);
    res.status(501).json({ message: error.message });
  }
};

// const deleteDocument = async (_id) => {
//   try {
//     const result = await Employee.deleteOne({ _id });
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

exports.getUpdateArea = async (req, res) => {
  console.log("done");
  try {
    const { areaname, dealerId } = req.body;

    const _id = req.params.id;
    const updatedResult = await Area.findOneAndUpdate(
      { _id: "641442cb6761a876a44b049a" },
      {
        $set: {
          areaname,
          dealerId,
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
