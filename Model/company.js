const { default: mongoose } = require("mongoose");

const companySchema = new mongoose.Schema({
  CarId: {
    type: mongoose.Schema.ObjectId,
    ref: "Cars",
  },
  companyname: {
    type: String,
    required: true,
  },
  areaId: {
    type: [mongoose.Schema.ObjectId],
    ref: "Area",
  },
});

const Company = new mongoose.model("Company", companySchema);
module.exports = Company;
