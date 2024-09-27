const knex = require("../database/db");

exports.getAll = async () => {
	return await knex.select().from("courses").then((data) => {
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
	return await knex.select()
		.from("courses")
		.where("course_id", id)
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
	return await knex("courses")
		.insert(data)
		.then((data) => {
			return {
				status: "success",
				msg: "created!",
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
	return await knex("courses")
		.update(data)
		.where("course_id", id)
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
exports.delete = async (id) => {
	return await knex("courses")
		.where("course_id", id)
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
