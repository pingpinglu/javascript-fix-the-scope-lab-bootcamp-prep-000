//Q1
var animal = 'dog'

function myAnimal() {
  return animal
}


function yourAnimal() {
  var animal = 'cat'
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

//Q2
var n = 912
function add2(n) {
  
  const two = 2
  return n + two

  // Feel free to move things around!
  
}


//Q3
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()
