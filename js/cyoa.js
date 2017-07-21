// Various prompt test
let dialog = {
  'Clock Tower': "As we climb to the second story we can sneak a peek into the Clocktower here - one of our classrooms. Looks like Brandon here is brainstorming some pseudo code on our whiteboard wall! The room is also equipped with a projector screen for live demos and sometimes entertainment purposes. We've got a bright and beautiful mural on that back wall and, obviously, our homage to Back to the Future framed next to the screen.",
  'Cloud City': "A little warm up here I know but the students here have a great working space here in Cloud City. A projecter and plenty of white board space to collaborate. And clearly if you're in here you should join the Dark Side. We have cookies. Just ask Victoria here! Oh you do have some cookies? Oh. They're gluten free. No thanks.",
  'Cupboard': "Cupboard, eh? I'm a Harry Potter fan too! And as you can see, we've got this cozy space under the stairs for students to use as a conference room. Jamie is over there in the corner coding away... Hey Jamie! Let's not bother him too much.",
  'Lab': "Now that our class sizes have grown and we've integrated our program to include both front-end and back-end development for every student the Lab here has been the main hub of our location. At the end of the day students typically have lab time but they are not restricted to this area for it. Ben and Grant here seem to be working on their daily project so we'll just move right along. In the back of the room, as you can see, is a somewhat intimidating staircase that leads right up to our second story!",
  'Kitchen': "The heart of our campus is really the kitchen here. Just look around! A beautiful mural to start the day off right, a real, vintage coffee pot, and even a hard-working microwave for all to share!"
}
let promptStrings = [
  'Where to next?',
  'Where would you like to go?',
  'Lets check out a room!',
  'What would you like to see?'
]
let error = "I'm sorry, I didn't catch that.";

// All legal, avaliable rooms
let rooms = ['Clock Tower', 'Cupboard', 'Cloud City', 'Lab', 'Kitchen'];

// Game state
let name = "";
let visitedRooms = [];

// We fetch the cyoaBox element a lot, lets just fetch it once
let cyoaBox = document.getElementById('cyoaBox')

document.getElementById('beginButton').addEventListener('click', displayNamePrompt);

function displayNamePrompt() {
  // Make sure the adventure is reset
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

  // User selected a valid room, so mark the new room as visited
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
      // No more rooms, display farewell
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
