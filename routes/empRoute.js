const express = require("express");

const router = express.Router();

const {
  handlePostEmployee,
  handelGetEmp,
  handleUpdateEmpByid,
  handleGetEmpByid,
  handleDeleteEmpById,
  handleEmpJoinRoleById
} = require("../controllers/empController");

router.post("/emp", handlePostEmployee);

router.get("/getAllEmp", handelGetEmp);

router.get('/getEmployee-role' , handleEmpJoinRoleById)

router.get("/getAppEmpById/:id", handleGetEmpByid);

router.put("/updateEmp/:id", handleUpdateEmpByid);

router.delete('/deleteEmpById/:id' , handleDeleteEmpById)

// router.get()

module.exports = router;
