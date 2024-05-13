const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema({
customer_name: String,
period:{
    type: String,
    enum: [
    "weekly",
    "monthly",
    "yearly"
],
},
date_created: {
    type: Date,
    default: Date.now
}
});
module.exports = mongoose.model("Subscription", SubscriptionSchema);