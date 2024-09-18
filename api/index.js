const express = require("express");
const app = express();
const port = 3000;

app.get("/", (_, res) => {
	res.send("Olá mundo!");
})

app.listen(port, () =>{
	console.log("Listen on port: ", port);
})
