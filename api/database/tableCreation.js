const knex = require("./db");

exports.createDatabase = async () => {
  await knex.schema.createTable('address', table => {
      table.increments('address_id').primary();
      table.string('address_cep').notNullable();
      table.string('address_country').notNullable();
      table.string('address_street').notNullable();
      table.string('address_neighborhood');
      table.string('address_number');
      table.string('address_complement');
      table.string('address_city');
      table.string('address_state');
  })
    .then(() => console.log('Address Table created'))
    .catch(err => console.error(err));

  await knex.schema.createTable('courses', table => {
      table.increments('course_id').primary();
      table.string('course_name').notNullable();
  })
    .then(() => console.log('Courses Table created'))
    .catch(err => console.error(err));
  knex.schema.createTable('students', table => {
    table.increments('student_id').primary()
    table.string('student_name').notNullable();
    table.string('student_email').notNullable().unique();
    table.string('student_lastname').notNullable();
    table.string('student_birthday').notNullable();
    table.string('student_cpf').notNullable().unique();
    table.string('student_gender');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.integer('student_address').unsigned();
    table.foreign('student_address')
      .references('address_id')
      .inTable('address')
      .onDelete('CASCADE');
  })
    .then(() => console.log('Students Table created'))
    .catch(err => console.error(err));

  await knex.schema.createTable('studentsCourses', table => {
      table.increments('studentsCourses_id').primary()
      table.integer('student_id').unsigned();
      table.integer('course_id').unsigned();
      table.string('course_conclusion_date');
      table.foreign('student_id')
          .references('student_id')
          .inTable('students');
      table.foreign('course_id')
          .references('course_id')
          .inTable('courses');
  })
    .then(() => console.log('Students Courses Relationship created'))
    .catch(err => console.error(err));
}