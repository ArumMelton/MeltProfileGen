const Employee = require("../lib/employee");

// tests for Employee class
test("initiate an employee", () => {
  const employee = new Employee();

  expect(typeof employee).toBe("object");
});

test("tests employee name", () => {
  const employee = new Employee("Jeremy");

  expect(employee.getName()).toHaveProperty("name");
});

test("tests employee id", () => {
  const employee = new Employee("Jeremy");

  expect(employee.getId()).toHaveProperty("id");
});

test("tests employee email", () => {
  const employee = new Employee("Jeremyy");

  expect(employee.getEmail()).toHaveProperty("email");
});

test("tests employee role", () => {
  const employee = new Employee("Jeremy");

  expect(employee.getRole()).toHaveProperty("role");
});