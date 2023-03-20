const { default: mongoose } = require("mongoose");

const carsSchema = new mongoose.Schema({
  carname: {
    type: String,
    required: true,
  },
  fuel: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  // specification: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "Specification",
  // },
  companyId: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
  },
  areaId: {
    type: [mongoose.Schema.ObjectId],
    ref: "Area",
  },
});

//collection creation
const Cars = new mongoose.model("Cars", carsSchema);
module.exports = Cars;

//specification ID
//
