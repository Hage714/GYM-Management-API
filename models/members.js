const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
name: String,
email: String,
phone_number: String,
date_created: {
    type: Date,
    default: Date.now
}
});
module.exports = mongoose.model("Member", MemberSchema);