

    var letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var chosenLetter
    var turnNumber = 1
    var playerChoice
    var playerWin = 0
    var playerChoiceArray = []
    var playerGuess
    var playerLoss = 0

    
    function randomLetter(unicorn) {
        var randomNum = Math.floor(Math.random() * (unicorn.length));
        chosenLetter = (letterArray[randomNum]);

        playerGuess = 9;
        playerChoiceArray = [];

        console.log('this is the chosenLetter: ' + chosenLetter)
    }

   
    randomLetter(letterArray)
    
    document.getElementById("wins").innerHTML = playerWin
    document.getElementById("guesses").innerHTML = playerGuess;
    document.getElementById("losses").innerHTML = playerLoss;
    document.getElementById("letters").innerHTML = playerChoiceArray;

    document.onkeyup = function (ele) {
        console.log(ele.key);

        playerChoice = ele.key;
        console.log('this is playerChoice: ' + playerChoice)

        if (playerChoice === chosenLetter) {
            playerWin += 1;
            document.getElementById("wins").innerHTML = playerWin
            randomLetter(letterArray);
            alert("Correct! You win! Click OK to restart.");
        }

        else {
            playerGuess -= 1;
            playerChoiceArray.push(" " + ele.key);
            document.getElementById("guesses").innerHTML = playerGuess;
            document.getElementById("letters").innerHTML = playerChoiceArray;
            
            if (playerGuess === 0) {
            playerLoss += 1;
            document.getElementById("losses").innerHTML = playerLoss;
            randomLetter(letterArray);
            alert("You lost, click OK to restart.");
            }
        }


    }


    
    

    

