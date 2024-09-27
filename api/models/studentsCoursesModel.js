const knex = require("../database/db");

exports.get = async (id) => {
  return await knex.select()
		.from("studentsCourses")
		.where("studentsCourses_id", id)
		.then((data) => {
			return {
				status: "success",
				data: data
			};
  }).catch((e) =>{
    console.error(e);
			return {
				status: "failure",
				msg: e
			};
  });
}
exports.getByStudent = async (id) => {
  return await knex.select()
		.from("studentsCourses")
		.where("student_id", id)
		.then((data) => {
			return {
				status: "success",
				data: data
			};
  }).catch((e) =>{
    console.error(e);
			return {
				status: "failure",
				msg: e
			};
  });
}
exports.getByCourse = async (id) => {
  return await knex.select()
		.from("studentsCourses")
		.where("course_id", id)
		.then((data) => {
			return {
				status: "success",
				data: data
			};
  }).catch((e) =>{
    console.error(e);
			return {
				status: "failure",
				msg: e
			};
  });
}
exports.create = async (data) => {
  return await knex("studentsCourses")
    .insert(data)
    .then((data) => {
			return {
				status: "success",
				data: data
			};
    })
    .catch((e) => {
      console.log(e);
			return {
				status: "failure",
				msg: e
			};
    })
}
exports.delete = async (data) => {
  return await knex("studentsCourses")
		.where(
			data
		)
		.del()
		.then(()=>{
			return {
				status: "success",
				data: data
			};
  }).catch((e) =>{
    console.log(e);
			return {
				status: "failure",
				msg: e
			};
  });
}
