const express = require("express");
const { getPackages, createPackage, getPackageById, updatePackage, deletePackage} = require("../controllers/packages");

const router = express.Router() //creating an instance of the router

router.get("/", getPackages);
router.post("/", createPackage);
router.get("/:id", getPackageById);
router.put("/:id", updatePackage);
router.delete("/:id", deletePackage);


module.exports = router; 