/* global gen */

var player1 = document.getElementById("player1-input");
var player2 = document.getElementById("player2-input");
var teamList = ['Manchester City', 'Manchester United', 'Arsenal', 'Chelsea', 
                'Liverpool', 'Tottenham', 'Barcelona', 'Real Madrid', 
                'Athletico Madrid', 'Dortmund', 'Bayern Munich', 'PSG', 'Juventus'];

// Methods for generating a new random team from the teamList array.
//var randomIndex = Math.floor(Math.random() * teamList.length);
//var randomTeam = teamList[randomIndex];

function randomTeamGen() {
    var randomIndex = Math.floor(Math.random() * teamList.length);
    var randomTeam = teamList[randomIndex];
    return randomTeam;
}