const express = require("express");
const router = express.Router();
const address = require("../controllers/addressController");

router.get("/:id", address.get);
router.post("/create", address.create);
router.put("/update/:id", address.update);
router.delete("/delete/:id", address.delete);

module.exports = router;