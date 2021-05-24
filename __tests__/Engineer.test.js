const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('joe', 95201, 'email@google.com','gitId')
    
    expect(typeof engineer.name).toBe('string')
    expect(typeof engineer.id).toBe('number');
    expect(typeof engineer.email).toBe('string');
    expect(typeof engineer.githubId).toBe('string')

    
});

test('get engineer name',() => {
    const engineer = new Engineer('joe', 95201, 'email@google.com','gitId')

    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()));
});

test('get engineer Id',() => {
    const engineer = new Engineer('joe', 95201, 'email@google.com','gitId')

    expect(engineer.getId()).toEqual(engineer.id);
});

test('get engineer Email',() => {
    const engineer = new Engineer('joe', 95201, 'email@google.com','gitId')

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});

test('get engineer github Id',() => {
    const engineer = new Engineer('joe', 95201, 'email@google.com','gitId')

    expect(engineer.getGithubId()).toEqual(expect.stringContaining(engineer.githubId.toString()));
});

test('get engineer Role',() => {
    const engineer = new Engineer('joe', '95201', 'email@google.com','gitId')

    expect(engineer.getRole()).toBe('Engineer');
});

module.exports = Engineer;