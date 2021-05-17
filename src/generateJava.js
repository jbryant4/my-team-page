const javascript = {

    generateJava: function (data) {
        return `
        const team = JSON.parse(${ data });

        //for loop to build each card
        for (i = 0; i < team.length - 1: i++) {

            //creates elements
            const cardDiv = $('<div>').addClass('card').attr('style', 'width: 18rem');
            const cardBody = $('<div>').addClass('card-body');
            const cardName = $('<h5>').addClass('card-title').text(team[i].name);
            const cardRole = $('<h6>').addClass('card-subtitle mb-2 text-muted').text(team[i].memberType);
            const cardId = $('<p>').addClass('card-text').text('Member Id: ' + team[i].id);
            const cardEmail = $('<a>').addClass('card-link').attr('href', "mailto:" + team[i].email + "?subject=Mail from email button on Team Page").text('Email This Member');


            if (team[i].memberType === 'manager') {
                const cardExtra = $('<p>').addClass('card-text').text('Office #: ' + team[i].officeNumber);
            } else if (team[i].memberType === 'engineer') {
                const cardExtra = $('<a>').addClass('card-link').attr('href', 'https://github.com/' + team[i].githubId).text('Engineer GitHub');
            } else {
                const cardExtra = $('<p>').addClass('card-text').text("Intern's School" + team[i].school);
            }

            //append all the components 
            cardBody.append(cardName);
            cardBody.append(cardRole);
            cardBody.append(cardId);
            cardBody.append(cardEmail);
            cardBody.append(cardExtra);

            cardDiv.append(cardBody);

            if (team[i].memberType === 'manager') {
                $('#manager').append(cardDiv);
            } else if (team[i].memberType === 'engineer') {
                $('#engineer').append(cardDiv);
            } else {
                $('#intern').append(cardDiv);
            }
        }
    `}

module.exports = javascript;

{/* <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

<a href="mailto:bryantc0der@gmail.com?subject=Mail from email button on Portfolio">bryantc0der@gmail.com</a> */}