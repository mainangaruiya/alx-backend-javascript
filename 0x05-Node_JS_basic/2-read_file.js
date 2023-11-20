const fs = require('fs');

/**
 * Count students from CSV file
 * @param {String} dataPath The path to the CSV data file.
 */
function countStudents(dataPath) {
  try {
    const data = fs.readFileSync(dataPath, 'utf8');
    const lines = data.split('\n');
    const students = [];

    for (const line of lines) {
      if (line.trim() === '') continue; // Skip empty lines
      const [firstName, field] = line.split(',');
      students.push({ firstName, field });
    }

    const numberOfStudents = students.length;
    console.log(`Number of students: ${numberOfStudents}`);

    const fieldsCounts = {};
    for (const student of students) {
      const field = student.field;
      if (!fieldsCounts[field]) {
        fieldsCounts[field] = [];
      }
      fieldsCounts[field].push(student.firstName);
    }

    for (const field in fieldsCounts) {
      const numberOfStudentsInField = fieldsCounts[field].length;
      const listOfFirstNames = fieldsCounts[field].join(', ');
      console.log(`Number of students in ${field}: ${numberOfStudentsInField}. List: ${listOfFirstNames}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
    throw error;
  }
}
module.exports = countStudents;
// Example usage:
// countStudents('database.csv');
