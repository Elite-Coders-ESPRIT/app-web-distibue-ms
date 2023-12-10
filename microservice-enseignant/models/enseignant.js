// Importer le module Mongoose
const mongoose = require("mongoose");

// Définir le schéma pour l'entité enseignant
const enseignantSchema = new mongoose.Schema({
	nom: {
		type: String,
		required: true,
	},
	prenom: {
		type: String,
		required: true,
	},
	cin: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	adresse: {
		type: String,
		required: true,
	},
});

// Créer le modèle Enseignant à partir du schéma
const Enseignant = mongoose.model("Enseignant", enseignantSchema);

// Exporter le modèle pour pouvoir l'utiliser dans d'autres fichiers
module.exports = Enseignant;
