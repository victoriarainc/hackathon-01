let background = document.getElementById("colorBox");

let hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

background.addEventListener("click", function(){
let newHex = ["#"]
  for (x = 0; x < 6; x++){
    let num = Math.floor(Math.random() * 16);
    newHex.push(hex[num]);
}
let concat = newHex.join("");
console.log(concat);

background.style.backgroundColor = concat;
})
