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
    const result = await Specification({});
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
