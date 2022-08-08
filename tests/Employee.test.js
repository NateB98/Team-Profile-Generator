const Employee = require('../lib/Employee')

test('Creates new employee', () => {
  const employee = new Employee();

  expect(employee.name).toBe();
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
})

test('Check methods for Employee', () => {
  const employee = new Employee();

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.Role()).toBe('Employee');
})