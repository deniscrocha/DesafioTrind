const address = require("../models/addressModel");

exports.get = (req, res) => {
  res.send(address.get(req.params.id));
};
exports.create = (req, res) => {
  res.send(address.create(req.body));
};
exports.update = (req, res) => {
  res.send(address.update(req.params.id, req.bod));
};
exports.delete = (req, res) => {
  res.send(address.delete(req.params.id));
};