const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new mongoose.Schema({
  // rid: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Role',
  //   required: true,
  // },
  name: {
    type: String,
    required: true,
  },
  empcode: {
    type: String,
    required: true,
  },
  mail_id: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
}, { autoIndex: false, timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
