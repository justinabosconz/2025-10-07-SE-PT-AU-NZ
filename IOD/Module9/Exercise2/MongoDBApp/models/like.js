const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "user" }, // foreign key
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("like", likeSchema);
