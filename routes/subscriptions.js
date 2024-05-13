const express = require("express");
const { getSubscriptions, createSubscription, getSubscriptionById, updateSubscription, deleteSubscription} = require("../controllers/subscriptions");

const router = express.Router() //creating an instance of the router

router.get("/", getSubscriptions);
router.post("/", createSubscription);
router.get("/:id", getSubscriptionById);
router.put("/:id", updateSubscription);
router.delete("/:id", deleteSubscription);


module.exports = router; 