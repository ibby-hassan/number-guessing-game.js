function generateRandomNumber() {
    return Math.floor((Math.random() * 100) + 1);
};

const getPlayerGuess = function(){
    while (true) {
        let x = prompt("Enter a number between 1 and 100: ");
        if (x === null) {
            throw new Error("Player has cancelled");
        }
        x = Number(x);
        if (Number.isInteger(x) && x >= 1 && x <= 100) {
            return x;
        } else {
            alert("Invalid input. Please enter a number between 1 and 100.");
        }
    }
}

const checkGuess = function(pg, ca) {
    if(pg>ca){
        console.log("Too high.\n");
        return false;
    } else if(pg<ca){
        console.log("Too low\n");
        return false;
    } else{
        return true;
    }
};

function game(){

    try {
        let number = generateRandomNumber();
        let guesses = [];
        let state = false;
    
    
        for(let i=0;i<10;i++){
            let guess = getPlayerGuess();
            guesses.push(guess);
            console.log("Guesses: ", guesses);
    
            if(checkGuess(guess,number)){
                state = true;
                break;
            }
        }
    
        if(state){
            console.log("YOU WIN!\n");
            console.log(`Number of Attempts: ${guesses.length}\n`);
        } else{
            console.log("YOU LOSE!\n");
            console.log(`The number was: ${number}\n`);
        }
    
        let cntn = prompt("Would you like to play again? (Y/N): ");
        if(cntn.toUpperCase()=="Y"){
            return game();
        }
    
        console.log("Exiting...\n");
        return;
    }
    catch(err){
        console.warn("Player has cancelled.");
    }
}

game();