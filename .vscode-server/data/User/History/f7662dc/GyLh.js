// Write your solution in this file!
const employee ={
    name: "Abiud" ,
    streetAdress: "482 maua" 
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Example usage:
  //const employee = { name: "John Doe", streetAddress: "123 Main St" };
 // const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");

 // This function updates an employee object destructively (mutates the original object)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // This function deletes a key from an employee object non-destructively
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // This function deletes a key from an employee object destructively (mutates the original object)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }