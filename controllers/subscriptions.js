const Subscription = require('../models/subscriptions');

const getSubscriptions = async (req, res) => {
    const subscriptions = await Subscription.find({});
    res.send({"count": subscriptions.length, "subscriptions": subscriptions}).status(200);
};

const createSubscription = async (req, res) => {
    const data = req.body;
    const newSubscription = await Subscription.create(data);

    if(!newSubscription) {
        res.send({"error": "Subscription creation failed"}).status(400);
    }
    res.send(newSubscription).status(201);
};

const getSubscriptionById = async (req, res) => {
    const id = req.params.id;
    try {
      const subscription = await Subscription.findById({ _id: id });
  
      if (!subscription) {
        res.send({ error: "Subscription with id: &{id} not found!!" }).status(404);
      }
      res.send(subscription).status(200);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "Internal server error" });
    }
  };
  
  const updateSubscription = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
  
    try {
      const subscription = await Subscription.findByIdAndUpdate(id, { ...data }, { new: true });
  
      if (!subscription) {
        res.send({ error: "Subscription with id:${id} does not exist!!" }).status(404);
      }
      res.send(subscription).status(201);
    } catch (error) {
      console.log(error);
      res.send({ error: "Internal server error" }).status(500);
    }
};


const deleteSubscription = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedSubscription = await Subscription.findByIdAndDelete({"_id": id})
    if (!deletedSubscription) {
      res.send({ "error": "Subscription with id: &{id} does not exist!!" }).status(404);
  }
  res.send({ "success": `Subscription: &{id} deleted successfully`}).status(204)
}catch (error) {
  console.log(error);
  res.send({ "error": "Internal server error" }).status(500);
}
};

module.exports = {
    getSubscriptions,
    createSubscription,
    getSubscriptionById,
    updateSubscription,
    deleteSubscription
};