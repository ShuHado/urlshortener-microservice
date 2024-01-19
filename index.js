import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
	res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/shorturl", function (req, res) {
	const url = req.body.url;
	const short_url = Math.floor(Math.random() * 100);
	res.json({ original_url: url, short_url: short_url });
});

app.listen(port, function () {
	console.log(`Listening on port ${port}`);
});
