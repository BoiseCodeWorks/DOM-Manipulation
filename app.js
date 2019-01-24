let score = 0

function addPoint() {
  score++
  updateScore()
}

function greet(str) {
  console.log(str)
}


function updateScore() {
  document.querySelector("#score").innerHTML = score.toString()
}

console.log("Element that was selected:", document.querySelector("#score"))
console.log("Elements that were selected:", document.querySelectorAll("p"))