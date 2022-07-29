const inputs = document.getElementsByTagName("input");
const turn = document.getElementById("turn");
let sum = 0;
let valueO = 0;
let valueX = 0;
let inputOne;
let inputTwo;
let inputThree;
let inputFour;
let inputFive;
let inputSix;
let inputSeven;
let inputEight;
let inputNine;
let spanOne =document.getElementById('winner-text');
let spanTwo =document.getElementById('next-round-text');
let buttonQuit = document.getElementById("quit-button");
let buttonNextRound = document.getElementById("next-round-button");
let winner;
let playerSwitch = document.getElementsByClassName("player-switcher");
let tieCount =0;
let playerOneCount =0;
let playerTwoCount =0;

Array.from(playerSwitch).map((button) => {
    button.addEventListener("click",(event)=>{
    let playerSwitchButton;
    for (let i of playerSwitch){
        playerSwitchButton = i.classList.remove("bg-dark-navy");
        playerSwitchButton = i.classList.remove("text-silver");
        playerSwitchButton = i.classList.remove("bg-silver");
    }
    if (document.getElementById("y-player").classList.value == "player-switcher text-dark-navy") {
        document.getElementById("y-player").classList.remove("text-dark-navy");
        document.getElementById("y-player").classList.add("text-silver");
    }
    if (document.getElementById("x-player").classList.value == "player-switcher text-dark-navy") {
        document.getElementById("x-player").classList.remove("text-dark-navy");
        document.getElementById("x-player").classList.add("text-silver");
    }
    button.classList.add("bg-silver");
    button.classList.add("text-dark-navy");
    });
});

document.getElementById("multiplayer").addEventListener("click",(event)=>{
    let game = document.getElementById("game");
    document.getElementById("logo").classList.add("hidden");
    document.getElementById("cpu").classList.add("hidden");
    document.getElementById("multiplayer").classList.add("hidden");
    document.getElementById("main-container").classList.add("hidden");
    game.classList.remove("hidden");
    document.getElementById("multiplayer").setAttribute("data-id", "1");
});

let newInput = function() {
    inputOne = document.getElementById("input-1.1").value;
    inputTwo = document.getElementById("input-1.2").value;
    inputThree = document.getElementById("input-1.3").value;
    inputFour = document.getElementById("input-2.1").value;
    inputFive = document.getElementById("input-2.2").value;
    inputSix = document.getElementById("input-2.3").value;
    inputSeven = document.getElementById("input-3.1").value;
    inputEight = document.getElementById("input-3.2").value;
    inputNine = document.getElementById("input-3.3").value;
}

let displayToggle = function (e) {
    let game = document.getElementById("game");
    if (buttonQuit.textContent == "Quit") {
        game.classList.add("hidden");
        document.getElementById("last-screen").classList.add("hidden");
        document.getElementById("logo").classList.remove("hidden");
        document.getElementById("cpu").classList.remove("hidden");
        document.getElementById("multiplayer").classList.remove("hidden");
        document.getElementById("main-container").classList.remove("hidden");
        goTodefault();
        document.getElementById("result-player-one").innerText = `0`;
        document.getElementById("result-player-two").innerText = `0`;
        document.getElementById("result-tie").innerText = `0`;
        tieCount =0;
        playerOneCount =0;
        playerTwoCount =0;
        document.getElementById("multiplayer").setAttribute("data-id", "0");
        document.getElementById("cpu").setAttribute("data-id", "0");
    }
    if (buttonQuit.textContent == "No, cancel"){
        buttonQuit.addEventListener("click", () =>{
        document.getElementById("last-screen").classList.add("hidden");
        });
    }
    buttonNextRound.addEventListener("click",()=>{
        if (buttonNextRound.textContent == "Yes, restart"){
            game.classList.add("hidden");
            document.getElementById("last-screen").classList.add("hidden");
            document.getElementById("logo").classList.remove("hidden");
            document.getElementById("cpu").classList.remove("hidden");
            document.getElementById("multiplayer").classList.remove("hidden");
            document.getElementById("main-container").classList.remove("hidden");
            goTodefault();
            document.getElementById("result-player-one").innerText = `0`;
            document.getElementById("result-player-two").innerText = `0`;
            document.getElementById("result-tie").innerText = `0`;
            tieCount =0;
            playerOneCount =0;
            playerTwoCount =0;
            document.getElementById("multiplayer").setAttribute("data-id", "0");
            document.getElementById("cpu").setAttribute("data-id", "0");
        }
    });  
}

let goTodefault = function() {
    Array.from(inputs).map((input) => {
        input.value = "0"
        input.classList.remove("bg-image-o");
        input.classList.remove("bg-image-x");
        input.disabled = false;
        input.classList.add("input-class");
    });
    sum = 0;
    count =0;
    spanTwo.classList.remove("text-2");
    spanTwo.classList.remove("text-2-alt");
    spanTwo.classList.add("text-round-tied");
}

let winnerScreen = function() {
    document.getElementById("last-screen").classList.remove("hidden");
}

let playerWinnerCount = function(){
    document.getElementById("result-player-one").innerText = `${playerOneCount}`;
    document.getElementById("result-player-two").innerText = `${playerTwoCount}`;
}

let winnerPlayer = function() {
    if(inputOne + inputTwo + inputThree == "111"
    || inputFour + inputFive + inputSix == "111" 
    || inputSeven + inputEight + inputNine == "111"
    || inputOne + inputFour + inputSeven == "111" 
    || inputTwo + inputFive + inputEight == "111" 
    || inputThree + inputSix + inputNine == "111" 
    || inputOne + inputFive + inputNine == "111" 
    || inputThree + inputFive + inputSeven == "111") {
        winner = 1;
        playerOneCount++;
        playerWinnerCount();
        winnerScreen();
        spanOne.textContent = "player 1 wins!";
        spanTwo.textContent = "Takes next round";
        spanTwo.classList.remove("text-round-tied");
        spanTwo.classList.add("text-2");
        buttonQuit.textContent = "Quit";
        buttonNextRound.textContent = "Next Round";     
    } else if (inputOne + inputTwo + inputThree == "222"
    || inputFour + inputFive + inputSix == "222" 
    || inputSeven + inputEight + inputNine == "222"
    || inputOne + inputFour + inputSeven == "222" 
    || inputTwo + inputFive + inputEight == "222" 
    || inputThree + inputSix + inputNine == "222" 
    || inputOne + inputFive + inputNine == "222" 
    || inputThree + inputFive + inputSeven == "222"){
        winner = 2;
        playerTwoCount++;
        playerWinnerCount();
        winnerScreen();
        spanOne.textContent = "player 2 wins!";
        spanTwo.textContent = "Takes next round";
        spanTwo.classList.remove("text-round-tied");
        spanTwo.classList.add("text-2-alt");
        buttonQuit.textContent = "Quit";
        buttonNextRound.textContent = "Next Round";
        console.log("yeyey");
    } else {
        console.log("nope");
    }
}

let tieValue = function (){
    document.getElementById("result-tie").innerText = `${tieCount}`;
}

let roundTied = function () {
    if (sum == 9) {
        winnerScreen ();
        winner = 3;
        spanOne.textContent = "";
        spanTwo.textContent = "Round Tied";
        spanTwo.classList.remove("text-2");
        spanTwo.classList.remove("text-2-alt");
        spanTwo.classList.add("text-round-tied");
        buttonQuit.textContent = "Quit";
        buttonNextRound.textContent = "Next Round";
        tieCount++;
        tieValue();
    }
}

let ConfirmCancel = () => {
    buttonQuit.classList.add("cancel");
    buttonQuit.textContent = "No, cancel";
    buttonNextRound.textContent = "Yes, restart";
}

let quitGame = function() {
    let count = 0;
    buttonQuit.addEventListener("click", () => {
    displayToggle();
    });
    buttonNextRound.addEventListener("click", () =>{
        if (buttonNextRound.textContent == "Next Round"){
            goTodefault();
            document.getElementById("last-screen").classList.add("hidden");
        }
    });
}

let newGame = Array.from(inputs).map((input) => {   
    input.addEventListener ("click", (event) => {  
    if (document.getElementById("multiplayer").getAttribute("data-id") == 1){
        if (sum < 9) {
            event.target.value = "1";
            sum += parseInt(input["value"]);
        } else {
            sum = 9;
        }
        if (sum % 2 == 1){
            event.target.classList.add("bg-image-x");
            valueX = event.target.value = "1";
            turn.classList.remove("bg-image-x");
            turn.classList.add("bg-image-o");
        } else {
            event.target.classList.add("bg-image-o");
            valueO = event.target.value = "2";
            turn.classList.remove("bg-image-o");
            turn.classList.add("bg-image-x");
        }
        newInput();
        roundTied ();
        winnerPlayer();
        if (winner == 1 || winner == 2 || winner ==3) {
            quitGame();
        }
        event.target.disabled ="true";
    }
    });    
});


// CPU play

let restartButton = () =>{
    document.getElementById("restart").addEventListener("click",()=>{
    winnerScreen();
    spanOne.textContent = "";
    spanTwo.textContent = "Restart Game?"
    spanTwo.classList.add("text-round-tied");
    ConfirmCancel();
    displayToggle();
});
}

restartButton();

document.getElementById("cpu").addEventListener("click",(event)=>{
let game = document.getElementById("game");
document.getElementById("logo").classList.add("hidden");
document.getElementById("cpu").classList.add("hidden");
document.getElementById("multiplayer").classList.add("hidden");
document.getElementById("main-container").classList.add("hidden");
game.classList.remove("hidden");
document.getElementById("cpu").setAttribute("data-id", "1");
});

let newGameCpu = Array.from(inputs).map((input) => {   
input.addEventListener ("click", (event) => {  
if (document.getElementById("cpu").getAttribute("data-id") == 1){
    if (sum < 9) {
        event.target.value = "1";
        sum += parseInt(input["value"]);
        event.target.classList.add("bg-image-x");
        valueX = event.target.value = "1";
        turn.classList.remove("bg-image-x");
        turn.classList.add("bg-image-o");
        event.target.classList.remove("input-class");
        event.target.disabled ="true";
        newInput();
        if (event.target.id != "input-2.2" && document.getElementById("input-2.2").value != "2" && document.getElementById("input-2.2").value != "1") {
            document.getElementById("input-2.2").classList.add("bg-image-o");
            document.getElementById("input-2.2").classList.remove("input-class");
            document.getElementById("input-2.2").value = "2";
            turn.classList.remove("bg-image-o");
            turn.classList.add("bg-image-x");
            document.getElementById("input-2.2").disabled = "true";
            sum += parseInt(input["value"]);
        }else if (event.target.id == "input-2.2" && document.getElementById("input-1.1").disabled != "true" && document.getElementById("input-1.1").value != "1") {
            document.getElementById("input-1.1").classList.add("bg-image-o");
            document.getElementById("input-1.1").classList.remove("input-class");
            document.getElementById("input-1.1").value = "2";
            turn.classList.remove("bg-image-o");
            turn.classList.add("bg-image-x");
            document.getElementById("input-1.1").disabled ="true";
            sum += parseInt(input["value"]);
        }else if(inputOne + inputTwo + inputThree == "110" && document.getElementById("input-1.3").disabled != "true"&& document.getElementById("input-1.3").value != "1"){
            document.getElementById("input-1.3").classList.add("bg-image-o");
            document.getElementById("input-1.3").classList.remove("input-class");
            document.getElementById("input-1.3").value = "2";
            turn.classList.remove("bg-image-o");
            turn.classList.add("bg-image-x");
            sum += parseInt(input["value"]);
            document.getElementById("input-1.3").disabled ="true";
        }else if(inputOne + inputTwo + inputThree == "101" && document.getElementById("input-1.2").disabled != "true"&& document.getElementById("input-1.2").value != "1"){
            document.getElementById("input-1.2").classList.add("bg-image-o");
            document.getElementById("input-1.2").classList.remove("input-class");
            document.getElementById("input-1.2").value = "2";
            turn.classList.remove("bg-image-o");
            turn.classList.add("bg-image-x");
            sum += parseInt(input["value"]);
            document.getElementById("input-1.2").disabled ="true";
        }else if(inputOne + inputTwo + inputThree == "011" && document.getElementById("input-1.1").disabled != "true"&& document.getElementById("input-1.1").value != "1"){
            document.getElementById("input-1.1").classList.add("bg-image-o");
            document.getElementById("input-1.1").classList.remove("input-class");
            document.getElementById("input-1.1").value = "2";
            turn.classList.remove("bg-image-o");
            turn.classList.add("bg-image-x");
            sum += parseInt(input["value"]);
            document.getElementById("input-1.1").disabled ="true";
        }else if(inputSeven + inputEight + inputNine == "011" && document.getElementById("input-3.1").disabled != "true"&& document.getElementById("input-3.1").value != "1"){
            document.getElementById("input-3.1").classList.add("bg-image-o");
            document.getElementById("input-3.1").classList.remove("input-class");
            document.getElementById("input-3.1").value = "2";
            turn.classList.remove("bg-image-o");
            turn.classList.add("bg-image-x");
            sum += parseInt(input["value"]);
            document.getElementById("input-3.1").disabled ="true";
        }else if(inputSeven + inputEight + inputNine == "110" && document.getElementById("input-3.3").disabled != "true"&& document.getElementById("input-3.3").value != "1"){
            document.getElementById("input-3.3").classList.add("bg-image-o");
            document.getElementById("input-3.3").classList.remove("input-class");
            document.getElementById("input-3.3").value = "2";
            turn.classList.remove("bg-image-o");
            turn.classList.add("bg-image-x");
            sum += parseInt(input["value"]);
            document.getElementById("input-3.3").disabled ="true";
        }else if(inputSeven + inputEight + inputNine == "101" && document.getElementById("input-3.2").disabled != "true"&& document.getElementById("input-3.2").value != "1"){
            document.getElementById("input-3.2").classList.add("bg-image-o");
            document.getElementById("input-3.2").classList.remove("input-class");
            document.getElementById("input-3.2").value = "2";
            turn.classList.remove("bg-image-o");
            turn.classList.add("bg-image-x");
            sum += parseInt(input["value"]);
            document.getElementById("input-3.2").disabled ="true";
        }else if(inputOne + inputFour + inputSeven == "011" && document.getElementById("input-1.1").disabled != "true"&& document.getElementById("input-1.1").value != "1"){
            document.getElementById("input-1.1").classList.add("bg-image-o");
            document.getElementById("input-1.1").classList.remove("input-class");
            document.getElementById("input-1.1").value = "2";
            turn.classList.remove("bg-image-o");
            turn.classList.add("bg-image-x");
            sum += parseInt(input["value"]);
            document.getElementById("input-1.1").disabled ="true";
        }else if(inputOne + inputFour + inputSeven == "110" && document.getElementById("input-3.1").disabled != "true" && document.getElementById("input-3.1").value != "1"){
            document.getElementById("input-3.1").classList.add("bg-image-o");
            document.getElementById("input-3.1").classList.remove("input-class");
            document.getElementById("input-3.1").value = "2";
            turn.classList.remove("bg-image-o");
            turn.classList.add("bg-image-x");
            sum += parseInt(input["value"]);
            document.getElementById("input-3.1").disabled ="true";
        }else if(inputOne + inputFour + inputSeven == "101" && document.getElementById("input-2.1").disabled != "true"&& document.getElementById("input-2.1").value != "1"){
            document.getElementById("input-2.1").classList.add("bg-image-o");
            document.getElementById("input-2.1").classList.remove("input-class");
            document.getElementById("input-2.1").value = "2";
            turn.classList.remove("bg-image-o");
            turn.classList.add("bg-image-x");
            sum += parseInt(input["value"]);
            document.getElementById("input-2.1").disabled ="true";
        }else if(inputThree + inputSix + inputNine == "011" && document.getElementById("input-1.3").disabled != "true"&& document.getElementById("input-1.3").value != "1"){
            document.getElementById("input-1.3").classList.add("bg-image-o");
            document.getElementById("input-1.3").classList.remove("input-class");
            document.getElementById("input-1.3").value = "2";
            turn.classList.remove("bg-image-o");
            turn.classList.add("bg-image-x");
            sum += parseInt(input["value"]);
            document.getElementById("input-1.3").disabled ="true";
        }else if(inputThree + inputSix + inputNine == "110" && document.getElementById("input-3.3").disabled != "true"&& document.getElementById("input-3.3").value != "1"){
            document.getElementById("input-3.3").classList.add("bg-image-o");
            document.getElementById("input-3.3").classList.remove("input-class");
            document.getElementById("input-3.3").value = "2";
            turn.classList.remove("bg-image-o");
            turn.classList.add("bg-image-x");
            sum += parseInt(input["value"]);
            document.getElementById("input-3.3").disabled ="true";
        }else if(inputThree + inputSix + inputNine == "101" && document.getElementById("input-2.3").disabled != "true"&& document.getElementById("input-2.3").value != "1"){
            document.getElementById("input-2.3").classList.add("bg-image-o");
            document.getElementById("input-2.3").classList.remove("input-class");
            document.getElementById("input-2.3").value = "2";
            turn.classList.remove("bg-image-o");
            turn.classList.add("bg-image-x");
            sum += parseInt(input["value"]);
            document.getElementById("input-2.3").disabled ="true";
        }else if(inputTwo + inputFive + inputEight == "011" && document.getElementById("input-1.2").disabled != "true"&& document.getElementById("input-1.2").value != "1"){
            document.getElementById("input-1.2").classList.add("bg-image-o");
            document.getElementById("input-1.2").classList.remove("input-class");
            document.getElementById("input-1.2").value = "2";
            turn.classList.remove("bg-image-o");
            turn.classList.add("bg-image-x");
            sum += parseInt(input["value"]);
            document.getElementById("input-1.2").disabled ="true";
        }else if(inputTwo + inputFive + inputEight == "110" && document.getElementById("input-3.2").disabled != "true"&& document.getElementById("input-3.2").value != "1"){
            document.getElementById("input-3.2").classList.add("bg-image-o");
            document.getElementById("input-3.2").classList.remove("input-class");
            document.getElementById("input-3.2").value = "2";
            turn.classList.remove("bg-image-o");
            turn.classList.add("bg-image-x");
            sum += parseInt(input["value"]);
            document.getElementById("input-3.2").disabled ="true";
        }else if(inputThree + inputFive + inputSeven == "110" && document.getElementById("input-3.1").disabled != "true"&& document.getElementById("input-3.1").value != "1"){
            document.getElementById("input-3.1").classList.add("bg-image-o");
            document.getElementById("input-3.1").classList.remove("input-class");
            document.getElementById("input-3.1").value = "2";
            turn.classList.remove("bg-image-o");
            turn.classList.add("bg-image-x");
            sum += parseInt(input["value"]);
            document.getElementById("input-3.1").disabled ="true";
        }else if(inputThree + inputFive + inputSeven == "011" && document.getElementById("input-1.3").disabled != "true"&& document.getElementById("input-1.3").value != "1"){
            document.getElementById("input-1.3").classList.add("bg-image-o");
            document.getElementById("input-1.3").classList.remove("input-class");
            document.getElementById("input-1.3").value = "2";
            turn.classList.remove("bg-image-o");
            turn.classList.add("bg-image-x");
            sum += parseInt(input["value"]);
            document.getElementById("input-1.3").disabled ="true";
        }else if(inputFour + inputFive + inputSix == "011" && document.getElementById("input-2.1").disabled != "true"&& document.getElementById("input-2.1").value != "1"){
            document.getElementById("input-2.1").classList.add("bg-image-o");
            document.getElementById("input-2.1").classList.remove("input-class");
            document.getElementById("input-2.1").value = "2";
            turn.classList.remove("bg-image-o");
            turn.classList.add("bg-image-x");
            sum += parseInt(input["value"]);
            document.getElementById("input-2.1").disabled ="true";
        }else if(inputFour + inputFive + inputSix == "110" && document.getElementById("input-2.3").disabled != "true"&& document.getElementById("input-2.3").value != "1"){
            document.getElementById("input-2.3").classList.add("bg-image-o");
            document.getElementById("input-2.3").classList.remove("input-class");
            document.getElementById("input-2.3").value = "2";
            turn.classList.remove("bg-image-o");
            turn.classList.add("bg-image-x");
            sum += parseInt(input["value"]);
            document.getElementById("input-2.3").disabled ="true";
        } else if (sum != 9 && sum < 9) {
            let zeroInputs = document.getElementsByClassName("input-class");
            let arrayInputValueZero = Array.from(zeroInputs).map(() => { 
            });
            let random = Math.floor(Math.random()*arrayInputValueZero.length);
            let randomInput = zeroInputs[random];
            randomInput.classList.add("bg-image-o");
            randomInput.classList.remove("input-class");
            randomInput.value = "2";
            randomInput.disabled ="true";
            turn.classList.remove("bg-image-o");
            turn.classList.add("bg-image-x");
            sum += parseInt(input["value"]);
        }
    } else {
        sum = 9;
    }
    newInput();
    roundTied ();
    winnerPlayer();
    if (winner == 1 || winner == 2 || winner ==3) {
        quitGame();
    }
    console.log(sum);
}
});
});