const knex = require("./db");

exports.createDatabase = async () => {
	await knex.schema.createTable('courses', table => {
		table.increments('course_id').primary();
		table.string('course_name').unique().notNullable();
	})
		.then(() => {
			console.log('Courses Table created');
			knex.schema.createTable('students', table => {
				table.increments('student_id').primary()
				table.string('student_name').notNullable();
				table.string('student_email').notNullable().unique();
				table.string('student_lastname').notNullable();
				table.string('student_birthday').notNullable();
				table.string('student_cpf').notNullable().unique();
				table.string('student_gender');
				table.string('student_cep').notNullable();
				table.string('student_country').notNullable();
				table.string('student_street').notNullable();
				table.string('student_neighborhood');
				table.string('student_number');
				table.string('student_complement');
				table.string('student_city');
				table.string('student_state');
				table.timestamp('created_at').defaultTo(knex.fn.now());
			})
				.then(() => {
					console.log('Students Table created');
					knex.schema.createTable('studentsCourses', table => {
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
				})
				.catch(err => console.error(err));
		})
		.catch(err => console.error(err));
}
