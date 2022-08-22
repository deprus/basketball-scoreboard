let homeScoreEl = document.getElementById("home-score");
let awayScoreEl = document.getElementById("away-score");
let homeTitleEl = document.getElementById("home-title");
let awayTitleEl = document.getElementById("away-title");
let homeScore = 0;
let awayScore = 0;
function hAddPlus1() {
    homeScore += 1;
    homeScoreEl.innerText = homeScore;
    if (homeScore > awayScore) {
        homeTitleEl.style.color = "yellow"
        awayTitleEl.style.color = "white"
    } else if (homeScore === awayScore) {
        homeTitleEl.style.color = "white"
        awayTitleEl.style.color = "white"
    } else {
        homeTitleEl.style.color = "white"
    }
}
function hAddPlus2() {
    homeScore += 2
    homeScoreEl.innerText = homeScore
    if (homeScore > awayScore) {
        homeTitleEl.style.color = "yellow"
        awayTitleEl.style.color = "white"
    } else if (homeScore === awayScore) {
        homeTitleEl.style.color = "white"
        awayTitleEl.style.color = "white"
    } else {
        homeTitleEl.style.color = "white"
    }
}
function hAddPlus3() {
    homeScore += 3
    homeScoreEl.innerText = homeScore
    if (homeScore > awayScore) {
        homeTitleEl.style.color = "yellow"
        awayTitleEl.style.color = "white"
    } else if (homeScore === awayScore) {
        homeTitleEl.style.color = "white"
        awayTitleEl.style.color = "white"
    } else {
        homeTitleEl.style.color = "white"
    }
}
function aAddPlus1() {
    awayScore += 1
    awayScoreEl.innerText = awayScore
    if (awayScore > homeScore) {
        awayTitleEl.style.color = "yellow"
        homeTitleEl.style.color = "white"
    } else if (awayScore === homeScore) {
        homeTitleEl.style.color = "white"
        homeTitleEl.style.color = "white"
    } else {
        awayTitleEl.style.color = "white"
    }
}
function aAddPlus2() {
    awayScore += 2
    awayScoreEl.innerText = awayScore
    if (awayScore > homeScore) {
        awayTitleEl.style.color = "yellow"
        homeTitleEl.style.color = "white"
    } else if (awayScore === homeScore) {
        homeTitleEl.style.color = "white"
        homeTitleEl.style.color = "white"
    } else {
        awayTitleEl.style.color = "white"
    }
}
function aAddPlus3() {
    awayScore += 3
    awayScoreEl.innerText = awayScore
    if (awayScore > homeScore) {
        awayTitleEl.style.color = "yellow"
        homeTitleEl.style.color = "white"
    } else if (awayScore === homeScore) {
        homeTitleEl.style.color = "white"
        homeTitleEl.style.color = "white"
    } else {
        awayTitleEl.style.color = "white"
    }
}
function newGame() {
    homeScore = 0
    awayScore = 0
    awayTitleEl.style.color = "white"
    homeTitleEl.style.color = "white"
    homeScoreEl.innerText = homeScore
    awayScoreEl.innerText = awayScore
}