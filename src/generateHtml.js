const html = {

    generateHtml: function (data) {
        return` 
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- link bootstrap and other style sheets -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="./style.css" />
    <title>teampage</title>
</head>
<body>
    <header>
        <h2> ${data} Team Page</h2>
    </header>
    <div class='container'>
        <div class="row" id="manager">
            <h3 class="col-12 section-title">Team Manager</h3>
        </div>
        <div class="row" id="engineer">
            <h3 class="col-12 section-title">Team Engineer(s)</h3>
        </div>
        <div class="row" id="intern">
            <h3 class="col-12 section-title">Team Intern(s)</h3>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="./script.js"></script>
</body>
</html> 
    `}
}

module.exports = html;


