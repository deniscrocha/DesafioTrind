const courses = require("../models/coursesModel");

exports.getAll = (req, res) => {
  res.send(courses.getAll());
};
exports.get = (req, res) => {
  res.send(courses.get(req.params.id));
};
exports.create = (req, res) => {
  res.send(courses.create(req.body));
};
exports.delete = (req, res) => {
  res.send(courses.delete(req.params.id));
};