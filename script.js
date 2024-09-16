const textbox = document.createElement("div");
const cpu = document.querySelector("#cpu");
const confirm = document.querySelector("#continue")
const rock = document.querySelector("rock");
const paper = document.querySelector("paper");
const scizzors = document.querySelector("scizzors");
const cards = document.querySelectorAll("#buttons > *");
const pChoice = document.querySelector("#pChoice");
const cChoice = document.querySelector("#cChoice");

const pCard = document.createElement("img");
const cCard = document.createElement("img");

function proceed(){
    confirm.addEventListener("onclick", () => {
        return 1;
    })
}

function chat(string){
    textbox.textContent = string;
    textbox.style.background = "grey";
    textbox.style.fontSize = "30px";
    cpu.appendChild(textbox);
    console.log(string);
    proceed();
}

function getCompChoice(){
    let choice = Math.random; 
    if (choice < (1/3)){
        choice = "rock";
    } else if (choice < (2/3)){
        choice = "paper";
    } else {
        choice = "scizzors"
    }
    return(choice);
}

function getHumanChoice(){
    let hChoice = 0;
    cards.forEach((card) => {
        card.addEventListener("mouseover", () => {
            card.style.backgroundColor = "green";
        });
        card.addEventListener("mouseout", () => {
            card.style.backgroundColor = "grey"
        })
        card.addEventListener("onclick", (hChoice) => {
            if(hChoice === card.id){
                cards.backgroundColor = "grey";
                card.style.backgroundColor = "blue";
                pCard.src = "./images/" + card.id + ".jpg";
            }
        })
    });
    return hChoice;
}

function playRound(){
    let hChoice = getHumanChoice();
    let cChoice = getCompChoice();
    let win = 0;
    if (hChoice === "rock"){
        if (cChoice === "paper"){
            win = 2;
        }
        else if (cChoice === "scizzors"){
            win = 1;
        }
    } else if (hChoice === "paper"){
        if (cChoice === "scizzors"){
            win = 2;
        }
        else if (cChoice === "rock"){
            win = 1;
        }
    } else {
        if (cChoice === "rock"){
            win = 2;
        }
        else if (cChoice === "paper"){
            win = 1;
        }
    }
    chat(`You played ${hChoice} and I played ${cChoice}.`);
    if (win == 1){
        chat("you won!");
    } else if (win == 2){
        chat("you lost!");
    } else {
        chat("its a draw!");
    } 
    return win;
}

function playGame(){
    chat("rock paper scizzors! best of 5!");
    let hScore = 0;
    let cScore = 0;
    let win = 0;
    while (hScore < 3 && cScore < 3){
        win = playRound();
        if (win == 1){
            hScore += 1;
        } else if (win == 2){
            cScore += 1
        } 
        chat(`the score is ${hScore} (you) to ${cScore} (me)`)
    }
    if (cScore < hScore){
        chat(`You won, congrats!`);
    } else {
        chat(`You lost! suck it loser!`);
    }
}

let x = playRound();