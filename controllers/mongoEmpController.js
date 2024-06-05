const Employee = require("../models/empModel");

async function createMongoEmp(req, res) {
    try {
      const { roleName , empcode , mailid ,phone_number } = req.body;
      // let inc = 1
      await Role.create({
        name: roleName,
        empcode :empcode,
        mail_id: mailid,
        phone_number:phone_number
      });
      return res.json({
        msg: "data inserted",
      });
    } catch (error) {
      console.error("Error creating role:", error);
      res.status(500).json({ message: "Error creating role", error });
    }
  }


  module.exports= {createMongoEmp}