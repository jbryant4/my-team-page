const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('joe', 95201, 'email@google.com',1)
    
    expect(typeof manager.name).toBe('string')
    expect(typeof manager.id).toBe('number');
    expect(typeof manager.email).toBe('string');
    expect(typeof manager.officeNumber).toBe('number')

    
});

test('get manager name',() => {
    const manager = new Manager('joe', 95201, 'email@google.com',1)

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()));
});

test('get manager Id',() => {
    const manager = new Manager('joe', 95201, 'email@google.com',1)

    expect(manager.getId()).toEqual(manager.id);
});

test('get manager Email',() => {
    const manager = new Manager('joe', 95201, 'email@google.com',1)

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
});


test('get manager Role',() => {
    const manager = new Manager('joe', '95201', 'email@google.com',1)

    expect(manager.getRole()).toBe('Manager');
});

module.exports = Manager;