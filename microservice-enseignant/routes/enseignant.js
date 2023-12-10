const express = require("express");
const router = express.Router();
const enseignantController = require("../controller/enseignantController");

// Routes CRUD
router.post("/", enseignantController.createEnseignant);
router.get("/", enseignantController.getAllEnseignants);
router.put("/:id", enseignantController.updateEnseignant);
router.delete("/:id", enseignantController.deleteEnseignant);

module.exports = router;
