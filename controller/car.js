const Cars = require("../Model/cars");

exports.createCars = async (req, res) => {
  console.log(req.body);
  const { carname, fuel, type, price, specification, companyId, areaId } =
    req.body;

  const Car = new Cars({
    carname: carname,
    fuel: fuel,
    type: type,
    price: price,
    specification: specification,
    companyId: companyId,
    areaId: areaId,
  });
  const result = await Car.save();

  res.send(result);
};

exports.getCars = async (req, res) => {
  try {
    const result = await Cars.find({});
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
exports.getCarByCompanyId = async (req, res) => {
  console.log("Complete");
  try {
    const { companyId } = req.body;
    const result = await Cars.find({
      companyId: companyId,
    });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
exports.findCars = async (req, res) => {
  try {
    const { fuel, type, price, minPrice, maxPrice } = req.body;
    let matchPrice = {};
    const query = {};
    if (fuel !== "") {
      query.fuel = { $regex: fuel, $options: "i" };
    }
    // console.log(query);
    if (type !== "") {
      query.type = { $regex: type, $options: "i" };
    }
    // console.log(query);
    if (minPrice !== 0 && maxPrice !== 0) {
      query.price = { $gte: minPrice, $lte: maxPrice };
    } else if (minPrice !== 0 && maxPrice === 0) {
      query.price = { $gte: minPrice };
    } else if (minPrice == 0 && maxPrice !== 0) {
      query.price = { $lte: maxPrice };
    }
    console.log(query);
    const result = await Cars.find(query);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

exports.getDeleteCar = async (req, res) => {
  console.log("deleted");
  try {
    const _id = req.body;
    console.log(_id);
    const deletedResult = await Cars.deleteOne({ _id });
    console.log("data was deleted", deletedResult);
    res.status(200).json(deletedResult);
  } catch (error) {
    console.log(error.message);
    res.status(501).json({ message: error.message });
  }
};

exports.getUpdateCar = async (req, res) => {
  console.log("done");
  try {
    const { carname, fuel, type, price, specification, companyId, areaId } =
      req.body;

    const _id = req.params.id;
    const updatedResult = await Cars.findOneAndUpdate(
      { _id: "6417e1d06706e5efaaeb1c4d" },
      {
        $set: {
          carname,
          fuel,
          type,
          price,
          specification,
          companyId,
          areaId,
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
// ({
//   fuel: fuel,
//   type: type,
//   $and: [{ price: { $gt: minPrice } }, { price: { $lte: maxPrice } }],
// });
