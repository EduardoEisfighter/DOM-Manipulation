console.log("EDUARDOOOOOO PORRR QUEEEEEEEEEE")

let title = document.getElementById('title')
console.log("before> ",title.innerText)
title.innerText = "Trefacio Harganemuts"
console.log("after> ",title.innerText)
title.style.color = "red"

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

// redDiv.onclick = () => console.log('você clicou vermelho')
// yellowDiv.onclick = () => console.log('você clicou amarelo')
// greenDiv.onclick = () => console.log('você clicou verde')

const squares = document.querySelectorAll('.colorSquare')

const timesClicked = {'red': 0, 'yellow': 0, 'green': 0}

// squares.forEach(square => console.log(square.value))
squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value]
    console.log(square.value)
  }
})

function clearScores() {
  timesClicked.red = 0
  timesClicked.yellow = 0
  timesClicked.green= 0
  squares.forEach(square => {
   square.innerText = '0'
  })
} 

const clearGameDiv = document.getElementById('clearGame')
clearGameDiv.onclick = () => clearScores()