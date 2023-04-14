const Company = require("../Model/company");

exports.createCompany = async (req, res) => {
  console.log("req.body");
  const { CarId, companyname, areaId } = req.body;

  const Companies = new Company({
    CarId: CarId,
    companyname: companyname,
    areaId: areaId,
  });
  const result = await Companies.save();
  res.send(result);
};
exports.getCompany = async (req, res) => {
  try {
    const result = await Company.find({});
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
// exports.getUpdatecompany = async (req, res) => {
//   try {
//     const { _id, companyname } = req.body;
//     const result = await Company.findByIdAndUpdate(
//       { _id },
//       {
//         $set: {
//           companyname: companyname,
//         },
//       },
//       {
//         new: true,
//         useFindAndModify: false,
//       }
//     );
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
//   res.send("done");
// };

exports.getUpdatecompany = async (req, res) => {
  console.log("done");
  try {
    const { CarId, companyname, areaId } = req.body;

    const _id = req.params.id;
    const updatedResult = await Company.findOneAndUpdate(
      { _id: "641451486761a876a44b04c3" },
      {
        $set: {
          CarId,
          companyname,
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
exports.getDeleteCompany = async (req, res) => {
  console.log("deleted");
  try {
    const _id = req.body;
    console.log(_id);
    const deletedResult = await Company.deleteOne({ _id });
    console.log("data was deleted", deletedResult);
    res.status(200).json(deletedResult);
  } catch (error) {
    console.log(error.message);
    res.status(501).json({ message: error.message });
  }
};
