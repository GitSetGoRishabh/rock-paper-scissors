function playgame(){
    for(let i=0;i<5;i++){
        let humanSelection = humanChoice();
        let computerSelection =  computerChoice();
        playRound(humanSelection,computerSelection);
    }
}

function playRound(humanSelection,computerSelection){
    if(humanSelection==computerSelection) console.log("Tied");
    else if(
        (humanSelection==1 && computerSelection ==3 )
    || (humanSelection==2 && computerSelection ==1 ) 
    || (humanSelection==3 && computerSelection ==2 ) 
    ) console.log("You Win");
    else console.log("You Lost");
    console.log(`Your choice : ${humanSelection} and computer choice : ${computerSelection}`)
    
}

function humanChoice(){
    const Input=Number(prompt("Enter your choice : 1 -> rock , 2 -> paper , 3-> scissors"));
    return Input;
}

function computerChoice(){
    const choices=[1,2,3];
    const randomIdx=Math.floor(Math.random()*choices.length);
    return choices[randomIdx];
}

playgame();