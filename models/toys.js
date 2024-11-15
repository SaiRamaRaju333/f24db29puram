// const mongoose = require("mongoose")
// const toySchema = mongoose.Schema({
// name: String,
// type: String,
// price_range: Number
// })
// module.exports = mongoose.model("Toy",
// toySchema)

const mongoose = require("mongoose");

const toySchema = mongoose.Schema({
  name: String,
  type: String,
  price_range: Number
});

module.exports = mongoose.model("Toy", toySchema);