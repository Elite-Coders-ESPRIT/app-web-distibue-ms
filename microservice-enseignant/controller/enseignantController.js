const Enseignant = require("../models/enseignant");

// Opération de création (Create)
exports.createEnseignant = async (req, res) => {
	try {
		const nouvelEnseignant = new Enseignant(req.body);
		const enseignant = await nouvelEnseignant.save();
		res.status(201).json(enseignant);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Opération de lecture (Read)
exports.getAllEnseignants = async (req, res) => {
	try {
		const enseignants = await Enseignant.find();
		res.status(200).json(enseignants);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Opération de mise à jour (Update)
exports.updateEnseignant = async (req, res) => {
	try {
		const { id } = req.params;
		const enseignant = await Enseignant.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.status(200).json(enseignant);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Opération de suppression (Delete)
exports.deleteEnseignant = async (req, res) => {
	try {
		const { id } = req.params;
		await Enseignant.findByIdAndDelete(id);
		res.status(204).end();
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
