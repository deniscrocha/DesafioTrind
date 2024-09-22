const students = require("../models/studentsModel");
const address = require("../models/addressModel");

exports.getAll = (req, res) => {
  res.send(students.getAll());
};
exports.get = (req, res) => {
  res.send(students.get(req.params.id));
};
exports.create = (req, res) => {
  const addressData = {
    address_cep: req.body.address_cep,
    address_country: req.body.address_country,
    address_street: req.body.address_street,
    address_neighborhood: req.body.address_neighborhood,
    address_number: req.body.address_number,
    address_complement: req.body.address_complement,
    address_city: req.body.address_city,
    address_state: req.body.address_state
  }
  const student_address = address.create(addressData);
  const studentData = {
    student_name: req.body.student_id,
    student_email: req.body.student_email,
    student_lastname: req.body.student_lastname,
    student_birthday: req.body.student_birthday,
    student_gender: req.body.student_gender,
    student_address: student_address
  }
  const data = students.create(studentData);
  res.send(data);
};
exports.update = (req, res) => {
  res.send(students.update(req.params.id, req.bod));
};
exports.delete = (req, res) => {
  res.send(students.delete(req.params.id));
};