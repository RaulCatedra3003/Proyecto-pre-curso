/*
The following file contains:
- Diferent variables to use in the script
- A function to fills the table.
- A function to retry the test.
- A function to order the ranking.
- A function to hidde the ranking when the user refresh the page.
*/

//Define variables
var usersScores = JSON.parse(localStorage.getItem("usersScores"));
var names = JSON.parse(localStorage.getItem("usersNames"));
var actualName = names[(names.length - 1)];
var isHidden = localStorage.getItem("isHidden");

const userName1 = document.getElementById("userName1");
const userScore1 = document.getElementById("userScore1");
const userName2 = document.getElementById("userName2");
const userScore2 = document.getElementById("userScore2");
const userName3 = document.getElementById("userName3");
const userScore3 = document.getElementById("userScore3");
const userName4 = document.getElementById("userName4");
const userScore4 = document.getElementById("userScore4");
const userName5 = document.getElementById("userName5");
const userScore5 = document.getElementById("userScore5");
const userName6 = document.getElementById("userName6");
const userScore6 = document.getElementById("userScore6");
const userName7 = document.getElementById("userName7");
const userScore7 = document.getElementById("userScore7");
const userName8 = document.getElementById("userName8");
const userScore8 = document.getElementById("userScore8");
const userName9 = document.getElementById("userName9");
const userScore9 = document.getElementById("userScore9");
const userName10 = document.getElementById("userName10");
const userScore10 = document.getElementById("userScore10");

//Call the function that fills the table if it´s the first time that the user is in the page.
if (isHidden == "false") {
    fillTable();
}

//Define the function who fills the table whit the dates of the actual user and nine more users
function fillTable(){
    showColumns();
    fillColumns();

    function showColumns() {
        if (usersScores.length === 1) {
            userName1.style.display = "table-cell";
            userScore1.style.display = "table-cell";
        } else if (usersScores.length === 2) {
            userName1.style.display = "table-cell";
            userScore1.style.display = "table-cell";
            userName2.style.display = "table-cell";
            userScore2.style.display = "table-cell";
        } else if (usersScores.length === 3) {
            userName1.style.display = "table-cell";
            userScore1.style.display = "table-cell";
            userName2.style.display = "table-cell";
            userScore2.style.display = "table-cell";
            userName3.style.display = "table-cell";
            userScore3.style.display = "table-cell";
        } else if (usersScores.length === 4) {
            userName1.style.display = "table-cell";
            userScore1.style.display = "table-cell";
            userName2.style.display = "table-cell";
            userScore2.style.display = "table-cell";
            userName3.style.display = "table-cell";
            userScore3.style.display = "table-cell";
            userName4.style.display = "table-cell";
            userScore4.style.display = "table-cell";
        } else if (usersScores.length === 5) {
            userName1.style.display = "table-cell";
            userScore1.style.display = "table-cell";
            userName2.style.display = "table-cell";
            userScore2.style.display = "table-cell";
            userName3.style.display = "table-cell";
            userScore3.style.display = "table-cell";
            userName4.style.display = "table-cell";
            userScore4.style.display = "table-cell";
            userName5.style.display = "table-cell";
            userScore5.style.display = "table-cell";
        } else if (usersScores.length === 6) {
            userName1.style.display = "table-cell";
            userScore1.style.display = "table-cell";
            userName2.style.display = "table-cell";
            userScore2.style.display = "table-cell";
            userName3.style.display = "table-cell";
            userScore3.style.display = "table-cell";
            userName4.style.display = "table-cell";
            userScore4.style.display = "table-cell";
            userName5.style.display = "table-cell";
            userScore5.style.display = "table-cell";
            userName6.style.display = "table-cell";
            userScore6.style.display = "table-cell";
        } else if (usersScores.length === 7) {
            userName1.style.display = "table-cell";
            userScore1.style.display = "table-cell";
            userName2.style.display = "table-cell";
            userScore2.style.display = "table-cell";
            userName3.style.display = "table-cell";
            userScore3.style.display = "table-cell";
            userName4.style.display = "table-cell";
            userScore4.style.display = "table-cell";
            userName5.style.display = "table-cell";
            userScore5.style.display = "table-cell";
            userName6.style.display = "table-cell";
            userScore6.style.display = "table-cell";
            userName7.style.display = "table-cell";
            userScore7.style.display = "table-cell";
        } else if (usersScores.length === 8) {
            userName1.style.display = "table-cell";
            userScore1.style.display = "table-cell";
            userName2.style.display = "table-cell";
            userScore2.style.display = "table-cell";
            userName3.style.display = "table-cell";
            userScore3.style.display = "table-cell";
            userName4.style.display = "table-cell";
            userScore4.style.display = "table-cell";
            userName5.style.display = "table-cell";
            userScore5.style.display = "table-cell";
            userName6.style.display = "table-cell";
            userScore6.style.display = "table-cell";
            userName7.style.display = "table-cell";
            userScore7.style.display = "table-cell";
            userName8.style.display = "table-cell";
            userScore8.style.display = "table-cell";
        } else if (usersScores.length === 9) {
            userName1.style.display = "table-cell";
            userScore1.style.display = "table-cell";
            userName2.style.display = "table-cell";
            userScore2.style.display = "table-cell";
            userName3.style.display = "table-cell";
            userScore3.style.display = "table-cell";
            userName4.style.display = "table-cell";
            userScore4.style.display = "table-cell";
            userName5.style.display = "table-cell";
            userScore5.style.display = "table-cell";
            userName6.style.display = "table-cell";
            userScore6.style.display = "table-cell";
            userName7.style.display = "table-cell";
            userScore7.style.display = "table-cell";
            userName8.style.display = "table-cell";
            userScore8.style.display = "table-cell";
            userName9.style.display = "table-cell";
            userScore9.style.display = "table-cell";
        } else {
            userName1.style.display = "table-cell";
            userScore1.style.display = "table-cell";
            userName2.style.display = "table-cell";
            userScore2.style.display = "table-cell";
            userName3.style.display = "table-cell";
            userScore3.style.display = "table-cell";
            userName4.style.display = "table-cell";
            userScore4.style.display = "table-cell";
            userName5.style.display = "table-cell";
            userScore5.style.display = "table-cell";
            userName6.style.display = "table-cell";
            userScore6.style.display = "table-cell";
            userName7.style.display = "table-cell";
            userScore7.style.display = "table-cell";
            userName8.style.display = "table-cell";
            userScore8.style.display = "table-cell";
            userName9.style.display = "table-cell";
            userScore9.style.display = "table-cell";
            userName10.style.display = "table-cell";
            userScore10.style.display = "table-cell";
        }
    }

    function fillColumns() {
        const searchLastName = usersScores.filter(nombre => nombre.nombre === actualName);
        const searchNotLastName = usersScores.filter(nombre => nombre.nombre != actualName);

        if (usersScores.length === 1) {
            userName1.innerText = searchLastName[0].nombre;
            userScore1.innerText = (searchLastName[0].score.toFixed(2)) + "/10";
            userName1.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userScore1.style.backgroundColor = "rgba(37, 100, 218, .2)";
        } else if (usersScores.length === 2) {
            userName1.innerText = searchLastName[0].nombre;
            userScore1.innerText = (searchLastName[0].score.toFixed(2)) + "/10";
            userName1.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userScore1.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userName2.innerText = searchNotLastName[(searchNotLastName.length - 1)].nombre;
            userScore2.innerText = (searchNotLastName[(searchNotLastName.length - 1)].score.toFixed(2)) + "/10";
        } else if (usersScores.length === 3) {
            userName1.innerText = searchLastName[0].nombre;
            userScore1.innerText = (searchLastName[0].score.toFixed(2)) + "/10";
            userName1.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userScore1.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userName2.innerText = searchNotLastName[(searchNotLastName.length - 1)].nombre;
            userScore2.innerText = (searchNotLastName[(searchNotLastName.length - 1)].score.toFixed(2)) + "/10";
            userName3.innerText = searchNotLastName[(searchNotLastName.length - 2)].nombre;
            userScore3.innerText = (searchNotLastName[(searchNotLastName.length - 2)].score.toFixed(2)) + "/10";
        } else if (usersScores.length === 4) {
            userName1.innerText = searchLastName[0].nombre;
            userScore1.innerText = (searchLastName[0].score.toFixed(2)) + "/10";
            userName1.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userScore1.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userName2.innerText = searchNotLastName[(searchNotLastName.length - 1)].nombre;
            userScore2.innerText = (searchNotLastName[(searchNotLastName.length - 1)].score.toFixed(2)) + "/10";
            userName3.innerText = searchNotLastName[(searchNotLastName.length - 2)].nombre;
            userScore3.innerText = (searchNotLastName[(searchNotLastName.length - 2)].score.toFixed(2)) + "/10";
            userName4.innerText = searchNotLastName[(searchNotLastName.length - 3)].nombre;
            userScore4.innerText = (searchNotLastName[(searchNotLastName.length - 3)].score.toFixed(2)) + "/10";
        } else if (usersScores.length === 5) {
            userName1.innerText = searchLastName[0].nombre;
            userScore1.innerText = (searchLastName[0].score.toFixed(2)) + "/10";
            userName1.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userScore1.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userName2.innerText = searchNotLastName[(searchNotLastName.length - 1)].nombre;
            userScore2.innerText = (searchNotLastName[(searchNotLastName.length - 1)].score.toFixed(2)) + "/10";
            userName3.innerText = searchNotLastName[(searchNotLastName.length - 2)].nombre;
            userScore3.innerText = (searchNotLastName[(searchNotLastName.length - 2)].score.toFixed(2)) + "/10";
            userName4.innerText = searchNotLastName[(searchNotLastName.length - 3)].nombre;
            userScore4.innerText = (searchNotLastName[(searchNotLastName.length - 3)].score.toFixed(2)) + "/10";
            userName5.innerText = searchNotLastName[(searchNotLastName.length - 4)].nombre;
            userScore5.innerText = (searchNotLastName[(searchNotLastName.length - 4)].score.toFixed(2)) + "/10";
        } else if (usersScores.length === 6) {
            userName1.innerText = searchLastName[0].nombre;
            userScore1.innerText = (searchLastName[0].score.toFixed(2)) + "/10";
            userName1.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userScore1.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userName2.innerText = searchNotLastName[(searchNotLastName.length - 1)].nombre;
            userScore2.innerText = (searchNotLastName[(searchNotLastName.length - 1)].score.toFixed(2)) + "/10";
            userName3.innerText = searchNotLastName[(searchNotLastName.length - 2)].nombre;
            userScore3.innerText = (searchNotLastName[(searchNotLastName.length - 2)].score.toFixed(2)) + "/10";
            userName4.innerText = searchNotLastName[(searchNotLastName.length - 3)].nombre;
            userScore4.innerText = (searchNotLastName[(searchNotLastName.length - 3)].score.toFixed(2)) + "/10";
            userName5.innerText = searchNotLastName[(searchNotLastName.length - 4)].nombre;
            userScore5.innerText = (searchNotLastName[(searchNotLastName.length - 4)].score.toFixed(2)) + "/10";
            userName6.innerText = searchNotLastName[(searchNotLastName.length - 5)].nombre;
            userScore6.innerText = (searchNotLastName[(searchNotLastName.length - 5)].score.toFixed(2)) + "/10";
        } else if (usersScores.length === 7) {
            userName1.innerText = searchLastName[0].nombre;
            userScore1.innerText = (searchLastName[0].score.toFixed(2)) + "/10";
            userName1.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userScore1.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userName2.innerText = searchNotLastName[(searchNotLastName.length - 1)].nombre;
            userScore2.innerText = (searchNotLastName[(searchNotLastName.length - 1)].score.toFixed(2)) + "/10";
            userName3.innerText = searchNotLastName[(searchNotLastName.length - 2)].nombre;
            userScore3.innerText = (searchNotLastName[(searchNotLastName.length - 2)].score.toFixed(2)) + "/10";
            userName4.innerText = searchNotLastName[(searchNotLastName.length - 3)].nombre;
            userScore4.innerText = (searchNotLastName[(searchNotLastName.length - 3)].score.toFixed(2)) + "/10";
            userName5.innerText = searchNotLastName[(searchNotLastName.length - 4)].nombre;
            userScore5.innerText = (searchNotLastName[(searchNotLastName.length - 4)].score.toFixed(2)) + "/10";
            userName6.innerText = searchNotLastName[(searchNotLastName.length - 5)].nombre;
            userScore6.innerText = (searchNotLastName[(searchNotLastName.length - 5)].score.toFixed(2)) + "/10";
            userName7.innerText = searchNotLastName[(searchNotLastName.length - 6)].nombre;
            userScore7.innerText = (searchNotLastName[(searchNotLastName.length - 6)].score.toFixed(2)) + "/10";
        } else if (usersScores.length === 8) {
            userName1.innerText = searchLastName[0].nombre;
            userScore1.innerText = (searchLastName[0].score.toFixed(2)) + "/10";
            userName1.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userScore1.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userName2.innerText = searchNotLastName[(searchNotLastName.length - 1)].nombre;
            userScore2.innerText = (searchNotLastName[(searchNotLastName.length - 1)].score.toFixed(2)) + "/10";
            userName3.innerText = searchNotLastName[(searchNotLastName.length - 2)].nombre;
            userScore3.innerText = (searchNotLastName[(searchNotLastName.length - 2)].score.toFixed(2)) + "/10";
            userName4.innerText = searchNotLastName[(searchNotLastName.length - 3)].nombre;
            userScore4.innerText = (searchNotLastName[(searchNotLastName.length - 3)].score.toFixed(2)) + "/10";
            userName5.innerText = searchNotLastName[(searchNotLastName.length - 4)].nombre;
            userScore5.innerText = (searchNotLastName[(searchNotLastName.length - 4)].score.toFixed(2)) + "/10";
            userName6.innerText = searchNotLastName[(searchNotLastName.length - 5)].nombre;
            userScore6.innerText = (searchNotLastName[(searchNotLastName.length - 5)].score.toFixed(2)) + "/10";
            userName7.innerText = searchNotLastName[(searchNotLastName.length - 6)].nombre;
            userScore7.innerText = (searchNotLastName[(searchNotLastName.length - 6)].score.toFixed(2)) + "/10";
            userName8.innerText = searchNotLastName[(searchNotLastName.length - 7)].nombre;
            userScore8.innerText = (searchNotLastName[(searchNotLastName.length - 7)].score.toFixed(2)) + "/10";
        } else if (usersScores.length === 9) {
            userName1.innerText = searchLastName[0].nombre;
            userScore1.innerText = (searchLastName[0].score.toFixed(2)) + "/10";
            userName1.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userScore1.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userName2.innerText = searchNotLastName[(searchNotLastName.length - 1)].nombre;
            userScore2.innerText = (searchNotLastName[(searchNotLastName.length - 1)].score.toFixed(2)) + "/10";
            userName3.innerText = searchNotLastName[(searchNotLastName.length - 2)].nombre;
            userScore3.innerText = (searchNotLastName[(searchNotLastName.length - 2)].score.toFixed(2)) + "/10";
            userName4.innerText = searchNotLastName[(searchNotLastName.length - 3)].nombre;
            userScore4.innerText = (searchNotLastName[(searchNotLastName.length - 3)].score.toFixed(2)) + "/10";
            userName5.innerText = searchNotLastName[(searchNotLastName.length - 4)].nombre;
            userScore5.innerText = (searchNotLastName[(searchNotLastName.length - 4)].score.toFixed(2)) + "/10";
            userName6.innerText = searchNotLastName[(searchNotLastName.length - 5)].nombre;
            userScore6.innerText = (searchNotLastName[(searchNotLastName.length - 5)].score.toFixed(2)) + "/10";
            userName7.innerText = searchNotLastName[(searchNotLastName.length - 6)].nombre;
            userScore7.innerText = (searchNotLastName[(searchNotLastName.length - 6)].score.toFixed(2)) + "/10";
            userName8.innerText = searchNotLastName[(searchNotLastName.length - 7)].nombre;
            userScore8.innerText = (searchNotLastName[(searchNotLastName.length - 7)].score.toFixed(2)) + "/10";
            userName9.innerText = searchNotLastName[(searchNotLastName.length - 8)].nombre;
            userScore9.innerText = (searchNotLastName[(searchNotLastName.length - 8)].score.toFixed(2)) + "/10";
        } else {
            userName1.innerText = searchLastName[0].nombre;
            userScore1.innerText = (searchLastName[0].score.toFixed(2)) + "/10";
            userName1.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userScore1.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userName2.innerText = searchNotLastName[(searchNotLastName.length - 1)].nombre;
            userScore2.innerText = (searchNotLastName[(searchNotLastName.length - 1)].score.toFixed(2)) + "/10";
            userName3.innerText = searchNotLastName[(searchNotLastName.length - 2)].nombre;
            userScore3.innerText = (searchNotLastName[(searchNotLastName.length - 2)].score.toFixed(2)) + "/10";
            userName4.innerText = searchNotLastName[(searchNotLastName.length - 3)].nombre;
            userScore4.innerText = (searchNotLastName[(searchNotLastName.length - 3)].score.toFixed(2)) + "/10";
            userName5.innerText = searchNotLastName[(searchNotLastName.length - 4)].nombre;
            userScore5.innerText = (searchNotLastName[(searchNotLastName.length - 4)].score.toFixed(2)) + "/10";
            userName6.innerText = searchNotLastName[(searchNotLastName.length - 5)].nombre;
            userScore6.innerText = (searchNotLastName[(searchNotLastName.length - 5)].score.toFixed(2)) + "/10";
            userName7.innerText = searchNotLastName[(searchNotLastName.length - 6)].nombre;
            userScore7.innerText = (searchNotLastName[(searchNotLastName.length - 6)].score.toFixed(2)) + "/10";
            userName8.innerText = searchNotLastName[(searchNotLastName.length - 7)].nombre;
            userScore8.innerText = (searchNotLastName[(searchNotLastName.length - 7)].score.toFixed(2)) + "/10";
            userName9.innerText = searchNotLastName[(searchNotLastName.length - 8)].nombre;
            userScore9.innerText = (searchNotLastName[(searchNotLastName.length - 8)].score.toFixed(2)) + "/10";
            userName10.innerText = searchNotLastName[(searchNotLastName.length - 9)].nombre;
            userScore10.innerText = (searchNotLastName[(searchNotLastName.length - 9)].score.toFixed(2)) + "/10";
        }
    }
}

//Define the function who send us to the indext.html to do a new try
function retry() {
    setTimeout("location.href='../index.html'", 0);
}

//Define the function who order the score ranking from hight to low
function order() {
    const orderedScores = usersScores.sort((a, b) => (a.score > b.score ? -1 : 1));
    var position = 0;

    hideBackGround();
    fillOrderedColumns();
    actualUserPosition();
    actualUserPositionShow();


    function hideBackGround() {
        userName1.style.backgroundColor = "rgba(37, 100, 218, .0)";
        userScore1.style.backgroundColor = "rgba(37, 100, 218, .0)";
    }

    function fillOrderedColumns() {
        if (usersScores.length === 1) {
            userName1.innerText = orderedScores[0].nombre;
            userScore1.innerText = (orderedScores[0].score.toFixed(2)) + "/10";
        } else if (usersScores.length === 2) {
            userName1.innerText = orderedScores[0].nombre;
            userScore1.innerText = (orderedScores[0].score.toFixed(2)) + "/10";
            userName2.innerText = orderedScores[1].nombre;
            userScore2.innerText = (orderedScores[1].score.toFixed(2)) + "/10";
        } else if (usersScores.length === 3) {
            userName1.innerText = orderedScores[0].nombre;
            userScore1.innerText = (orderedScores[0].score.toFixed(2)) + "/10";
            userName2.innerText = orderedScores[1].nombre;
            userScore2.innerText = (orderedScores[1].score.toFixed(2)) + "/10";
            userName3.innerText = orderedScores[2].nombre;
            userScore3.innerText = (orderedScores[2].score.toFixed(2)) + "/10";
        } else if (usersScores.length === 4) {
            userName1.innerText = orderedScores[0].nombre;
            userScore1.innerText = (orderedScores[0].score.toFixed(2)) + "/10";
            userName2.innerText = orderedScores[1].nombre;
            userScore2.innerText = (orderedScores[1].score.toFixed(2)) + "/10";
            userName3.innerText = orderedScores[2].nombre;
            userScore3.innerText = (orderedScores[2].score.toFixed(2)) + "/10";
            userName4.innerText = orderedScores[3].nombre;
            userScore4.innerText = (orderedScores[3].score.toFixed(2)) + "/10";
        } else if (usersScores.length === 5) {
            userName1.innerText = orderedScores[0].nombre;
            userScore1.innerText = (orderedScores[0].score.toFixed(2)) + "/10";
            userName2.innerText = orderedScores[1].nombre;
            userScore2.innerText = (orderedScores[1].score.toFixed(2)) + "/10";
            userName3.innerText = orderedScores[2].nombre;
            userScore3.innerText = (orderedScores[2].score.toFixed(2)) + "/10";
            userName4.innerText = orderedScores[3].nombre;
            userScore4.innerText = (orderedScores[3].score.toFixed(2)) + "/10";
            userName5.innerText = orderedScores[4].nombre;
            userScore5.innerText = (orderedScores[4].score.toFixed(2)) + "/10";
        } else if (usersScores.length === 6) {
            userName1.innerText = orderedScores[0].nombre;
            userScore1.innerText = (orderedScores[0].score.toFixed(2)) + "/10";
            userName2.innerText = orderedScores[1].nombre;
            userScore2.innerText = (orderedScores[1].score.toFixed(2)) + "/10";
            userName3.innerText = orderedScores[2].nombre;
            userScore3.innerText = (orderedScores[2].score.toFixed(2)) + "/10";
            userName4.innerText = orderedScores[3].nombre;
            userScore4.innerText = (orderedScores[3].score.toFixed(2)) + "/10";
            userName5.innerText = orderedScores[4].nombre;
            userScore5.innerText = (orderedScores[4].score.toFixed(2)) + "/10";
            userName6.innerText = orderedScores[5].nombre;
            userScore6.innerText = (orderedScores[5].score.toFixed(2)) + "/10";
        } else if (usersScores.length === 7) {
            userName1.innerText = orderedScores[0].nombre;
            userScore1.innerText = (orderedScores[0].score.toFixed(2)) + "/10";
            userName2.innerText = orderedScores[1].nombre;
            userScore2.innerText = (orderedScores[1].score.toFixed(2)) + "/10";
            userName3.innerText = orderedScores[2].nombre;
            userScore3.innerText = (orderedScores[2].score.toFixed(2)) + "/10";
            userName4.innerText = orderedScores[3].nombre;
            userScore4.innerText = (orderedScores[3].score.toFixed(2)) + "/10";
            userName5.innerText = orderedScores[4].nombre;
            userScore5.innerText = (orderedScores[4].score.toFixed(2)) + "/10";
            userName6.innerText = orderedScores[5].nombre;
            userScore6.innerText = (orderedScores[5].score.toFixed(2)) + "/10";
            userName7.innerText = orderedScores[6].nombre;
            userScore7.innerText = (orderedScores[6].score.toFixed(2)) + "/10";
        } else if (usersScores.length === 8) {
            userName1.innerText = orderedScores[0].nombre;
            userScore1.innerText = (orderedScores[0].score.toFixed(2)) + "/10";
            userName2.innerText = orderedScores[1].nombre;
            userScore2.innerText = (orderedScores[1].score.toFixed(2)) + "/10";
            userName3.innerText = orderedScores[2].nombre;
            userScore3.innerText = (orderedScores[2].score.toFixed(2)) + "/10";
            userName4.innerText = orderedScores[3].nombre;
            userScore4.innerText = (orderedScores[3].score.toFixed(2)) + "/10";
            userName5.innerText = orderedScores[4].nombre;
            userScore5.innerText = (orderedScores[4].score.toFixed(2)) + "/10";
            userName6.innerText = orderedScores[5].nombre;
            userScore6.innerText = (orderedScores[5].score.toFixed(2)) + "/10";
            userName7.innerText = orderedScores[6].nombre;
            userScore7.innerText = (orderedScores[6].score.toFixed(2)) + "/10";
            userName8.innerText = orderedScores[7].nombre;
            userScore8.innerText = (orderedScores[7].score.toFixed(2)) + "/10";
        } else if (usersScores.length === 9) {
            userName1.innerText = orderedScores[0].nombre;
            userScore1.innerText = (orderedScores[0].score.toFixed(2)) + "/10";
            userName2.innerText = orderedScores[1].nombre;
            userScore2.innerText = (orderedScores[1].score.toFixed(2)) + "/10";
            userName3.innerText = orderedScores[2].nombre;
            userScore3.innerText = (orderedScores[2].score.toFixed(2)) + "/10";
            userName4.innerText = orderedScores[3].nombre;
            userScore4.innerText = (orderedScores[3].score.toFixed(2)) + "/10";
            userName5.innerText = orderedScores[4].nombre;
            userScore5.innerText = (orderedScores[4].score.toFixed(2)) + "/10";
            userName6.innerText = orderedScores[5].nombre;
            userScore6.innerText = (orderedScores[5].score.toFixed(2)) + "/10";
            userName7.innerText = orderedScores[6].nombre;
            userScore7.innerText = (orderedScores[6].score.toFixed(2)) + "/10";
            userName8.innerText = orderedScores[7].nombre;
            userScore8.innerText = (orderedScores[7].score.toFixed(2)) + "/10";
            userName9.innerText = orderedScores[8].nombre;
            userScore9.innerText = (orderedScores[8].score.toFixed(2)) + "/10";
        } else {
            userName1.innerText = orderedScores[0].nombre;
            userScore1.innerText = (orderedScores[0].score.toFixed(2)) + "/10";
            userName2.innerText = orderedScores[1].nombre;
            userScore2.innerText = (orderedScores[1].score.toFixed(2)) + "/10";
            userName3.innerText = orderedScores[2].nombre;
            userScore3.innerText = (orderedScores[2].score.toFixed(2)) + "/10";
            userName4.innerText = orderedScores[3].nombre;
            userScore4.innerText = (orderedScores[3].score.toFixed(2)) + "/10";
            userName5.innerText = orderedScores[4].nombre;
            userScore5.innerText = (orderedScores[4].score.toFixed(2)) + "/10";
            userName6.innerText = orderedScores[5].nombre;
            userScore6.innerText = (orderedScores[5].score.toFixed(2)) + "/10";
            userName7.innerText = orderedScores[6].nombre;
            userScore7.innerText = (orderedScores[6].score.toFixed(2)) + "/10";
            userName8.innerText = orderedScores[7].nombre;
            userScore8.innerText = (orderedScores[7].score.toFixed(2)) + "/10";
            userName9.innerText = orderedScores[8].nombre;
            userScore9.innerText = (orderedScores[8].score.toFixed(2)) + "/10";
            userName10.innerText = orderedScores[9].nombre;
            userScore10.innerText = (orderedScores[9].score.toFixed(2)) + "/10";
        }
    }

    function actualUserPosition() {
        for (i = 0; i < orderedScores.length; i ++) {
            if (orderedScores[i].nombre == actualName) {
                position = i;
            }
        }
    }

    function actualUserPositionShow() {
        if (position === 0) {
            userName1.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userScore1.style.backgroundColor = "rgba(37, 100, 218, .2)";
        } else if (position === 1){
            userName2.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userScore2.style.backgroundColor = "rgba(37, 100, 218, .2)";
        } else if (position === 2){
            userName3.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userScore3.style.backgroundColor = "rgba(37, 100, 218, .2)";
        } else if (position === 3){
            userName4.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userScore4.style.backgroundColor = "rgba(37, 100, 218, .2)";
        } else if (position === 4){
            userName5.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userScore5.style.backgroundColor = "rgba(37, 100, 218, .2)";
        } else if (position === 5){
            userName6.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userScore6.style.backgroundColor = "rgba(37, 100, 218, .2)";
        } else if (position === 6){
            userName7.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userScore7.style.backgroundColor = "rgba(37, 100, 218, .2)";
        } else if (position === 7){
            userName8.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userScore8.style.backgroundColor = "rgba(37, 100, 218, .2)";
        } else if (position === 8){
            userName9.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userScore9.style.backgroundColor = "rgba(37, 100, 218, .2)";
        } else if (position === 9){
            userName10.style.backgroundColor = "rgba(37, 100, 218, .2)";
            userScore10.style.backgroundColor = "rgba(37, 100, 218, .2)";
        }
    }
}

//Define the function who hide the result when user refresh the page.
function tableHide(){
    if (usersScores.length === 1) {
        userName1.style.display = "none";
        userScore1.style.display = "none";
    } else if (usersScores.length === 2) {
        userName1.style.display = "none";
        userScore1.style.display = "none";
        userName2.style.display = "none";
        userScore2.style.display = "none";
    } else if (usersScores.length === 3) {
        userName1.style.display = "none";
        userScore1.style.display = "none";
        userName2.style.display = "none";
        userScore2.style.display = "none";
        userName3.style.display = "none";
        userScore3.style.display = "none";
    } else if (usersScores.length === 4) {
        userName1.style.display = "none";
        userScore1.style.display = "none";
        userName2.style.display = "none";
        userScore2.style.display = "none";
        userName3.style.display = "none";
        userScore3.style.display = "none";
        userName4.style.display = "none";
        userScore4.style.display = "none";
    } else if (usersScores.length === 5) {
        userName1.style.display = "none";
        userScore1.style.display = "none";
        userName2.style.display = "none";
        userScore2.style.display = "none";
        userName3.style.display = "none";
        userScore3.style.display = "none";
        userName4.style.display = "none";
        userScore4.style.display = "none";
        userName5.style.display = "none";
        userScore5.style.display = "none";
    } else if (usersScores.length === 6) {
        userName1.style.display = "none";
        userScore1.style.display = "none";
        userName2.style.display = "none";
        userScore2.style.display = "none";
        userName3.style.display = "none";
        userScore3.style.display = "none";
        userName4.style.display = "none";
        userScore4.style.display = "none";
        userName5.style.display = "none";
        userScore5.style.display = "none";
        userName6.style.display = "none";
        userScore6.style.display = "none";
    } else if (usersScores.length === 7) {
        userName1.style.display = "none";
        userScore1.style.display = "none";
        userName2.style.display = "none";
        userScore2.style.display = "none";
        userName3.style.display = "none";
        userScore3.style.display = "none";
        userName4.style.display = "none";
        userScore4.style.display = "none";
        userName5.style.display = "none";
        userScore5.style.display = "none";
        userName6.style.display = "none";
        userScore6.style.display = "none";
        userName7.style.display = "none";
        userScore7.style.display = "none";
    } else if (usersScores.length === 8) {
        userName1.style.display = "none";
        userScore1.style.display = "none";
        userName2.style.display = "none";
        userScore2.style.display = "none";
        userName3.style.display = "none";
        userScore3.style.display = "none";
        userName4.style.display = "none";
        userScore4.style.display = "none";
        userName5.style.display = "none";
        userScore5.style.display = "none";
        userName6.style.display = "none";
        userScore6.style.display = "none";
        userName7.style.display = "none";
        userScore7.style.display = "none";
        userName8.style.display = "none";
        userScore8.style.display = "none";
    } else if (usersScores.length === 9) {
        userName1.style.display = "none";
        userScore1.style.display = "none";
        userName2.style.display = "none";
        userScore2.style.display = "none";
        userName3.style.display = "none";
        userScore3.style.display = "none";
        userName4.style.display = "none";
        userScore4.style.display = "none";
        userName5.style.display = "none";
        userScore5.style.display = "none";
        userName6.style.display = "none";
        userScore6.style.display = "none";
        userName7.style.display = "none";
        userScore7.style.display = "none";
        userName8.style.display = "none";
        userScore8.style.display = "none";
        userName9.style.display = "none";
        userScore9.style.display = "none";
    } else {
        userName1.style.display = "none";
        userScore1.style.display = "none";
        userName2.style.display = "none";
        userScore2.style.display = "none";
        userName3.style.display = "none";
        userScore3.style.display = "none";
        userName4.style.display = "none";
        userScore4.style.display = "none";
        userName5.style.display = "none";
        userScore5.style.display = "none";
        userName6.style.display = "none";
        userScore6.style.display = "none";
        userName7.style.display = "none";
        userScore7.style.display = "none";
        userName8.style.display = "none";
        userScore8.style.display = "none";
        userName9.style.display = "none";
        userScore9.style.display = "none";
        userName10.style.display = "none";
        userScore10.style.display = "none";
    }
    isHiddenNow = true;
    localStorage.setItem("isHidden", isHiddenNow);
    return "manolin manolan";
}