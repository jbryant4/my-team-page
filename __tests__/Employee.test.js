const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('joe', 95201, 'email@google.com')
    
    expect(typeof employee.name).toBe('string')
    expect(typeof employee.id).toBe('number');
    expect(typeof employee.email).toBe('string');
    
});

test('get employee name',() => {
    const employee = new Employee('joe', 95201, 'email@google.com')

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test('get employee Id',() => {
    const employee = new Employee('joe', 95201, 'email@google.com')

    expect(employee.getId()).toEqual(employee.id);
});

test('get employee Email',() => {
    const employee = new Employee('joe', 95201, 'email@google.com')

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});


test('get employee Role',() => {
    const employee = new Employee('joe', 95201, 'email@google.com')

    expect(employee.getRole()).toBe('Employee');
});

module.exports = Employee;