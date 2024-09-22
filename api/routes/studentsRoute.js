const express = require("express");
const students = require("../controllers/studentsController");
const router = express.Router();

router.get("/", students.getAll);
router.get("/:id", students.get);
router.post("/create", students.create);
router.put("/update/:id", students.update);
router.delete("/delete/:id", students.delete);

module.exports = router;