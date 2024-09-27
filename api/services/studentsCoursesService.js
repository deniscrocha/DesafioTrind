const model = require("../models/studentsCoursesModel");

// TODO: Tratar erros
exports.getById = async (req, res)=>{
	const id = req.params.id;
	const query = await model.get(id);
	res.send(query);
}
exports.create = async (req, res)=>{
	// TODO: Validate Data
	const data = {
			student_id: req.body.student_id,
			course_id: req.body.course_id,
			course_conclusion_date: req.body.course_conclusion_date
	}
	const query = await model.create(data);
	res.send(query);
}
exports.delete = async (req, res)=>{
	// TODO: Validate Data 
	const data = {
			student_id: req.body.student_id,
			course_id: req.body.course_id
		}
	const query = await model.delete(data);
	res.send(query);
}
