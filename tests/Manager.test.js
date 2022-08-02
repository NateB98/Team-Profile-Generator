const { Manager } = require('../lib/Manager')

test('Creates new Manager', () => {
  const employee = new Manager();
  
  expect(employee.name).toBe();
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.number).toEqual(expect.any(Number));
});

test('check methods for manager', () => {
  const employee = new Manager();

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getOfficeNumber()).toBe(employee.number);
  expect(employee.getRole()).toBe('Manager');
});