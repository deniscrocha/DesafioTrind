const knex = require("../database/db");

exports.getAll = async () => {
	return await knex.select()
		.from("students")
		.then((data) => {
			return {
				status: "success",
				data: data
			};
		}).catch((e) => {
			console.error(e);
			return {
				status: "failure",
				msg: e
			};
		});
}
exports.get = async (id) => {
	return await knex.select("*")
		.from("students")
		.where("student_id", id)
		.then((data) => {
			return {
				status: "success",
				data: data
			};
		}).catch((e) => {
			console.error(e);
			return {
				status: "failure",
				msg: e
			};
		});
}
exports.create = async (data) => {
	return await knex("students")
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
exports.update = async (id, data) => {
	return await knex("students")
		.where("student_id", id)
		.update(
			data
		)
		.then((data) => {
			return {
				status: "success",
				data: data
			};
		})
		.catch((e) => {
			return {
				status: "failure",
				msg: e
			};
		});
}
exports.delete = async (id) => {
	return await knex("students").where("student_id", id)
		.del()
		.then((data) => {
			return {
				status: "success",
				data: data
			};
		}).catch((e) => {
			console.log(e);
			return {
				status: "failure",
				msg: e
			};
		});
}
