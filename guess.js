const number = Math.floor(Math.random()*10 + 1);

document.getElementById("submitBtn").onclick = function (){
 let guesses = document.getElementById("guesses").value
 if (guesses == number) {
  window.alert("you have guessed right")
 } else if(guesses < number) {
  window.alert("number too small")
 }else{
  window.alert("number too large")
 }
 
 
 
}
