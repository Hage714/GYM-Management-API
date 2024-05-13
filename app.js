const express = require("express");
const morgan = require("morgan");
//const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();   //initialise express variable

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));
//app.use(cors());

// Database Configuration
const { connect_database } = require("./db/connect");
connect_database();

// Route Imports
const memberRoutes = require("./routes/members");
const subscriptionRoutes = require("./routes/subscriptions");
const packageRoutes = require("./routes/packages");


// base route
app.get("/", (req, res) => {
    res.send({"message": "Server is running"}).status(200);
});

//adding custom routes
app.use("/members", memberRoutes);
app.use("/subscriptions", subscriptionRoutes);
app.use("/packages", packageRoutes);


// start the server
app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`)
})