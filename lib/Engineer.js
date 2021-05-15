const Employee = require('./Employee')

class Engineer extends Employee {
    constructor (name,id,email,githubId){

    super(name,id,email);
    
    this.githubId = githubId;
    
    }

    getGithubId () {
        return this.githubId
    };

    getRole() {
        return 'Engineer'
    };

}

module.exports = Engineer