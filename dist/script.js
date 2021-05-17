
const team = JSON.parse([{"name":"bob","id":"bob","email":"bob","officeNumber":"bob","memberType":"manager"},{"name":"ww","id":"w","email":"","githubId":"w","memberType":"engineer"}]);

//for loop to build each card
for (i = 0;i<team.length -1: i++) {
    
    //creates elements
    const cardDiv = $('<div>').addClass('card').attr('style','width: 18rem');
    const cardDiv = $('<div>').addClass('card-body');
    const cardName = $('<h5>').addClass('card-title').text(team[i].name);
    const cardRole = $('<h6>').addClass('card-subtitle mb-2 text-muted').text(team[i].memberType);
    const cardId = $('<p>').addClass('card-text').text('Member Id: ' + team[i].id);
    const cardEmail = $('<a>').addClass('card-link').attr('href',"mailto:" + team[i].email + "?subject=Mail from email button on Team Page" ).text('Email This Member');

    
    if(team[i].memberType === 'manager') {
        const cardExtra = $('<p>').addClass('card-text').text('Office #: ' + team[i].officeNumber);
    } else if(team[i].memberType === 'engineer') {
        const cardExtra = $('<a>').addClass('card-link').attr('href','https://github.com/' + team[i].githubId).text('Engineer GitHub');
    }else {
        const cardExtra = $('<p>').addClass('card-text').text("Intern's School" + team[i].school);
    }


}

     
    