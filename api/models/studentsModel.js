const knex = require("../database/db");

exports.getAll = () => {
 knex.select().from("students").then((data)=>{
    return data;
  }).catch((e) =>{ 
    console.error(e);
    return { message: e };
  });
}
exports.get = (id) => {
  knex.select().from("students").where("students_id", id).then((data) => {
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
    students_address: newData.students_address
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