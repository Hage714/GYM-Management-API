const express = require("express");
const { getMembers, createMember, getMemberById, updateMember, deleteMember} = require("../controllers/members");

const router = express.Router() //creating an instance of the router

router.get("/", getMembers);
router.post("/", createMember);
router.get("/:id", getMemberById);
router.put("/:id", updateMember);
router.delete("/:id", deleteMember);


module.exports = router; 