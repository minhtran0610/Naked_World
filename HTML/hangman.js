var words = ["aerosol","decibel","deforestation"];
var word = words[Math.floor(Math.random() * words.length)];
// // summon the buttons
//     var alphabet = ["a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//     var buttons = function () {
//     keyboard = document.getElementById("butts");
//     keys = document.createElement("ul")
//     for (var i = 0; i < alphabet.length; i++) {
//         keys.id = 'alphabet';
//         list = document.createElement('li');
//         list.id = 'letter';
//         list.innerHTML = alphabet[i];
//         check();
//         keyboard.appendChild(keys);
//         letters.appendChild(list);
//     }
//     }
    
    // Set up the amswer answerArray
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
      answerArray[i] = "_";
    }
    
    var remainingLetters = word.length;
    
    // The game loop
    
    while (remainingLetters > 0) {
    // Show the player their progress 
    alert(answerArray.join(" "));
    
    // Get a guess from the player
    
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
    // Exit the game loop
    break;
    } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
    } else {
    // Update the game state with the guess
    
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess; remainingLetters--;
      }
    }
    }
    
    // The end of the game loop
    }
    
    // Show the answer and congratulate the player
    
    alert(answerArray.join(" "));
    alert("Good job! The answer was " + word);
    
    // Write your functions here
    
    var word = pickWord();
    var answerArray = setupAnswerArray(word);
    var remainingLetters = word.length;
    var pickWord = function () {
    // Return a random word
    };
    
    var setupAnswerArray = function (word) {
    // Return the answer array
    };
    var showPlayerProgress = functin (answerArray)
    {
    //Use alert to show the player their progress
    };
    
    var getGuess = function () {
    // Use prompt to get a guess
    };
    
    var updateGameState = function (guess, word, answerArray) {
    // Update answerArray and return a number showing how many times the guess appears in the word so remainingLetters can be updated
    };
    
    var showAnswerAndCongratulatePlayer = function (answerArray) {
    // Use alert to show the answer and congratulate the player
    };
    while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
    break;
    } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
    } else {
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
    }
    }
    
    showAnswerAndCongratulatePlayer(answerArray);

