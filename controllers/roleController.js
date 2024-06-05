const { json } = require("express");
const dbconn = require("../connection");

async function handlePostRole(req, res) {
  reqBody = {
    role_name: req.body.role_name,
  };

  //   queryAll = `select role_name from Role_table`
  //   dbconn.query(queryAll , (err , result)=>{
  //       const updatedData = JSON.stringify(result);
  //       console.log(updatedData.search(role_name));

  //   })

  const query = `INSERT INTO  Role_table (role_name) VALUES (?)`;

  dbconn.query(query, [reqBody.role_name]);

  res.json({
    msg: "data inserted succesfully",
  });
}

async function handleGetRole(req, res) {
  const query = "select * from Role_table";

  // const newData = JSON.stringify(dbconn.query(query));
  try {
    dbconn.query(query, (err, results) => {
      if (err) {
        console.error(err);
        return;
      }
      const newData = JSON.stringify(results);
      // console.log(newData);
      return res.json({
        msg: "all data fetched",
        data: JSON.parse(newData),
      });
    });
  } catch (error) {
    console.log(error);
  }
}

async function handleGetRoleById(req, res) {
  const role_id = req.params.id;

  const query = `select * from Role_table where id = ${role_id}`;

  try {
    dbconn.query(query, (err, results) => {
      if (err) {
        console.error(err);
        return;
      }
      const newData = JSON.stringify(results);

      return res.json({
        msg: "all data fetched",
        data: JSON.parse(newData),
      });
    });
  } catch (error) {
    console.log(error);
  }
}

async function handleDeleteRoleById(req, res) {
  const role_id = req.params.id;

  const query = `Delete from Role_table where id = ?`;
  values = [role_id];

  try {
    dbconn.query(query, values, (err) => {
      if (err) {
        return err;
      }

      return res.json({
        msg: `${role_id} is deleted`,
      });
    });
  } catch (error) {
    console.log(error);
  }
}

async function handleUpdateRoleByid(req, res) {
  const role_id = req.params.id;
  const name = req.body.role_name;

  console.log(name);
  console.log(role_id);

  // this is the way of preventing sql injection
  const query = `update Role_table SET role_name = ? where id = ?`;
  const values = [name, role_id];

  try {
    dbconn.query(query, values, (err, results) => {
      if (err) {
        return res.json({
          msg: err.message,
        });
      }
      //   const updatedData = JSON.stringify(results);
      const updatedData = JSON.stringify(results);

      return res.json({
        msg: "data updated",
        data: JSON.parse(updatedData),
      });
    });
  } catch (error) {
    res.JSON({
      data: error.message,
    });
  }
}

module.exports = {
  handlePostRole,
  handleGetRole,
  handleGetRoleById,
  handleDeleteRoleById,
  handleUpdateRoleByid,
};
