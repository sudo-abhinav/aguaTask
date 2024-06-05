const mongoose = require('mongoose');


const roleSchema = new mongoose.Schema({
  rid:{
    type:String,
    required:true,
  },
  role_name: {
    type: String,
    required: true,
  },
}, { autoIndex: false, timestamps: true });

const Role = mongoose.model('Role', roleSchema);





module.exports = Role;