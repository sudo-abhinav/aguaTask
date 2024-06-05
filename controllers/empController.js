const { query } = require("express");
const dbconn = require("../connection");

async function handlePostEmployee(req, res) {
  try {
    // console.log("Request Body:", req.body);

    // Extract properties with potential fallback for undefined
    // const rid = req.body.rid;
    const name = req.body.name;
    const empCode = req.body.empCode;
    const mailId = req.body.mailId;
    const phoneNumber = req.body.phoneNumber;

    if (
      //   rid == null &&
      name == null &&
      empCode == null &&
      mailId == null &&
      phoneNumber == null
    ) {
      console.log(rid, name, empCode, mailId, phoneNumber);
      return res.json({
        msg: "all fields are mandatory",
      });
    } else {
      const query = `INSERT INTO  emp (rid , name, empcode, mail_id, phone_number) VALUES (?,?,?,?,?)`;

      dbconn.query(
        query,
        [rid, name, empCode, mailId, phoneNumber],
        (err, result) => {
          if (err) {
            console.log(err);
            return res.status(500).json({ msg: "Error inserting data" });
          }

          const insertData = JSON.stringify(result);

          return res.json({
            msg: "data inserted",
            data: JSON.parse(insertData),
          });
        }
      );
    }
  } catch (error) {
    console.error(error);
  }
}

async function handelGetEmp(req, res) {
  try {
    const query = "select * from emp";
    dbconn.query(query, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      const empData = JSON.stringify(result);

      return res.json({
        msg: "all data",
        data: JSON.parse(empData),
      });
    });
  } catch (error) {
    console.log(error.msg);
  }
}

async function handleUpdateEmpByid(req, res) {
  try {
    console.log("Request Body:", req.body);

    // Extract properties with potential fallback for undefined
    const id = req.params.id;

    const rid = req.body.rid;
    const name = req.body.name;
    // const empCode = req.body.empCode;
    const mailId = req.body.mailId;
    const phoneNumber = req.body.phoneNumber;

    // `update Role_table SET role_name = ? where id = ?`;
    const query = `update emp SET rid =? ,name = ?,  mail_id = ?, phone_number = ?  where id = ?`;

    const values = [rid, name, mailId, phoneNumber, id];

    dbconn.query(query, values, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "Error Updating data" });
      }

      const updateData = JSON.stringify(result);
      const data = JSON.parse(updateData);

      return res.json({
        msg: "data updated",
        data: data.message,
      });
    });
  } catch (error) {
    console.error(error);
  }
}

async function handleGetEmpByid(req, res) {
  const id = req.params.id;

  const query = `select * from emp where id = ${id}`;

  try {
    dbconn.query(query, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ msg: "Error Get data by id" });
      }
      const newData = JSON.stringify(results);

      return res.json({
        msg: `${id} data fetched`,
        data: JSON.parse(newData),
      });
    });
  } catch (error) {
    console.log(error);
  }
}

async function handleDeleteEmpById(req, res) {
  try {
    const id = req.params.id;

  
      const query = `Delete from emp where id = ${id}`;
      dbconn.query(query, (err) => {
        if (err) {
          console.error(err);
          return res.json({
            msg:"data not deleted"
          })
        }
        return res.json({
          msg: `${id} is deleted`,
        });
      });
    }
   catch (error) {
    console.log(error);
  }
}

async function handleEmpJoinRoleById(req, res) {
  try {
    // const id = req.params.id;

    const query = `SELECT emp.name AS EmployeeName, Role_Table.role_name AS RoleName  FROM emp INNER JOIN Role_TABLE ON emp.rid = Role_TABLE.id`;
    dbconn.query(query, (err , result) => {
      if (err) {
        console.error(err);
      }
      return res.json({
        msg: `data fetched`,
        data: JSON.parse(JSON.stringify(result))
      });
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  handlePostEmployee,
  handelGetEmp,
  handleUpdateEmpByid,
  handleGetEmpByid,
  handleDeleteEmpById,

  handleEmpJoinRoleById,
};
