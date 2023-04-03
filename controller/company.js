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
exports.getUpdatecompany = async (req, res) => {
  try {
    const { _id, companyname } = req.body;
    const result = await Company.findByIdAndUpdate(
      { _id },
      {
        $set: {
          companyname: companyname,
        },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
  res.send("done");
};
