const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

app.use(bodyParser.json()); // Middleware to parse JSON requests
app.use(cors());
app.use(express.json());

app.post('/writedata', (req, res) => {
	const jsonData = req.body.text + '\n';

	const filePath = path.join(__dirname, 'data.doc'); // Absolute path to data.txt

	fs.appendFile(filePath, jsonData, 'utf8', (err) => {
		if (err) {
			console.error('Error writing file:', err);
			res.status(500).send('Error writing file');
		} else {
			console.log('Data successfully written to the file');
			res.status(200).send('Data written to file');
		}
	});
});

app.listen(3000, () => {
	console.log('Backend running on 3000');
});
