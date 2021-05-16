const javascript = {

    generateJava: function (data) {
        return ` 
        ${data[0].name}
        ${data[0].id}
        ${data[0].email}
        ${data[0].officeNumber}
        

        `
    }
}

module.exports = javascript;