const { default: mongoose } = require("mongoose");

const specificationSchema = new mongoose.Schema({
  engine: {
    type: String,
    required: true,
  },
  mileage: {
    type: String,
    required: true,
  },
  wheels: {
    type: String,
    required: true,
  },
  safety: {
    type: String,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
  fueltype: {
    type: String,
    required: true,
  },
});

const Specification = new mongoose.model("Specification", specificationSchema);
module.exports = Specification;
