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
