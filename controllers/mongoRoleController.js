
const Role = require("../models/roleModel");




async function createMongoRole(req, res) {
  try {
    const { roleName } = req.body;
    // let inc = 1
    await Role.create({
      role_name: roleName,
    });
    return res.json({
      msg: "data inserted",
    });
  } catch (error) {
    console.error("Error creating role:", error);
    res.status(500).json({ message: "Error creating role", error });
  }
}

async function GetMongoRole(req, res) {
  try {
    const all = await Role.find();
    return res.json({
      data: all,
    });
  } catch (error) {
    return res.json({
      msg: error,
    });
  }
}

async function GetMongoRoleById(req, res) {
  const id = req.params.id;
  const all = await Role.findById(id);

  return res.json({
    data: all,
  });
}

async function DeleteMongoRoleById(req, res) {
  const id = req.params.id;
   await Role.findByIdAndDelete(id);

  return res.json({
    msg: "data deleted",
  });
}

async function updateMongoRoleById(req, res) {
  const id = req.params.id;
  const { role_name } = req.body;
  await Role.findByIdAndUpdate(id, { role_name });

  return res.json({
    msg: "data is updated",
    // data:updatedData,
  });
}

module.exports = {
  createMongoRole,
  GetMongoRole,
  GetMongoRoleById,
  DeleteMongoRoleById,
  updateMongoRoleById,
};
