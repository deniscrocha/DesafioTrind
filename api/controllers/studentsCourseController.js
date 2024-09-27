const express = require("express");
const router = express.Router();
const service = require("../services/studentsCoursesService");

router.get("/:id", service.getById);
router.post("/", service.create);
router.delete("/:id", service.delete);

module.exports = router;
