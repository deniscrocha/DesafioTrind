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
	// TODO: Checar se existe estudante
  knex.select().from("studentsCourses").where("student_id", id).then((data) => {
    return data;
  }).catch((e) =>{
    console.error(e);
    return { message: e };
  });
}
exports.getByCourse = (id) => {
	// TODO: Checar se existe curso
  knex.select().from("studentsCourses").where("course_id", id).then((data) => {
    return data;
  }).catch((e) =>{
    console.error(e);
    return { message: e };
  });
}
exports.create = (idStudent, idCourse, body) => {
	// TODO: Checar se existe estudante e curso
	// TODO: Checar se a data está no padrão (DD-MM-YYYY)
	const conclusionDate = body.course_conslusion_date;
  knex("studentsCourses")
    .insert({
			student_id: idStudent,
			course_id: idCourse,
			course_conclusion_date: conclusionDate
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
exports.delete = (id) => {
	// TODO: Checar se existe Relação
  knex("studentsCourses").where("id", id).del().then(()=>{
    return { success: `${id} deleted!` };
  }).catch((e) =>{
    console.log(e);
    return { message: e };
  });
}
