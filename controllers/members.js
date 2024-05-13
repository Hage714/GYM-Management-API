const Member = require('../models/members');

const getMembers = async (req, res) => {
    const members = await Member.find();
    res.send({"count": members.length, "members": members}).status(200);
};

const createMember = async (req, res) => {
    const data = req.body;
    const newMember = await Member.create(data);

    if(!newMember) {
        res.send({"error": "Member creation failed"}).status(400);
    }
    res.send(newMember).status(201);
};

const getMemberById = async (req, res) => {
    const id = req.params.id;
    try {
      const member = await Member.findById({ _id: id });
  
      if (!member) {
        res.send({ error: "Member with id: &{id} not found!!" }).status(404);
      }
      res.send(member).status(200);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "Internal server error" });
    }
  };
  
  const updateMember = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
  
    try {
      const member = await Member.findByIdAndUpdate(id, { ...data }, { new: true });
  
      if (!member) {
        res.send({ error: "Member with id:${id} does not exist!!" }).status(404);
      }
      res.send(member).status(201);
    } catch (error) {
      console.log(error);
      res.send({ error: "Internal server error" }).status(500);
    }
};


const deleteMember = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedMember = await Member.findByIdAndDelete({"_id": id})
    if (!deletedMember) {
      res.send({ "error": "Member with id: &{id} does not exist!!" }).status(404);
  }
  res.send({ "success": `Member: &{id} deleted successfully`}).status(204)
}catch (error) {
  console.log(error);
  res.send({ "error": "Internal server error" }).status(500);
}
};

module.exports = {
    getMembers,
    createMember,
    getMemberById,
    updateMember,
    deleteMember
};
