const fs = require('fs/promises');
/**
 * @param {String} dataPath The path to the CSV data file.
**/

const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  // Check if dataPath is not provided
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  // Check if dataPath is provided
  if (dataPath) {
    // Read the contents of the file asynchronously
    fs.readFile(dataPath, (err, data) => {
      // Handle errors during file reading
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      // Check if data is available
      if (data) {
        // Split the file content into lines
        const fileLines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        // Initialize an object to store student groups
        const studentGroups = {};
        // Extract field names from the first line of the file
        const dbFieldNames = fileLines[0].split(',');
        // Extract property names (excluding the last field)
        const studentPropNames = dbFieldNames
          .slice(0, dbFieldNames.length - 1);

        // Iterate through each line (excluding the first line)
        for (const line of fileLines.slice(1)) {
          // Split the line into individual values
          const studentRecord = line.split(',');
          // Extract property values (excluding the last field)
          const studentPropValues = studentRecord
            .slice(0, studentRecord.length - 1);
          // Extract the field name (last value in the line)
          const field = studentRecord[studentRecord.length - 1];

          // Initialize an array for the current field if not present
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }

          // Create an array of key-value pairs for each student
          const studentEntries = studentPropNames
            .map((propName, idx) => [propName, studentPropValues[idx]]);

          // Convert the array of key-value pairs to an object and push it to the corresponding field
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }

        // Resolve the promise with the studentGroups object
        resolve(studentGroups);
      }
    });
  }
});

// Export the readDatabase function as the default export of the module
export default readDatabase;