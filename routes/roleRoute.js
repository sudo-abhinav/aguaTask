const express = require("express");

const router = express.Router();

const {
  handlePostRole,
  handleGetRole,
  handleGetRoleById,
  handleDeleteRoleById,
  handleUpdateRoleByid
} = require("../controllers/roleController");

router.post("/roles", handlePostRole);

router.get("/getRoles", handleGetRole);

router.get("/getRoleById/:id", handleGetRoleById);

router.delete("/deleteById/:id", handleDeleteRoleById);

router.put('/updatedataById/:id' ,  handleUpdateRoleByid)

// router.get()

module.exports = router;
