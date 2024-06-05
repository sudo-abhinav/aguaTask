const express = require("express");

const router = express.Router();

const {
  createMongoRole,
  GetMongoRole,
  GetMongoRoleById,
  DeleteMongoRoleById,
  updateMongoRoleById,
} = require("../controllers/mongoRoleController");

router.post("/mongoRole", createMongoRole);

router.get("/getMongoRole", GetMongoRole);

router.get("/getMongoRoleById/:id", GetMongoRoleById);

router.delete("/deleteMonfoRoleById/:id", DeleteMongoRoleById);

router.put("/update/:id", updateMongoRoleById);

module.exports = router;
