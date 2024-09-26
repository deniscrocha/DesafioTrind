const express = require("express");
const router = express.Router();
const service = require("../services/studentsService");

router.get("/", service.get);
router.get("/:id", service.getById);
router.post("/", service.create);
router.put("/:id", service.update);
router.delete("/:id", service.delete);

module.exports = router
