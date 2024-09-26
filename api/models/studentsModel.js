const knex = require("../database/db");

exports.getAll = () => {
 knex.select()
    .from("students")
    .innerJoin("studentsCourses", "students.student_id", "studentsCourses.student_id")
    .then((data)=>{
      return data;
  }).catch((e) =>{ 
    console.error(e);
    return { message: e };
  });
}
exports.get = (id) => {
  knex.select("*")
    .from("students")
    .innerJoin("studentsCourses", "students.student_id", "studentsCourses.student_id")
    .where("students_id", id)
    .then((data) => {
    return data;
  }).catch((e) =>{
    console.error(e);
    return { message: e };
  });
}
exports.create = (data) => {
  knex("students")
    .insert(data)
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
exports.update = (id, newData) => {
  knex("students")
  .where("id", id)
  .update({
    students_name: newData.students_name,
    students_email: newData.students_email,
    students_lastname: newData.students_lastname,
    students_birthday: newData.students_birthday,
    students_cpf: newData.students_cpf,
    students_gender: newData.students_gender,
		student_cep: newData.student_cep,
		student_country: newData.student_country,
		student_street: newData.student_street,
		student_neighborhood: newData.student_neighborhood,
		student_number: newData.student_number,
		student_complement: newData.student_complement,
		student_city: newData.student_city,
		student_state: newData.student_state,
	})
  .then(() => {
    return{ message: "updated successfully" };
  })
  .catch((e) => {
    return { message: e };
  });
}
exports.delete = (id) => {
  knex("students").where("student_id", id).del().then(()=>{
    return { success: `${id} deleted!` };
  }).catch((e) =>{
    console.log(e);
    return { message: e };
  });
}
