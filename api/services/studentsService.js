const model = require("../models/studentsModel");
const studentsCoursesModel = require("../models/studentsCoursesModel");

// TODO: Tratar erros
exports.get = async (_, res)=>{
	const query = await model.getAll();
	res.send(query);
}
exports.getById = async (req, res)=>{
	const id = req.params.id;
	const query = await model.get(id);
	res.send(query);
}
exports.getStudentCourses = async (req, res)=>{
	// TODO: Validate id
	const id = req.params.id;
	const query = await studentsCoursesModel.getByStudent(id);
	res.send(query);
}
exports.create = async (req, res)=>{
	const data = {
		student_name: req.body.student_name,
		student_email: req.body.student_email,
		student_lastname: req.body.student_lastname,
		student_birthday: req.body.student_birthday,
		student_cpf: req.body.student_cpf,
		student_gender: req.body.student_gender,
		student_cep: req.body.student_cep,
		student_country: req.body.student_country,
		student_street: req.body.student_street,
		student_neighborhood: req.body.student_neighborhood,
		student_number: req.body.student_number,
		student_complement: req.body.student_complement,
		student_city: req.body.student_city,
		student_state: req.body.student_state
	}
	const query = await model.create(data);
	res.send(query);
}
exports.update = async (req, res)=>{
	// TODO: Validate id
	const id = req.params.id;
	const data = {
		student_name: req.body.student_name,
		student_email: req.body.student_email,
		student_lastname: req.body.student_lastname,
		student_birthday: req.body.student_birthday,
		student_cpf: req.body.student_cpf,
		student_gender: req.body.student_gender,
		student_cep: req.body.student_cep,
		student_country: req.body.student_country,
		student_street: req.body.student_street,
		student_neighborhood: req.body.student_neighborhood,
		student_number: req.body.student_number,
		student_complement: req.body.student_complement,
		student_city: req.body.student_city,
		student_state: req.body.student_state
	}
	const query = await model.update(id, data);
	res.send(query)
}
exports.delete = async (req, res)=>{
	// TODO: Validate id
	const id = req.params.id;
	const query = await model.delete(id);
	res.send(query);
}
