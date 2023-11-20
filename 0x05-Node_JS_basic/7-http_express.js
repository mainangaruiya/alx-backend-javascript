const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

const databasePath = process.argv[2];

app.get('/', (req, res) => {
	res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
	countStudents(databasePath)
	.then((data) => {
		let num =0;
		let response = '';

		for (const[key, value] of Object.entries(data)){
			num += value.length;
      		response += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
      	
		}
		response = `This is the list of our students\nNumber of students: ${num}\n${response.slice(0, -1)}`;
      
      // Send the response to the client
      res.send(response);
	})
	.catch((error) => {
      // If an error occurs, send an error message as the response
      res.send(`This is the list of our students\n${error.message}`);
    });
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
module.exports = app;