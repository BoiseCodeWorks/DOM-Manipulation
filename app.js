let score = 0


function addPoint() {
  score++
  //we practice single responsibility here by making sure addPoint only adds one point and then passes on responsibility to updateScore() that is in charge of only putting the score on the screen. Each one has a single job. This is taking the concept a bit far, but it is good practice to think about it. If a function becomes too large and does too many things we should break it up.
  updateScore()
}

function greet(str) {
  console.log(str)
}


function updateScore() {
  //document accesses our entire html document. This is a huge object that contains many different things. The primary thing we want to focus on is the method querySelector() you pass in a selector(just like used in css) EX: #score selects the element with the id score, p selects the first p tag on the page, .cool selects the first element with the cool class.
  document.querySelector("#score").innerHTML = score.toString()
}

//this selects the element with the id score.
console.log("Element that was selected:", document.querySelector("#score"))
//this returns an array of selected elements, all the p tags on the page.
console.log("Elements that were selected:", document.querySelectorAll("p"))