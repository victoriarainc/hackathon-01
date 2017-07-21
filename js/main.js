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



// UN-SCRAMBLE BOX FUNCIONALITY ******START*******//

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
// UN-SCRAMBLE BOX FUNCIONALITY ******END*******//




// COLOR RANDOMIZER FUNCTIONALITY ********START*****

let background = document.getElementById("colorBox");

let hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

background.addEventListener("click", function(){
let newHex = ["#"]
  for (x = 0; x < 6; x++){
    let num = Math.floor(Math.random() * 16);
    newHex.push(hex[num]);
}
let newColor = newHex.join("");
console.log(newColor);

background.style.backgroundColor = newColor;
document.querySelector("#colRanPrint").innerHTML = newColor;

if (newColor.charAt(1) === "A" || newColor.charAt(1) === "B" || newColor.charAt(1) === "C" || newColor.charAt(1) === "D") {
  document.querySelector("#trogPop").innerHTML =`
  <img id="trog" onClick="removeImg()"src="images/trogdor.png">
  `
  }
})

function removeImg(){
  document.querySelector("#trog").style.display = "none";
}


// Color Randomizer  *******************END********





// COLOR GAME FUNCIONALITY ******START*******//

function colorGameReset() {
  compColorChoice = "";
  playerSelect = "";
  document.querySelector("#colorGame").innerHTML = `
  <div id="colorNameContainer">
    <p id="colorNameSpace"></p>
      <button id="colorGameStart" onClick="colorGame()" type="button" name="button">Start</button>
  </div>

  <div id="colorButtonContainer">
    <button id="redButton" class="guessButton" type="button" name="button" value="RED"></button>
    <button id="purpleButton" class="guessButton" type="button" name="button" value="PURPLE"></button>
    <button id="blueButton" class="guessButton" type="button" name="button" value="BLUE"></button>
    <button id="greenButton" class="guessButton" type="button" name="button" value="GREEN"></button>
    <button id="yellowButton" class="guessButton" type="button" name="button" value="YELLOW"></button>
    <button id="orangeButton" class="guessButton" type="button" name="button" value="ORANGE"></button>
  </div>`
  colorGame();
}

let playerSelect = "";
let compColorChoice = "";

function colorGame() {

  document.querySelector("#colorGameStart").style.display = "none";

  // Declare arrays with color names and color values

  let colorNames = ["RED", "PURPLE", "BLUE", "GREEN", "YELLOW", "ORANGE"];
  let colorValues = ["#dc0404", "#9f04dc", "#0409dc", "#04dc0d", "#f3e63d", "#f3a33d"];

  // Set background color:

  document.querySelector("#colorNameContainer").style.backgroundColor = colorValues[Math.floor(Math.random() * colorNames.length)];

  // Set color name:

  compColorChoice = colorNames[Math.floor(Math.random() * colorNames.length)];

  document.querySelector("#colorNameSpace").innerHTML = `<p id="colorNamesColor">${compColorChoice}</p>`;

  // Set 'color name' text color:

  document.querySelector("#colorNamesColor").style.color = colorValues[Math.floor(Math.random() * colorNames.length)];

  // Set click eventListeners to all buttons to assign value upon click

  playerSelect = document.querySelectorAll(".guessButton");

  for (var i = 0; i < playerSelect.length; i++) {
    playerSelect[i].addEventListener("click", function() {
      playerSelect = this.value;
      if (playerSelect === compColorChoice) {
        colorGameReset();
      } else {
        playerSelect = "";
        compColorChoice = "";
        document.querySelector("#colorNameContainer").innerHTML = `
        <p id="colorGameOver">Game Over</p>
        <button id="colorGameReset" onClick="colorGameReset()" type="button" name="button">Try Again?</button>`
      }
    })
  }
}

// COLOR GAME FUNCIONALITY ******END*******//






// CYOA ******START*******//

// out of function variables
let dialog = {
  'Clock Tower': "As we climb to the second story we can sneak a peek into the Clocktower here - one of our classrooms. Looks like Brandon here is brainstorming some pseudo code on our whiteboard wall! We've got a bright and beautiful mural on that back wall and, obviously, our homage to Back to the Future framed next to the screen.",
  'Cloud City': "A little warm up here this summer but the students here have a great working space in Cloud City. A projecter and plenty of white board space to collaborate. And clearly if you're in here you should join the Dark Side. We have cookies. Just ask Victoria here! Oh, you do have some cookies? Oh. They're gluten free? No thanks.",
  'Cupboard': "Cupboard, eh? I'm a Harry Potter fan too! And as you can see, we've got this cozy space under the stairs for students to use as a conference room. Jamie is over there in the corner coding away... Hey Jamie! Let's not bother him too much.",
  'Lab': "Now that our class sizes have grown and we've integrated our program to include both front-end and back-end development for every student the Lab here has been the main hub of our location. At the end of the day students typically have lab time but they are not restricted to this area for it. Ben and Grant here seem to be working on their daily project so we'll just move right along.",
  'Kitchen': "The heart of our campus is really the kitchen here. Just look around! A beautiful mural to start the day off right, a real, vintage coffee pot, and even a single, hard-working microwave."
}
let promptStrings = [
  'Where to next?',
  'Where would you like to go?',
  'Lets check out a room!',
  'What would you like to see?'
]
let error = "I'm sorry, I didn't catch that.";

// All rooms
let rooms = ['Clock Tower', 'Cupboard', 'Cloud City', 'Lab', 'Kitchen'];

// Game state
let name = "";
let visitedRooms = [];

let cyoaBox = document.getElementById('cyoaBox')

document.getElementById('beginButton').addEventListener('click', displayNamePrompt);

function displayNamePrompt() {
  // Makes sure the adventure is reset
  name = '';
  visitedRooms = [];

  let template = `
  <p class="cyoaP">Who are you?</p>
  <input id="nameInput" placeholder="Name"></input>
  <button id="nameButton">Submit</button>
  `
  cyoaBox.innerHTML = template;
  document.getElementById('nameButton').addEventListener('click', saveName);
}

function saveName() {
  name = document.getElementById('nameInput').value;
  displayGreeting();
}

function displayGreeting() {
  let template = `
  <p class="cyoaP">Hi ${name}! I'm Stacey, I'll be your guide around the Iron Yard campus today.</p>
  <p class="cyoaP">Where would you like to go first?</p>
  `
  cyoaBox.innerHTML = template;
  displayRoomPrompt();
}

function displayRoomPrompt() {
  let room_string = availableRooms().join(', ');
  let template = `
  <p class="cyoaP">${room_string}</p>
  <input id="roomInput"></input>
  <button id="roomButton">Submit</button>
  `
  cyoaBox.innerHTML += template;
  document.getElementById('roomButton').addEventListener('click', displayNextRoom);
}

function displayNextRoom() {

  // Figure out what the user entered
  let selected_room = document.getElementById('roomInput').value;
  console.log(selected_room);

  if (availableRooms().indexOf(selected_room) === -1) {
    cyoaBox.innerHTML += `<p>${error}</p>`;
    document.getElementById('roomButton').addEventListener('click', displayNextRoom);
    return;
  }

  // User selected a valid room, so move the room into Visited
  visitedRooms.push(selected_room);

  let template = `
  <p class="cyoaP">${dialog[selected_room]}</p>
  `
  cyoaBox.innerHTML = template;

  if (availableRooms().length > 0) {
    let prompt_string = promptStrings[Math.floor(Math.random() * promptStrings.length)];
    template = `
    <p class="cyoaP">${prompt_string}</p>
    `
    cyoaBox.innerHTML += template;
    displayRoomPrompt();

  } else {
      // After no more rooms, displays farewell
      template = `
      <p class="cyoaP">Well that's The Iron Yard! It was really nice meeting you ${name}! I hope you liked our campus - we'll see you next time!</p>
      <button id="resetCYOAButton">Restart</button>
      `
      cyoaBox.innerHTML += template;
      document.getElementById('resetCYOAButton').addEventListener('click', displayNamePrompt);
  }
}

// Helper Functions

function availableRooms() {
  let result = [];
  rooms.forEach(function(room) {
    if (visitedRooms.indexOf(room) === -1) {
      result.push(room);
    }
  });
  return result;
}


// ===== Rough Draft ===== //

// ==================
// ===== NAME  ======
// ==================

// let userName = prompt("Who are you?");

// ================
// ==== ROOMS =====
// ================

// let clocktower = "As we climb to the second story we can sneak a peek into the Clocktower here - one of our classrooms. Looks like Brandon here is brainstorming some pseudo code on our whiteboard wall! The room is also equipped with a projector screen for live demos and sometimes entertainment purposes. We've got a bright and beautiful mural on that back wall and, obviously, our homage to Back to the Future framed next to the screen."

// let cloudcity = "A little warm up here I know but the students here have a great working space here in Cloud City. A projecter and plenty of white board space to collaborate. And clearly if you're in here you should join the Dark Side. We have cookies. Just ask Victoria here! Oh you do have some cookies? Oh. They're gluten free. No thanks."

// let cupboard = "Cupboard, eh? " + userName + ", it's okay I'm a Harry Potter fan too! And as you can see, we've got this cozy space under the stairs for students to use as a conference room. Jamie is over there in the corner coding away... Hey Jamie! Let's not bother him too much."


//
// if (firstQuestion === "Clocktower") {
//   let first = prompt(`${clocktower} Where to next? Cupboard or Cloud City?`);
//
//   if (first === "Cupboard") {
//     let second = prompt(`${cupboard} Would you like to finally see the Cloud City? (Y or N)`)
//     if (second === "Y") {
//       let finale = alert(`${cloudcity} ${exit}`)
//     } else if (second === "N") {
//       let finale = alert(`${exit}`)
//     }
//
//   } else if (first === "Cloud City") {
//     let second = prompt(`${cloudcity} Would you like to finally see the Cupboard? (Y or N)`)
//     if (second === "Y") {
//       let finale = alert(`${cupboard} ${exit}`)
//     } else if (second === "N") {
//       let finale = alert(`${exit}`)
//     }
//   }
//
//
//
// } else if (firstQuestion === "Cupboard") {
//   let first = prompt(`${cupboard} Where to next? Clocktower or Cloud City?`)
//
//   if (first === "Clocktower") {
//     let second = prompt(`${clocktower} Would you like to finally see the Cloud City? (Y or N)`)
//     if (second === "Y") {
//       let finale = alert(`${cloudcity} ${exit}`)
//     } else if (second === "N") {
//       let finale = alert(`${exit}`)
//     }
//
//   } else if (first === "Cloud City") {
//     let second = prompt(`${cloudcity} Would you like to finally see the Clocktower? (Y or N)`)
//     if (second === "Y") {
//       let finale = alert(`${clocktower} ${exit}`)
//     } else if (second === "N") {
//       let finale = alert(`${exit}`)
//     }
//   }
//
//   } else if (firstQuestion === "Cloud City") {
//     let first = prompt(`${cloudcity} Where to next? Cupboard or Clocktower?`)
//
//     if (first === "Clocktower") {
//       let second = prompt(`${clocktower} Would you like to finally see the Cupboard? (Y or N)`)
//       if (second === "Y") {
//         let finale = alert(`${cupboard} ${exit}`)
//       } else if (second === "N") {
//         let finale = alert(`${exit}`)
//       }
//       } else if (first === "Cupboard") {
//         let second = prompt(`${cupboard} Would you like to finally see the Clocktower? (Y or N)`)
//         if (second === "Y") {
//           let finale = alert(`${clocktower} ${exit}`)
//         } else if (second === "N") {
//           let finale = alert(`${exit}`)
//         }
//       }
//     }
// CYOA ******END*******//
