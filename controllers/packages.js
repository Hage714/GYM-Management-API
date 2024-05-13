const Package = require('../models/packages');

const getPackages = async (req, res) => {
    const packages = await Package.find();
    res.send({"count": packages.length, "packages": packages}).status(200);
};

const createPackage = async (req, res) => {
    const data = req.body;
    const newPackage = await Package.create(data);

    if(!newPackage) {
        res.send({"error": "Package creation failed"}).status(400);
    }
    res.send(newPackage).status(201);
};

const getPackageById = async (req, res) => {
    const id = req.params.id;
    try {
      const package = await Package.findById({ _id: id });
  
      if (!package) {
        res.send({ error: "Package with id: &{id} not found!!" }).status(404);
      }
      res.send(package).status(200);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "Internal server error" });
    }
  };
  
  const updatePackage = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
  
    try {
      const package = await Package.findByIdAndUpdate(id, { ...data }, { new: true });
  
      if (!package) {
        res.send({ error: "Package with id:${id} does not exist!!" }).status(404);
      }
      res.send(package).status(201);
    } catch (error) {
      console.log(error);
      res.send({ error: "Internal server error" }).status(500);
    }
};


const deletePackage = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedPackage = await Package.findByIdAndDelete({"_id": id})
    if (!deletedPackage) {
      res.send({ "error": "Package with id: &{id} does not exist!!" }).status(404);
  }
  res.send({ "success": `Package: &{id} deleted successfully`}).status(204)
}catch (error) {
  console.log(error);
  res.send({ "error": "Internal server error" }).status(500);
}
};

module.exports = {
    getPackages,
    createPackage,
    getPackageById,
    updatePackage,
    deletePackage
};

