let player1;
let player2;
let cell1 = document.getElementById('cell1');
let cell2 = document.getElementById('cell2');
let cell3 = document.getElementById('cell3');
let cell4 = document.getElementById('cell4');
let cell5 = document.getElementById('cell5');
let cell6 = document.getElementById('cell6');
let cell7 = document.getElementById('cell7');
let cell8 = document.getElementById('cell8');
let cell9 = document.getElementById('cell9');
let span = document.getElementById('winner');
let gameSection = document.getElementById('gameSection');
let gamePart = document.getElementById('gamePart');


let embed = document.createElement('embed');
embed.src = "./SONG/stranger-things-124008.mp3";
embed.style.visibility = 'hidden';


while (!player1) {
    player1 = prompt("Enter your name who's taking X'S");
}
while (!player2) {
    player2 = prompt("Enter your name who's taking 0'S");
}



let arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let display = ['userCell0', 'userCell1', 'userCell2', 'userCell3', 'userCell4', 'userCell5', 'userCell6', 'userCell7', 'userCell8']


let noWinner = true;
let noEmptyCell = () => {
    let count = 0;
    for (let i in arr) {
        if (arr[i] === 'X' || arr[i] === '0') {
            count++;
        }
    }
    if (count === 9) {
        return true;
    }
    else {
        return false;
    }
}

function updateDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'X' || arr[i] === '0') {
            document.getElementById(display[i]).innerText = arr[i];
        }
    }

}


function winner() {
    updateDisplay(arr);
    if (arr[0] === 'X' && arr[1] === 'X' && arr[2] === 'X') {
        noWinner = false;
        document.body.append(embed);
        span.innerText = 'winner is ' + player1;
        gameSection.style.display = 'none';
        gamePart.innerText = 'GAME OVER';
        // window.location.replace("./winner.html");
    }
    else if (arr[0] === '0' && arr[1] === '0' && arr[2] === '0') {
        noWinner = false;
        document.body.append(embed);
        span.innerText = 'winner is ' + player2;
        gameSection.style.display = 'none';
        gamePart.innerText = 'GAME OVER';
    }
    else if (arr[2] === 'X' && arr[5] === 'X' && arr[8] === 'X') {
        noWinner = false;
        document.body.append(embed);
        span.innerText = 'winner is ' + player1;
        gameSection.style.display = 'none';
        gamePart.innerText = 'GAME OVER';
    }
    else if (arr[2] === '0' && arr[5] === '0' && arr[8] === '0') {
        noWinner = false;
        document.body.append(embed);
        span.innerText = 'winner is ' + player2;
        gameSection.style.display = 'none';
        gamePart.innerText = 'GAME OVER';
    }
    else if (arr[6] === 'X' && arr[7] === 'X' && arr[8] === 'X') {
        noWinner = false;
        document.body.append(embed);
        span.innerText = 'winner is ' + player1;
        gameSection.style.display = 'none';
        gamePart.innerText = 'GAME OVER';
    }
    else if (arr[6] === '0' && arr[7] === '0' && arr[8] === '0') {
        noWinner = false;
        document.body.append(embed);
        span.innerText = 'winner is ' + player2;
        gameSection.style.display = 'none';
        gamePart.innerText = 'GAME OVER';
    }
    else if (arr[0] === 'X' && arr[3] === 'X' && arr[6] === 'X') {
        noWinner = false;
        document.body.append(embed);
        span.innerText = 'winner is ' + player1;
        gameSection.style.display = 'none';
        gamePart.innerText = 'GAME OVER';
    }
    else if (arr[0] === '0' && arr[3] === '0' && arr[6] === '0') {
        noWinner = false;
        document.body.append(embed);
        span.innerText = 'winner is ' + player2;
        gameSection.style.display = 'none';
        gamePart.innerText = 'GAME OVER';
    }
    else if (arr[0] === 'X' && arr[4] === 'X' && arr[8] === 'X') {
        noWinner = false;
        document.body.append(embed);
        span.innerText = 'winner is ' + player1;
        gameSection.style.display = 'none';
        gamePart.innerText = 'GAME OVER';
    }
    else if (arr[0] === '0' && arr[4] === '0' && arr[8] === '0') {
        noWinner = false;
        document.body.append(embed);
        span.innerText = 'winner is ' + player2;
        gameSection.style.display = 'none';
        gamePart.innerText = 'GAME OVER';
    }
    else if (arr[2] === 'X' && arr[4] === 'X' && arr[6] === 'X') {
        noWinner = false;
        document.body.append(embed);
        span.innerText = 'winner is ' + player1;
        gameSection.style.display = 'none';
        gamePart.innerText = 'GAME OVER';
    }
    else if (arr[2] === '0' && arr[4] === '0' && arr[6] === '0') {
        noWinner = false;
        document.body.append(embed);
        span.innerText = 'winner is ' + player2;
        gameSection.style.display = 'none';
        gamePart.innerText = 'GAME OVER';
    }
    else if (arr[1] === 'X' && arr[4] === 'X' && arr[7] === 'X') {
        noWinner = false;
        document.body.append(embed);
        span.innerText = 'winner is ' + player1;
        gameSection.style.display = 'none';
        gamePart.innerText = 'GAME OVER';
    }
    else if (arr[1] === '0' && arr[4] === '0' && arr[7] === '0') {
        noWinner = false;
        document.body.append(embed);
        span.innerText = 'winner is ' + player2;
        gameSection.style.display = 'none';
        gamePart.innerText = 'GAME OVER';
    }
    else if (arr[3] === 'X' && arr[4] === 'X' && arr[5] === 'X') {
        noWinner = false;
        document.body.append(embed);
        span.innerText = 'winner is ' + player1;
        gameSection.style.display = 'none';
        gamePart.innerText = 'GAME OVER';
    }
    else if (arr[3] === '0' && arr[4] === '0' && arr[5] === '0') {
        noWinner = false;
        document.body.append(embed);
        span.innerText = 'winner is ' + player2;
        gameSection.style.display = 'none';
        gamePart.innerText = 'GAME OVER';
    }
    else if (noWinner === noEmptyCell()) {
        span.innerText = 'tie!';
    }

}



function check(index) {
    if (arr[index] === 'X' || arr[index] === '0') {
        return false;
    }
    else {
        return true;
    }
}

span.innerText = player1 + ' turn ' + ' with ' + " X'S ";

let val = 'X';
function forCell1() {
    if (val === 'X') {
        if (check(0)) {
            val = '0';
            span.innerText = player2 + ' turn ' + ' with ' + " 0'S ";
            arr[0] = 'X';
            cell1.innerText = 'X';
            winner();
        }
    }
    else {
        if (check(0)) {
            val = 'X';
            span.innerText = player1 + ' turn ' + ' with ' + " X'S ";
            arr[0] = '0';
            cell1.innerText = '0';
            winner();
        }
    }
}

function forCell2() {
    if (val === 'X') {
        if (check(1)) {
            val = '0';
            span.innerText = player2 + ' turn ' + ' with ' + " 0'S ";
            arr[1] = 'X';
            cell2.innerText = 'X';
            winner();
        }
    }
    else {
        if (check(1)) {
            val = 'X';
            span.innerText = player1 + ' turn ' + ' with ' + " X'S ";
            arr[1] = '0';
            cell2.innerText = '0';
            winner();
        }
    }
}


function forCell3() {
    if (val === 'X') {
        if (check(2)) {
            val = '0';
            span.innerText = player2 + ' turn ' + ' with ' + " 0'S ";
            arr[2] = 'X';
            cell3.innerText = 'X';
            winner();
        }
    }
    else {
        if (check(2)) {
            val = 'X';
            span.innerText = player1 + ' turn ' + ' with ' + " X'S ";
            arr[2] = '0';
            cell3.innerText = '0';
            winner();
        }
    }
}
function forCell4() {
    if (val === 'X') {
        if (check(3)) {
            val = '0';
            span.innerText = player2 + ' turn ' + ' with ' + " 0'S ";
            arr[3] = 'X';
            cell4.innerText = 'X';
            winner();
        }
    }
    else {
        if (check(3)) {
            val = 'X';
            span.innerText = player1 + ' turn ' + ' with ' + " X'S ";
            arr[3] = '0';
            cell4.innerText = '0';
            winner();
        }
    }
}
function forCell5() {
    if (val === 'X') {
        if (check(4)) {
            span.innerText = player2 + ' turn ' + ' with ' + " 0'S ";
            val = '0';
            arr[4] = 'X';
            cell5.innerText = 'X';
            winner();
        }
    }
    else {
        if (check(4)) {
            span.innerText = player1 + ' turn ' + ' with ' + " X'S ";
            val = 'X';
            arr[4] = '0';
            cell5.innerText = '0';
            winner();
        }
    }
}
function forCell6() {
    if (val === 'X') {
        if (check(5)) {
            span.innerText = player2 + ' turn ' + ' with ' + " 0'S ";
            val = '0';
            arr[5] = 'X';
            cell6.innerText = 'X';
            winner()
        }
    }
    else {
        if (check(5)) {
            span.innerText = player1 + ' turn ' + ' with ' + " X'S ";
            val = 'X';
            arr[5] = '0';
            cell6.innerText = '0';
            winner();
        }
    }
}
function forCell7() {
    if (val === 'X') {
        if (check(6)) {
            span.innerText = player2 + ' turn ' + ' with ' + " 0'S ";
            val = '0';
            arr[6] = 'X';
            cell7.innerText = 'X';
            winner();
        }
    }
    else {
        if (check(6)) {
            span.innerText = player1 + ' turn ' + ' with ' + " X'S ";
            val = 'X';
            arr[6] = '0';
            cell7.innerText = '0';
            winner();
        }
    }
}
function forCell8() {
    if (val === 'X') {
        if (check(7)) {
            span.innerText = player2 + ' turn ' + ' with ' + " 0'S ";
            val = '0';

            arr[7] = 'X';
            cell8.innerText = 'X';
            winner();
        }
    }
    else {
        if (check(7)) {
            span.innerText = player1 + ' turn ' + ' with ' + " X'S ";
            val = 'X';
            arr[7] = '0';
            cell8.innerText = '0';
            winner();
        }
    }
}
function forCell9() {
    if (val === 'X') {
        if (check(8)) {
            span.innerText = player2 + ' turn ' + ' with ' + " 0'S ";
            val = '0';
            arr[8] = 'X';
            cell9.innerText = 'X';
            winner();
        }
    }
    else {
        if (check(8)) {
            span.innerText = player1 + ' turn ' + ' with ' + " X'S ";
            val = 'X';
            arr[8] = '0';
            cell9.innerText = '0';
            winner();
        }
    }
}


cell1.addEventListener('click', forCell1);
cell2.addEventListener('click', forCell2);
cell3.addEventListener('click', forCell3);
cell4.addEventListener('click', forCell4);
cell5.addEventListener('click', forCell5);
cell6.addEventListener('click', forCell6);
cell7.addEventListener('click', forCell7);
cell8.addEventListener('click', forCell8);
cell9.addEventListener('click', forCell9);





