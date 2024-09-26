const knex = require("../database/db");

exports.getAll = () => {
 knex.select().from("courses").then((data)=>{
    return data;
  }).catch((e) =>{ 
    console.error(e);
    return { message: e };
  });
}
exports.get = (id) => {
  knex.select().from("courses").where("course_id", id).then((data) => {
    return data;
  }).catch((e) =>{
    console.error(e);
    return { message: e };
  });
}
exports.create = (data) => {
  knex("courses")
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
exports.update = (id, data) => {
  knex("courses")
    .insert(data)
		.where("course_id", id)
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
  knex("courses").where("course_id", id).del().then(()=>{
    return { success: `${id} deleted!` };
  }).catch((e) =>{
    console.log(e);
    return { message: e };
  });
}
