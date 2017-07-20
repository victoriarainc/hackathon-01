let QoD = document.getElementById("QoDBox");
let headers = {
    "Accept": "application/json"
}

QoD.addEventListener("click", function(){
  fetch("http://quotes.rest/qod?category=programming", headers)
    .then(function(data){
      console.log(data)});
})
