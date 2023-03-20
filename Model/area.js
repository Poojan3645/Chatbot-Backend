const { default: mongoose } = require("mongoose");

const areaSchema = new mongoose.Schema({
  areaname: {
    type: String,
    reqired: true,
  },
  dealerId: {
    type: [mongoose.Schema.ObjectId],
    ref: "Dealer",
  },
});

//collection creation
const Area = new mongoose.model("Area", areaSchema);
module.exports = Area;
