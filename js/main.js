// SCRAMBLE BOX FUNCIONALITY ******START*******//

// set variables

let word = document.querySelector("#scramInput");
let mixed;

function activeState() {
  document.querySelector("#scramInput").id = 'scramOutput';
  document.querySelector("#scramOutput").value = `${mixed}`;
  document.querySelector("#scramButton").style.display = "none";
  document.querySelector("#resetScramble").style.display = "inline";
}

function reset() {
  word.value = "";
  document.querySelector("#scramOutput").id = "scramInput";
  document.querySelector("#scramButton").style.display = "inline";
  document.querySelector("#resetScramble").style.display = "none";
}

function scramble() {
  mixed = word.value.split("").sort(function() {
    return .6 - Math.random()
  }).join("");
  activeState();
}

// SCRAMBLE BOX FUNCIONALITY ******END*******//

let score = 0;
let loseCounter = 3;

function resetUnscramble() {
  loseCounter = 3;
  score = 0;
  document.querySelector("#unScrambleBox").innerHTML = `
  <h2>Un-Scramble</h2>
  <h2>Can you unscramble the word?</h2>
  <button onclick="unscrambleGame()" id="startButton">Start</button>
  `
}

function unscrambleGame() {

  let unScrambleBox = document.querySelector('#unScrambleBox');
  unScrambleBox.innerHTML = '';

  let word = "";
  let scrambledWord = "";

  fetch('http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')

    .then(function(response) {
      // console.log(response);
      response.json().then(function(data) {
          word = data[0].word.toLowerCase();
          console.log(word);
        })

        .then(function() {
          scrambledWord = word.split('').sort(function() {
            return 0.9 - Math.random()
          }).join('');
          console.log(scrambledWord);
          unScrambleBox.innerHTML = `
            <div id="scoreboard">
            <h3 id="score">Score: ${score}</h3>
            <h3 id="attemptsRemaining">Attempts remaining: ${loseCounter}</h3>
            </div>
            <h3 id="scramWord">${scrambledWord}</h3>
            <input type="text" name="" value="" id="unscrambleInput"><button type="button" name="button" id="unscrambleButton">submit</button>
            `;
        })

        .then(function() {
          document.querySelector('#unscrambleButton').addEventListener('click', function() {
            if (document.querySelector('#unscrambleInput').value.toLowerCase() === word) {
              score++
              unScrambleBox.innerHTML = `
                <h1 id="gJob">Great Job!</h1>
                <button onclick="unscrambleGame()" id="startButton">Next</button>
                `
            } else if (loseCounter === 1) {
              unScrambleBox.innerHTML = `
                <h1 id="gOver">Game Over</h1>
                <button id="resetUnScramble" onClick="resetUnscramble()" type="button" name="button">reset</button>
                `
            } else {
              loseCounter--;
              document.querySelector('#attemptsRemaining').innerHTML = `Attempts remaining: ${loseCounter}`;
              console.log('Try again');
              console.log(loseCounter);
            }
          })
        })
    })
}
