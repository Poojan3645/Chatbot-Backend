const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();

const adminRoutes = require("./routes/admin.js");
const carRoutes = require("./routes/cars");
const areaRoutes = require("./routes/area");
const companyRoutes = require("./routes/company");
const dealerRoutes = require("./routes/dealer");
const FAQRoutes = require("./routes/FAQ");
const SpecificationRoutes = require("./routes/specification");

mongoose
  .connect(
    "mongodb+srv://poojanpatel3645:76jjntWtwGyqYWDq@cluster0.q6s5m40.mongodb.net/shop?authSource=admin&replicaSet=atlas-mn9dmy-shard-0&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("console connected...."))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use("/", adminRoutes);
app.use("/cars", carRoutes);
app.use("/area", areaRoutes);
app.use("/company", companyRoutes);
app.use("/dealer", dealerRoutes);
app.use("/FAQ", FAQRoutes);
app.use("/specification", SpecificationRoutes);

app.listen(3030, () => console.log("server on!"));
