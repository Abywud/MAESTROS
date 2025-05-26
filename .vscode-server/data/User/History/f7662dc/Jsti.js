// Write your solution in this file!
const employee ={
    name: "Abiud" ,
    streetAdress: "482 maua" 
}

unction updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Example usage:
  const employee = { name: "John Doe", streetAddress: "123 Main St" };
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");