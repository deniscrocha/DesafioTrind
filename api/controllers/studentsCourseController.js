const express = require("express");
const router = express.Router();
const service = require("../services/studentsCoursesService");

router.get("/:id", service.getById);
router.post("/:id", service.create);
router.delete("/:id", service.delete);

module.exports = router;
