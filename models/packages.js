const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema({
    name: String,
    services:{
type: Array
    },
price: Number,
date_created: {
    type: Date,
    default: Date.now
}
});
module.exports = mongoose.model("Package", PackageSchema);