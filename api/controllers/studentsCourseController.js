const studentsCourse = require("../models/studentsCourseModel");

exports.getAll = (req, res) => {
  res.send(studentsCourse.getAll());
};
exports.getByStudent = (req, res) => {
  res.send(studentsCourse.getByStudent());
};
exports.get = (req, res) => {
  res.send(studentsCourse.get(req.params.id));
};
exports.create = (req, res) => {
  res.send(studentsCourse.create(req.body));
};
exports.delete = (req, res) => {
  res.send(studentsCourse.delete(req.params.id));
};