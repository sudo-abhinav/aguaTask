const express = require("express");

const router = express.Router();

const {createMongoEmp} = require('../controllers/mongoEmpController')
 
router.post('/mongoEmpPost' , createMongoEmp)