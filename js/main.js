// ==================
// ===== NAME  ======
// ==================

let userName = prompt("Who are you?");

// ================
// ==== ROOMS =====
// ================
let clocktower = "As we climb to the second story we can sneak a peek into the Clocktower here - one of our classrooms. Looks like Brandon here is brainstorming some pseudo code on our whiteboard wall! The room is also equipped with a projector screen for live demos and sometimes entertainment purposes. We've got a bright and beautiful mural on that back wall and, obviously, our homage to Back to the Future framed next to the screen. Where would you like to go next, Cupboard, Cloud City, or Kitchen?"

let cloudcity = "A little warm up here I know but the students here have a great working space here in Cloud City. A projecter and plenty of white board space to collaborate. And clearly if you're in here you should join the Dark Side. We have cookies. Just ask Victoria here! Oh you do have some cookies? Oh. They're gluten free. No thanks. Let's move on. Where to next? Clocktower, Cupboard, or Kitchen?"

let cupboard = "Cupboard, eh? " + userName + ", it's okay I'm a Harry Potter fan too! And as you can see, we've got this cozy space under the stairs for students to use as a conference room. Jamie is over there in the corner coding away... Hey Jamie! Let's not bother him too much. We can still visit the Clocktower, Cloud City, or Kitchen."

let kitchen = "Here we have the finest coffee in the land and a single microwave that works very hard to provide for all of our students. Our beautiful mural here starts everyone's day with local pride. Hashtag City of Oaks... As you can see Ben here likes to hold <b>the</b> most random conversations with any and all who enter our doors. Hey, Ben! No, I do not know why I can't be a dual citizen of Switzerland and the US but that sounds like a great conversation to have when I'm done with this tour! Let's move on. We can still see Clocktower, Cupboard, or Cloud City next. "


// =================
// ===== FIRST =====
// =================

let firstQuestion = prompt("Hi " + userName + "! I'm Stacey, I'll be your guide around the Iron Yard campus today. What would you like to see first? Choose one of Clocktower, Cupboard, Cloud City, or Kitchen.")

// ================
// ==== SECOND ====
// ================

if (firstQuestion === "Clocktower") {
    let first = prompt(`${clocktower}`);

} else if (firstQuestion === "Cupboard") {
    let first = prompt(`${cupboard}`)

} else if (firstQuestion === "Cloud City") {
    let first = prompt(`${cloudycity}`)

} else if (firstQuestion === "Kitchen") {
    let first = prompt(`${kitchen}`)
}

// if (first === "Clocktower") {
//     let second = prompt("As we climb to the second story we can sneak a peek into the Clocktower here - one of our classrooms. Looks like Brandon here is brainstorming some pseudo code on our whiteboard wall! The room is also equipped with a projector screen for live demos and sometimes entertainment purposes. We've got a bright and beautiful mural on that back wall and, obviously, our homage to Back to the Future framed next to the screen. Where would you like to go next, Cupboard, Cloud City, or Kitchen? ");
// } else if (first === "Cupboard") {
//     let second = prompt("Cupboard, eh? " + userName + ", it's okay I'm a Harry Potter fan too! And as you can see, we've got this cozy space under the stairs for students to use as a conference room. Jamie is over there in the corner coding away... Hey Jamie! Let's not bother him too much. We can still visit the Clocktower, Cloud City, or Kitchen. ")
// } else if (first === "Cloud City") {
//     let second = prompt("A little warm up here I know but the students here have a great working space here in Cloud City. A projecter and plenty of white board space to collaborate. And clearly if you're in here you should join the Dark Side. We have cookies. Just ask Victoria here! Oh you do have some cookies? Oh. They're gluten free. No thanks. Let's move on. Where to next? Clocktower, Cupboard, or Kitchen?")
// } else if (first === "Kitchen") {
//     let second = prompt("Here we have the finest coffee in the land and a single microwave that works very hard to provide for all of our students. Our beautiful mural here starts everyone's day with local pride. Hashtag City of Oaks... As you can see Ben here likes to hold <b>the</b> most random conversations with any and all who enter our doors. Hey, Ben! No, I do not know why I can't be a dual citizen of Switzerland and the US but that sounds like a great conversation to have when I'm done with this tour! Let's move on. We can still see Clocktower, Cupboard, or Cloud City next.")
// }
