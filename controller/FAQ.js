const FAQ = require("../Model/FAQ");

exports.createFAQ = async (req, res) => {
  console.log(req.body);
  const { question, answer } = req.body;
  const FAQs = new FAQ({
    question: question,

    answer: answer,
  });
  const result = await FAQs.save();
  res.send(result);
};
exports.getFAQ = async (req, res) => {
  try {
    const result = await FAQ.find({});
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
// exports.getUpdateFAQ = async (req, res) => {
//   try {
//     const { _id, FAQ } = req.body;
//     const result = await FAQ.findByIdAndUpdate(
//       { _id },
//       {
//         $set: {
//           FAQ: FAQ,
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

exports.getUpdateFAQ = async (req, res) => {
  console.log("done");
  try {
    const { question, answer } = req.body;

    const _id = req.params.id;
    const updatedResult = await FAQ.findOneAndUpdate(
      { _id: "64193b5a13903f974d13d1ed" },
      {
        $set: {
          question,
          answer,
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
exports.getDeleteFAQ = async (req, res) => {
  console.log("deleted");
  try {
    const _id = req.body;
    console.log(_id);
    const deletedResult = await FAQ.deleteOne({ _id });
    console.log("data was deleted", deletedResult);
    res.status(200).json(deletedResult);
  } catch (error) {
    console.log(error.message);
    res.status(501).json({ message: error.message });
  }
};
