const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const enseignantRoutes = require("./routes/enseignant");
const eureka = require("eureka-js-client").Eureka;
const eurekaConfig = require("./eurekaConfig");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connecter à la base de données MongoDB
mongoose
	.connect(
		"mongodb+srv://micro:micro123@cluster0.ibezkgc.mongodb.net/microservice?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => console.log("Connexion à MongoDB réussie !"))
	.catch(() => console.log("Connexion à MongoDB échouée !"));

// Configurer le client Eureka
const client = new eureka(eurekaConfig);

// Démarrer le client Eureka
client.start();

// Utiliser les routes définies pour l'entité enseignant
app.use("/enseignant", enseignantRoutes);

// Démarrer le serveur
app.listen(PORT, () => {
	console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
