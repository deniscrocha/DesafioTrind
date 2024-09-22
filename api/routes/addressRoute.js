const express = require("express");
const address = require("../controllers/addressController");
const router = express.Router();

router.get("/address/", address.getAll);
router.get("/address/:id", address.get);
router.post("/address/create", address.create);
router.put("/address/update/:id", address.update);
router.delete("/address/delete/:id", address.delete);

module.exports = router;