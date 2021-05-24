
const team = JSON.parse(JSON.stringify([{"name":"David","id":"1","email":"email@gmail.com","officeNumber":"1","memberType":"manager"},{"name":"Joe","id":"95201","email":"joebryant614@gmail.com","githubId":"jbryant4","memberType":"engineer"},{"name":"Bod","id":"98","email":"asd","githubId":"asd","memberType":"engineer"},{"name":"Sam ","id":"15","email":"email@gmail.com","school":"mom school","memberType":"intern"},{"name":"Chaloote","id":"98","email":"email@gmail.com","school":"dads school","memberType":"intern"},{"name":"sldkf","id":"asdlkfjh","email":"asdf","school":"asdf","memberType":"intern"}]));

console.log(team)
//for loop to build each card
for (i = 0; i < team.length; i++) {

    //creates elements
    const cardDiv = $('<div>').addClass('card col-sm-12 col-md-4 col-lg-3').attr('style', 'width: 18rem');
    const cardBody = $('<div>').addClass('card-body');
    const cardName = $('<h5>').addClass('card-title').text(team[i].name);
    const cardRole = $('<h6>').addClass('card-subtitle mb-2 text-muted').text(team[i].memberType);
    const cardId = $('<p>').addClass('card-text').text('Member Id: ' + team[i].id);
    const cardEmail = $('<a>').addClass('card-link').attr('href', "mailto:" + team[i].email + "?subject=Mail from email button on Team Page").text('Email Member');

    const cardExtra = lastQuestion(team);
    

    //append all the components 
    cardBody.append(cardName);
    cardBody.append(cardRole);
    cardBody.append(cardExtra);
    cardBody.append(cardId);
    cardBody.append(cardEmail);
    

    cardDiv.append(cardBody);

    if (team[i].memberType === 'manager') {
        $('#manager').append(cardDiv);
    } else if (team[i].memberType === 'engineer') {
        $('#engineer').append(cardDiv);
    } else if(team[i].memberType === 'intern'){
        $('#intern').append(cardDiv);
    }
};

function lastQuestion(team) {
    let cardExtra;

    if (team[i].memberType === 'manager') {
        cardExtra = $('<p>').addClass('card-text').text('Office #: ' + team[i].officeNumber);  
    } else if (team[i].memberType === 'engineer') {
        cardExtra = $('<a>').addClass('card-link').attr('href', 'https://github.com/' + team[i].githubId).text('Engineer GitHub');  
    } else if (team[i].memberType === 'intern') {
        cardExtra = $('<p>').addClass('card-text').text("Intern's School" + team[i].school);
    };

    return cardExtra
    
};
    