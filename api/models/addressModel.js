const knex = require("../database/db");

exports.get = (id) => {
  knex.select().from("address").where("address_id", id).then((data) => {
    return data;
  }).catch((e) =>{
    console.error(e);
    return { message: e };
  });
}
exports.create = (data) => {
  knex("address")
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
  knex("address")
  .where("id", id)
  .update({
    address_cep: newData.address_cep,
    address_country: newData.address_country,
    address_street: newData.address_street,
    address_neighborhood: newData.address_neighborhood,
    address_number: newData.address_number,
    address_complement: newData.address_complement,
    address_city: newData.address_city,
    address_state: newData.address_state
  })
  .then(() => {
    return{ message: "updated successfully" };
  })
  .catch((e) => {
    return { message: e };
  });
}
exports.delete = (id) => {
  knex("address").where("address_id", id).del().then(()=>{
    return { success: `${id} deleted!` };
  }).catch((e) =>{
    console.log(e);
    return { message: e };
  });
}