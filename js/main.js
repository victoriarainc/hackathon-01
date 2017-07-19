// ==================
// ===== NAME  ======
// ==================

let userName = prompt("Who are you?");

// ================
// ==== ROOMS =====
// ================
let clocktower = "As we climb to the second story we can sneak a peek into the Clocktower here - one of our classrooms. Looks like Brandon here is brainstorming some pseudo code on our whiteboard wall! The room is also equipped with a projector screen for live demos and sometimes entertainment purposes. We've got a bright and beautiful mural on that back wall and, obviously, our homage to Back to the Future framed next to the screen."

let cloudcity = "A little warm up here I know but the students here have a great working space here in Cloud City. A projecter and plenty of white board space to collaborate. And clearly if you're in here you should join the Dark Side. We have cookies. Just ask Victoria here! Oh you do have some cookies? Oh. They're gluten free. No thanks."

let cupboard = "Cupboard, eh? " + userName + ", it's okay I'm a Harry Potter fan too! And as you can see, we've got this cozy space under the stairs for students to use as a conference room. Jamie is over there in the corner coding away... Hey Jamie! Let's not bother him too much."

let exit = "Well that's The Iron Yard. It was really nice meeting you " + userName + "! I hope you liked our campus - we'll see you next time!"


// =================
// ===== FIRST =====
// =================

let firstQuestion = prompt("Hi " + userName + "! I'm Stacey, I'll be your guide around the Iron Yard campus today. What would you like to see first? Choose one of Clocktower, Cupboard, or Cloud City.")

// ================
// ==== TOUR   ====
// ================

if (firstQuestion === "Clocktower") {
  let first = prompt(`${clocktower} Where to next? Cupboard or Cloud City?`);

  if (first === "Cupboard") {
    let second = prompt(`${cupboard} Would you like to finally see the Cloud City? (Y or N)`)
    if (second === "Y") {
      let finale = alert(`${cloudcity} ${exit}`)
    } else if (second === "N") {
      let finale = alert(`${exit}`)
    }

  } else if (first === "Cloud City") {
    let second = prompt(`${cloudcity} Would you like to finally see the Cupboard? (Y or N)`)
    if (second === "Y") {
      let finale = alert(`${cupboard} ${exit}`)
    } else if (second === "N") {
      let finale = alert(`${exit}`)
    }
  }



} else if (firstQuestion === "Cupboard") {
  let first = prompt(`${cupboard} Where to next? Clocktower or Cloud City?`)

  if (first === "Clocktower") {
    let second = prompt(`${clocktower} Would you like to finally see the Cloud City? (Y or N)`)
    if (second === "Y") {
      let finale = alert(`${cloudcity} ${exit}`)
    } else if (second === "N") {
      let finale = alert(`${exit}`)
    }

  } else if (first === "Cloud City") {
    let second = prompt(`${cloudcity} Would you like to finally see the Clocktower? (Y or N)`)
    if (second === "Y") {
      let finale = alert(`${clocktower} ${exit}`)
    } else if (second === "N") {
      let finale = alert(`${exit}`)
    }
  }

  } else if (firstQuestion === "Cloud City") {
    let first = prompt(`${cloudcity} Where to next? Cupboard or Clocktower?`)

    if (first === "Clocktower") {
      let second = prompt(`${clocktower} Would you like to finally see the Cupboard? (Y or N)`)
      if (second === "Y") {
        let finale = alert(`${cupboard} ${exit}`)
      } else if (second === "N") {
        let finale = alert(`${exit}`)
      }
      } else if (first === "Cupboard") {
        let second = prompt(`${cupboard} Would you like to finally see the Clocktower? (Y or N)`)
        if (second === "Y") {
          let finale = alert(`${clocktower} ${exit}`)
        } else if (second === "N") {
          let finale = alert(`${exit}`)
        }
      }
    }
