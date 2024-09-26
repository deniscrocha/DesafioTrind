const model = require("../models/studentsModel");

exports.get = (req, res)=>{
	res.send(model.getAll());
}
exports.getById = (req, res)=>{
	res.send(model.get(req.params.id));
}
exports.create = (req, res)=>{
	// TODO: Validate data
	res.send(model.create(req.body));
}
exports.update = (req, res)=>{
	// TODO: Validate new data
	// TODO: Validate id
	res.send(model.update(req.params.id, req.body));
}
exports.delete = (req, res)=>{
	// TODO: Validate id
	res.send(model.delete(req.params.id));
}
