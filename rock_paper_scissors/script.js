let userScore = 0 ;
let compScore = 0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    //Finding radnom index for above array 
    const randIdx = Math.floor(Math.random()*3) ;
    // rock , paper , scissors
    return options[randIdx] ;
};

const drawGame = () => {
    console.log("Game was draw.");
};

const showWinner = (userWin , userChoice ,compChoice) => {

    if(userWin) 
    {
        console.log("YOU WIN!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        console.log("YOU LOSE!");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOSE! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red" ;
    }
    
}

const playGame= (userChoice) => {
    console.log("user choice = ", userChoice);
    // Generate Computer choice 
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if ( userChoice === compChoice )
    {
        drawGame();
        msg.innerText = "GAME WAS DRAW!";
        msg.style.backgroundColor = "black" ;
    }  else {
    let userWin = true;
    if (userChoice === "Rock") {
      //scissors, paper
      userWin = compChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      //rock, scissors
      userWin = compChoice === "Scissor" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "Rock" ? false : true;
    }

        showWinner(userWin, userChoice, compChoice);
}
}; 

choices.forEach((choice) =>
{
    choice.addEventListener("click", () =>
    {
        const userChoice = choice.getAttribute("id") ;     
        // console.log("Choice was clicked", userChoice);
        playGame(userChoice) ;
    });
});
