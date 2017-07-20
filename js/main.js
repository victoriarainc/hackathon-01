
// SCRAMBLE BOX FUNCIONALITY ******START*******//

// set variables



  let word = document.querySelector("#scramInput");
  let mixed;

  function activeState() {
    document.querySelector("#scramInput").id = 'scramOutput';
    document.querySelector("#scramOutput").value = `${mixed}`;
    document.querySelector("#scramButton").style.display = "none";
    document.querySelector("#resetButton").style.display = "inline";
  }

  function reset() {
    word.value = "";
    document.querySelector("#scramOutput").id = 'scramInput';
    document.querySelector("#scramButton").style.display = "inline";
    document.querySelector("#resetButton").style.display = "none";
  }

  function scramble() {
    mixed = word.value.split("").sort(function() {
      return 0.9 - Math.random()
    }).join("");
    activeState();
  }


// SCRAMBLE BOX FUNCIONALITY ******END*******//

// FOCUS - ScrambleBox ******Start******//

// document.querySelector("#scrambleBox").addEventListener("click", scrambleBoxFocus)
//
// function scrambleBoxFocus(){
//   document.querySelector("#scrambleBox").styles.display = "none";
// }
