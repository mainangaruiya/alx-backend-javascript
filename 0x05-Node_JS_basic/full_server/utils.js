const fs = require('fs/promises');
/**
 * @param {String} dataPath The path to the CSV data file.
**/

const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf8')
    .then((data) => {
      // Process the data and generate the object of arrays
      const lines = data.split('\n');
      const students = [];
      const fieldCounts = {};

      for (const line of lines) {
        if (line === '') continue;
        const [firstName, field] = line.split(',');
        students.push({ firstName, field });

        if (!fieldCounts[field]) {
          fieldCounts[field] = [];
        }
        fieldCounts[field].push(student.firstName);
      }

      resolve(fieldCounts);
    })
    .catch((error) => {
      // Handle any errors and reject the Promise
      reject(error);
    });
});