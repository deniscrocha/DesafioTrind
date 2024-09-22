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
exports.delete = (id) => {
  knex("studentsCourses").where("id", id).del().then(()=>{
    return { success: `${id} deleted!` };
  }).catch((e) =>{
    console.log(e);
    return { message: e };
  });
}