let rock =document.getElementById('rock');
let paper =document.getElementById('paper');
let scissors =document.getElementById('scissors');
let user1 = document.getElementById('user');
let computer1 = document.getElementById('computer');
let result = document.getElementById('result');

function computer_choice(){
    let options = ['rock', 'paper', 'scissor'];
    let select = parseInt(Math.random()*3);
    return options[select];
}


function check(user){
    // user.priventDefault();  
    let options = ['rock', 'paper', 'scissor'];
    let select = parseInt(Math.random()*3);
    let computer = options[select];
    if (user === computer) {
        result.innerText = 'tie!';
        computer1.innerText = computer;
        user1.innerText = user;
    }
    else if ((user === 'rock' && computer === 'scissor') || (user === 'paper' && computer === 'rock') || (user === 'scissor' && computer === 'paper')) {
        result.innerText = 'winner';
        computer1.innerText = computer;
        user1.innerText = user;
    }
    else {
        result.innerText = 'you loose';
        computer1.innerText = computer;
        user1.innerText = user;
    }
}

rock.addEventListener('click', check('rock'));
// paper.addEventListener('click', check(computer_choice(), 'paper'));
// scissors.addEventListener('click', check(computer_choice(), 'scissors'));
