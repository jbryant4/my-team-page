const css  = {

    generateCss: function (data) {
        return `
h2,h3 {
    text-align: center;
} 

.card {
    margin: auto;
}    

header {
    background-color: ${data};
    contain: content;
}

.section-title {
    color: light${data};
    background-color: grey;
    margin: 10px auto;
}


.card {
    box-shadow: -2px -5px ${data};
}
        
    `} 
}

module.exports = css;