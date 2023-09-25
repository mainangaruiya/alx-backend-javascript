export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments: function (employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
