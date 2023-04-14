const Specification = require("../Model/specification");

exports.createSpecification = async (req, res) => {
  console.log(req.body);
  const { engine, mileage, wheels, safety, transmission, fueltype } = req.body;

  const Specifications = new Specification({
    engine: engine,

    mileage: mileage,

    wheels: wheels,

    safety: safety,

    transmission: transmission,

    fueltype: fueltype,
  });
  const result = await Specifications.save();
  res.send(result);
};
exports.getSpecification = async (req, res) => {
  try {
    const result = await Specification.find({});
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
exports.getUpdateSpecification = async (req, res) => {
  console.log("done");
  try {
    const { engine, mileage, wheels, safety, transmission, fueltype } =
      req.body;

    const _id = req.params.id;
    const updatedResult = await Specification.findOneAndUpdate(
      { _id: "642d00a7ea3c63de81fa47e3" },
      {
        $set: {
          engine,
          mileage,
          wheels,
          safety,
          transmission,
          fueltype,
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
exports.getDeleteSpecification = async (req, res) => {
  console.log("deleted");
  try {
    const _id = req.body;
    console.log(_id);
    const deletedResult = await Specification.deleteOne({ _id });
    console.log("data was deleted", deletedResult);
    res.status(200).json(deletedResult);
  } catch (error) {
    console.log(error.message);
    res.status(501).json({ message: error.message });
  }
};
