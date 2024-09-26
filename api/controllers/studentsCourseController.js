const studentsCourse = require("../models/studentsCourseModel");


exports.get = (req, res) => {
  res.send(studentsCourse.get(req.params.id));
};
exports.getByStudent = (req, res) => {
  res.send(studentsCourse.get(req.params.id));
};
exports.getByCourse = (req, res) => {
  res.send(studentsCourse.get(req.params.id));
};
exports.create = (req, res) => {
  res.send(studentsCourse.create(req.params.idStudent, req.params.idCourse, req.body));
};
exports.delete = (req, res) => {
  res.send(studentsCourse.delete(req.params.id));
};
