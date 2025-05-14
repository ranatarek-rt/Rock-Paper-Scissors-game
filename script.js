const score = JSON.parse(localStorage.getItem("score"))||{
    wins:0,
    loses:0,
    ties:0
}
updateScore();
function gameStart(playerChoice){
    
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoice);
    let computerMove = getMoveName(computerChoice);
    let playerMove = getMoveName(playerChoice);
    document.querySelector('.js-move').innerHTML=`Player : ${playerMove} vs Computer : ${computerMove}`;
    if(playerChoice===computerChoice){
        score.ties++;
        displayText('Tie');
    }
    else if((playerChoice===1 && computerChoice===3)||(playerChoice===2 && computerChoice===1)||(playerChoice===3 && computerChoice===2)){
        score.wins++;
        displayText('Player Wins');
    
    }
    else{
        score.loses++;
        displayText('Computer Wins');
    }
    updateScore();
    localStorage.setItem("score",JSON.stringify(score));
}

function resetScore(){
    score.loses =0;
    score.wins=0;
    score.ties=0;
    localStorage.setItem("score", JSON.stringify(score));
    document.querySelector('.js-move').innerHTML='';
    document.querySelector('.js-res').innerHTML='';
    updateScore();
    alert('the score is reseted');
}

function updateScore(){
    document.querySelector('.js-score-res').innerHTML = ` wins:${score.wins}  loses:${score.loses}  ties:${score.ties}`;

}
function getMoveName(move){
    switch(move) {
        case 1: return 'Rock';
        case 2: return 'Paper';
        case 3: return 'Scissors';
        default: return '';
    }
}
function displayText(text){
    document.querySelector('.js-res').innerHTML=text;
}