const { Intern } = require('../lib/Intern');

test('Creates new Intern', () => {
    const employee = new Intern();

    expect(employee.name).toBe();
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
})

test('Check methods for Intern', () => {
    const employee = new Intern();

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    expect(employee.getRole()).toBe('Intern');
})