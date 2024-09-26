const model = require("../models/studentsCoursesModel");

exports.getById = (req, res)=>{
	res.send(model.get(req.params.id));
}
exports.create = (req, res)=>{
	// TODO: Validate Data
	res.send(model.create(req.body));
}
exports.delete = (req, res)=>{
	// TODO: Validate Data 
	res.send(model.delete(req.body));
}
