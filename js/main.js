let userName = prompt("Who are you?");
let firstQuestion = prompt("Ok, " + userName + ", where do you want to go? Choose one of Africa, S America, N America, or Europe.")

if (firstQuestion === "Africa") {
    let talent = prompt("OK, so we're headed to scout in Africa, eh? Let's hit up our club sponsored training camp in Ghana. We've identified three top talents there. One is an attacking midfielder from Accra; He's 16 and very fast, but very slight of frame for his age. The other target is a goalkeeper who is a giant already! He's 6'4 at only 17. Would you rather sign the AMF or the GK?");
} else if (firstQuestion === "Europe") {
    let talent = prompt("Europe, eh? OK, " + userName + ", we have a central training camp outside of Rome where we've identified two top talents: one is a central midfielder with very strong defensive awareness and the other is powerful and tall striker. Who should we sign: the CMF or the CF?")
} else if (firstQuestion === "S America") {
    let talent = prompt("OK, onto S America it is! We have a good relationship with a famous club in Santiago, Chile. They have two bright young talents, both defenders. The first is a centerback who is very physical but struggles with keeping his cool, while the other is a right-sided fullback with rubber-burning pace. Should we sign the CB or the RB?")
} else if (firstQuestion === "N America") {
    let talent = prompt("We don't have the most developed relationships in N America, but let's give it a try. From my scouting contacts in Chicago, I've heard about two talents: one is a left-sided fullback with very strong crossing but deficiencies in his defensive positioning and the other is a very special support-striker who is child of a former European superstar who moved to the US before retiring from football. Who should we bring back to our club: the LB or the SS?")
}

if (talent === "AMF") {
    let choice1 = prompt("Great choice, boss! We could use some more creativity up front. First order of business is determining whether we want to develop him in-house or send him out for a few years on loan. There are positives and drawbacks to either way, but it's ultimately up to you, Coach " + userName +". What do you say: loan or keep?");
} else if (talent === "GK") {
    let choice2 = prompt("I always say that you should build from the back, first and foremost! First order of business is determining whether we want to develop him in-house or send him out for a few years on loan. There are positives and drawbacks to either way, but it's ultimately up to you, Coach" + userName +". What'll it be: loan or keep?")
} else if (talent === "CMF") {
    let choice3 = prompt("A good central midfielder is the cog that makes everything tick! First order of business is determining whether we want to develop him in-house or send him out for a few years on loan. There are positives and drawbacks to either way, but it's ultimately up to you, Coach" + userName +". What do you say: loan or keep?")
} else if (talent === "CF") {
    let choice4 = prompt("A target-man! Bring on the firepower! First order of business is determining whether we want to develop him in-house or send him out for a few years on loan. There are positives and drawbacks to either way, but it's ultimately up to you, Mr. " + userName +". What'll it be: loan or keep?")
} else if (talent === "CB") {
    let choice5 = prompt("I agree, we need some steel and grit in the backline. First order of business is determining whether we want to develop him in-house or send him out for a few years on loan. There are positives and drawbacks to either way, but it's ultimately up to you, Coach " + userName +". What do you say: loan or keep?")
} else if (talent === "RB") {
    let choice6 = prompt("Width! Width! Width! - That's how the game is played today! First order of business is determining whether we want to develop him in-house or send him out for a few years on loan. There are positives and drawbacks to either way, but it's ultimately up to you, Coach " + userName +". What do you say: loan or keep?")
} else if (talent === "LB") {
    let choice7 = prompt("Width! Width! Width! - That's how the game is played today! First order of business is determining whether we want to develop him in-house or send him out for a few years on loan. There are positives and drawbacks to either way, but it's ultimately up to you, Coach " + userName +". What do you say: loan or keep?")
} else if (talent === "SS") {
    let choice8 = prompt("Assists and goals - this guy will do it all! First order of business is determining whether we want to develop him in-house or send him out for a few years on loan. There are positives and drawbacks to either way, but it's ultimately up to you, Coach " + userName +". What do you say: loan or keep?")
}
