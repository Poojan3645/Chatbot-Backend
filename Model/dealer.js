const { default: mongoose } = require("mongoose");

const dealerSchema = new mongoose.Schema({
  dealername: {
    type: String,
    required: true,
  },
  contactnumber: {
    type: String,
    required: true,
  },
  companyId: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
  },
  // CarId: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "Cars",
  areaname: {
    type: String,
  },
});

//collection creation
const Dealer = new mongoose.model("Dealer", dealerSchema);
module.exports = Dealer;
