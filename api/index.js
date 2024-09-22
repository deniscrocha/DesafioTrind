const express = require("express");
const knex = require("./database/db");
// const coursesRouter = require("./routes/coursesRoute");
// const addressRouter = require("./routes/addressRoute");
const studentsRouter = require("./routes/studentsRoute");
const { createDatabase } = require("./database/tableCreation");
const app = express();
const port = 3000;
knex.schema.hasTable('students').then(function (exists) {
	if (!exists) {
		createDatabase();
	}
  });

app.use("/students/", studentsRouter);
// app.use("/courses/", coursesRouter);
// app.use("/address/", addressRouter);

app.listen(port, () =>{
	console.log("Listen on port: ", port);
})