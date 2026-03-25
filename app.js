let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg"); 

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");



const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
     return options[randIdx];
  

    //rock,paper,scissors

}

const drawGame=()=>{
    // console.log("Game was draw");
    msg.innerText ="Game Was Draw.Play again";
    msg.style.backgroundColor="#081b31";


    
}

const showWinner=(userWin,choiceId,compChoice)=>{
    if(userWin){
        // console.log("You Win!!");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText =`You Win! Your ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;

        // console.log("You Lose");
        msg.innerText =`You Lose! ${compChoice} beats Your ${choiceId}`;
         msg.style.backgroundColor="red";

        
    }


}


const playGame=(choiceId)=>{

    console.log("user choice=",choiceId);
    //Generate computer choice;
    
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);


    if(choiceId ===  compChoice)
    {
        //Draw Game
        drawGame();

    }
    else{
        let userWin=true;
        if(choiceId ==="rock")
        {
            //Scissors,pappers,
          userWin =compChoice==="paper" ? false:true;
        }
        else if(choiceId ==="paper")
        {
            //rock,scissors
           userWin=compChoice==="scissors" ? false :true;

        }
        else{
            userWin=compChoice==="rock"?false:true;
        }

        showWinner(userWin,choiceId,compChoice);
    }
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");
        console.log("choice was clicked",choiceId);
        playGame(choiceId)
        
    });
    
});

// math.floor used the remove the decimal value