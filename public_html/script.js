/* global gen */
var teamList = ['Manchester City', 'Manchester United', 'Arsenal', 'Chelsea', 
                'Liverpool', 'Tottenham', 'Barcelona', 'Real Madrid', 
                'Athletico Madrid', 'Dortmund', 'Bayern Munich', 'PSG', 'Juventus'];

// Methods for generating a new random team from the teamList array.
function randomTeamGen() {
    var randomIndex = Math.floor(Math.random() * teamList.length);
    var randomTeam = teamList[randomIndex];
    return randomTeam;
}

var player1 = document.getElementById("player1-input").value;
var player2 = document.getElementById("player2-input").value;

function getPlayers() {
    document.getElementById('player1').innerHTML = 
        document.getElementById("player1-input").value;
    document.getElementById('player2').innerHTML = 
        document.getElementById("player2-input").value;
}