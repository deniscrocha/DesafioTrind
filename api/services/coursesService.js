const model = require("../models/coursesModel");

exports.get = (_, res)=>{
	res.send(model.getAll);
}
exports.getById = (req, res) =>{
	res.send(model.get(req.params.id));
}
exports.create = (req, res)=>{
	// Make Data Validation
	res.send(model.create(req.body));
}
exports.update = (req, res)=>{
	// Make ID validation
	// Make new Data Validation
	res.send(model.update(req.params.id, req.body));
}
exports.delete = (req, res)=>{
	// Make ID validation
	res.send(model.delete(req.params.id));
}
