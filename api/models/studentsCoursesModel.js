const knex = require("../database/db");

exports.get = (id) => {
  knex.select().from("studentsCourses").where("id", id).then((data) => {
    return data;
  }).catch((e) =>{
    console.error(e);
    return { message: e };
  });
}
exports.getByStudent = (id) => {
  knex.select().from("studentsCourses").where("student_id", id).then((data) => {
    return data;
  }).catch((e) =>{
    console.error(e);
    return { message: e };
  });
}
exports.getByCourse = (id) => {
  knex.select().from("studentsCourses").where("course_id", id).then((data) => {
    return data;
  }).catch((e) =>{
    console.error(e);
    return { message: e };
  });
}
exports.create = (data) => {
  knex("studentsCourses")
    .insert({
			student_id: data.idStudent,
			course_id: data.idCourse,
			course_conclusion_date: data.conclusionDate
		})
    .then((data) => {
      return { 
        resp: data,
        success: "created!" 
      };
    })
    .catch((e) => {
      console.log(e);
      return { message: e };
    })
}
exports.delete = (data) => {
  knex("studentsCourses")
		.where({
			student_id: data.student_id,
			course_id: data.course_id
		})
		.del()
		.then(()=>{
			return { success: `deleted!` };
  }).catch((e) =>{
    console.log(e);
    return { message: e };
  });
}
