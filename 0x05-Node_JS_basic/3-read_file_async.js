const fs = require('fs/promises');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf8')
    .then((data) => {
      const lines = data.split('\n');
      const students = [];

      for (const line of lines) {
        if (line === '') continue;

        const [firstName, field] = line.split(',');
        students.push({ firstName, field });
      }

      const numberOfStudents = students.length;
      console.log(`Number of students: ${numberOfStudents}`);

      const fieldCounts = {};
      for (const student of students) {
        const field = student.field;
        if (!fieldCounts[field]) {
          fieldCounts[field] = [];
        }
        fieldCounts[field].push(student.firstName);
      }

      for (const field in fieldCounts) {
        const numberOfStudentsInField = fieldCounts[field].length;
        const listOfFirstNames = fieldCounts[field].join(', ');
        console.log(`Number of students in ${field}: ${numberOfStudentsInField}. List: ${listOfFirstNames}`);
      }

      resolve(students);
    })
    .catch((error) => {
      console.error('Cannot load the database');
      reject(error);
    });
});

module.exports = countStudents;
