let score = 0;
let loseCounter = 3;

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
            <h3>Score: ${score}</h3>
            <h3 id="attemptsRemaining">Attempts remaining:  ${loseCounter};
            <h3>${scrambledWord}</h3>
            <input type="text" name="" value="" id="unscrambleInput"><button type="button" name="button" id="unscrambleButton">Ok</button>
            `;
        })

        .then(function() {
          document.querySelector('#unscrambleButton').addEventListener('click', function() {
            if (document.querySelector('#unscrambleInput').value.toLowerCase() === word) {
              score++
              unScrambleBox.innerHTML = `
                <h1>Great Job!</h1>
                <button onclick="unscrambleGame()" id="startButton">Next</button>
                `
            } else if (loseCounter === 1) {
              unScrambleBox.innerHTML = `
                <h1>Game Over</h1>
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
