const model = require("../models/coursesModel");
const studentsCoursesModel = require("../models/studentsCoursesModel");

// TODO: Trativa de Erros
exports.get = async (_, res)=>{
	const query = await model.getAll();
	res.status(200).send(query);
}
exports.getById = async (req, res) =>{
	const query = await model.get(req.params.id);
	res.status(200).send(query);
}
exports.getCourseStudents = (req, res)=>{
	res.send(studentsCoursesModel.getByCourse(req.params.id))
}
exports.create = async (req, res)=>{
	const data = { course_name: req.body.course_name };
		const query = await model.create(data);
		console.log(query);
		if(query.status == "success"){
			res.status(201).send(query);
		} else{
			res.status(400).send(query);
		}
}
exports.update = async (req, res)=>{
	// TODO: Make ID validation
	const data = { course_name: req.body.course_name };
	const id = req.params.id;
	const query = await model.update(id, data);
	res.status(200).send(query);
}
exports.delete = async (req, res)=>{
	// TODO: Make ID validation
	const query = await model.delete(req.params.id);
	res.status(200).send(query);
}
