const express = require("express");
const courses = require("../controllers/coursesController");
const router = express.Router();

router.get("/", courses.getAll);
router.get("/:id", courses.get);
router.post("/create", courses.create);
router.delete("/delete/:id", courses.delete);

module.exports = router;
