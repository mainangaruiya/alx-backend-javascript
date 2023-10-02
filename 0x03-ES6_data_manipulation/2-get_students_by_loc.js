 const getStudentsByLocation = (student, city) => {
  const arrayObjects = students.filter((student) => student.location === city );
  return arrayObjects;
 };

 export default getStudentsByLocation;