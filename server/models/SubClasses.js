const { Schema, model } = require("mongoose");

const subClassSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const SubClass = model("SubClass", subClassSchema);

module.exports = SubClass;
