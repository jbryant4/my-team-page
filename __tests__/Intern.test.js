const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('joe', 95201, 'email@google.com','school')
    
    expect(typeof intern.name).toBe('string')
    expect(typeof intern.id).toBe('number');
    expect(typeof intern.email).toBe('string');
    expect(typeof intern.school).toBe('string')

    
});

test('get intern name',() => {
    const intern = new Intern('joe', 95201, 'email@google.com','school')

    expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));
});

test('get intern Id',() => {
    const intern = new Intern('joe', 95201, 'email@google.com','school')

    expect(intern.getId()).toEqual(intern.id);
});

test('get intern Email',() => {
    const intern = new Intern('joe', 95201, 'email@google.com','school')

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
});

test('get intern school',() => {
    const intern = new Intern('joe', 95201, 'email@google.com','school')

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('get intern Role',() => {
    const intern = new Intern('joe', '95201', 'email@google.com','school')

    expect(intern.getRole()).toBe('Intern');
});

module.exports = Intern;