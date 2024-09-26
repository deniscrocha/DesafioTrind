const express = require("express");
const knex = require("./database/db");
const { createDatabase } = require("./database/tableCreation");
const studentsRouter = require("./controllers/studentsController");
const linkRouter = require("./controllers/studentsCourseController");
const coursesRouter = require("./controllers/coursesController");

const app = express();
const port = 3000;
knex.schema.hasTable('students').then(function (exists) {
	if (!exists) {
		createDatabase();
	}
});

app.use("/students/", studentsRouter);
app.use("/courses/", coursesRouter);
app.use("/links/", linkRouter);

app.listen(port, () =>{
	console.log("Listen on port: ", port);
})
