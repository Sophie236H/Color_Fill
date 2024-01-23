'use strict';

/**
 * ICS3UC Final Project S1 2023-24
 * 
 * Author:Sophie Holland 
 * Description: Color fill is a game where you try to get as mauch of the grid as your color(or territory becuase your color will change) as possible
 * 
 */

let table = []
let element;
for (let x = 1; x < 16; x++) {
  table[x] = []
  for (let y = 1; y < 16; y++) {
    table[x][y] = (x + ":" + y)
  }
}

document.getElementById("playerturn2").hidden = true
document.getElementById("playerturn1").hidden = false
console.log(table)
let numbertable = []
color()

document.getElementById("win1").hidden = true
document.getElementById("win2").hidden = true
document.getElementById("tie").hidden = true



// 1= deepskyblue, 2 = orange, 3 = mediumpurple, 4 = yellowgreen, 5 = pink, 6 = orangered
//this function determines the color of each cell of the table randomly(between the 6 colors)

function color() {
  for (let x = 1; x < table.length; x++) {
    numbertable[x] = []
    for (let y = 1; y < table[x].length; y++) {
      element = document.getElementById(x + ":" + y)
      let random = Math.floor(Math.random() * 6) + 1
      numbertable[x][y] = random
      if (random == 1) {
        element.style.backgroundColor = "deepskyblue";
      }
      else if (random == 2) {
        element.style.backgroundColor = "orange";
      }
      else if (random == 3) {
        element.style.backgroundColor = "mediumpurple";
      }
      else if (random == 4) {
        element.style.backgroundColor = "YellowGreen";
      }
      else if (random == 5) {
        element.style.backgroundColor = "pink";
      }
      else {
        element.style.backgroundColor = "orangered";
      }
    }
  }
  console.log(numbertable)

  return numbertable
}


let playeroneboard = [table[15][1]]

let playertwoboard = [table[1][15]]
let player1score = document.getElementById("playerone").innerHTML = 1
let player2score = document.getElementById("playertwo").innerHTML = 1
let turns = 1
let board;
if (playeroneboard.length + playertwoboard.length == 225 == false) {
  console.log("happy hhappy")
}

//If certain color button is clicked it corresponds to the function of that same color and does everything in that function. There is a function per color. 

document.getElementById("deepskyblueclick").addEventListener('click', blue)
document.getElementById("mediumpurpleclick").addEventListener('click', purple)
document.getElementById("yellowgreenclick").addEventListener('click', yellowgreen)
document.getElementById("orangeclick").addEventListener('click', orange)
document.getElementById("pinkclick").addEventListener('click', pink)
document.getElementById("orangered").addEventListener('click', orangered)

let x;
let y;

 
function blue() {

  if (turns == 1) {
    board = playeroneboard
  }
  else {
    board = playertwoboard
  }

  for (let i = 0; i < board.length; i++) {

    document.getElementById(board[i]).style.backgroundColor = "deepskyblue";
    

    player1score = document.getElementById("playerone").innerHTML = playeroneboard.length
    player2score = document.getElementById("playertwo").innerHTML = playertwoboard.length

    console.log(playeroneboard)

    if (board[i].length == 3) {
      x = parseInt(board[i][0])
      y = parseInt(board[i][2])
      console.log("yes")
    }

    else if ((board[i].length == 4) && (board[i][2] == ":")) {
      x = parseInt(board[i][0] + board[i][1])
      y = parseInt(board[i][3])
      console.log("yippee")
    }

    else if ((board[i].length == 4) && (board[i][2] !== ":")) {
      x = parseInt(board[i][0])
      y = parseInt(board[i][2] + board[i][3])
      console.log("yy")
      
    }
   
    else if (board[i].length == 5) {
      x = parseInt(board[i][0] + board[i][1])
      y = parseInt(board[i][3] + board[i][4])
      console.log("EE")
    }

    console.log(x)
    console.log(y)
    console.log("Yippee", y + 1)

    if ((x == 1) && (y == 1)) {
      if (numbertable[x + 1][y] == 1) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("A")
          }
        }

        if (numbertable[x][y + 1] == 1) {
          if (playerone.includes(table[x][y + 1]) == false) {
            if (playertwoboard.includes(table[x][y + 1]) == false) {
              board.push((table[x][y + 1]))
              console.log("B")
            }
          }
        }
      }
      console.log("1:1")
    }
    //1:1
    if ((x == 15) && (y == 1)) {
      if (numbertable[x - 1][y] == 1) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push(table[x - 1][y])
            console.log("C")
          }
        }
       
      }
      if (numbertable[x][y + 1] == 1) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("D")
          }
        }
       
      }
      console.log("15:1.")
    }
    //15:1

    if ((x == 15) && (y == 15)) {
      if (numbertable[x - 1][y] == 1) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("E")
          }
        }
      }
      if (numbertable[x][y - 1] == 1) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("F")
          }
        }
      }
      console.log("15:15")
    }
    //15:15
    if ((x == 1) && (y == 15)) {
      if (numbertable[x + 1][y] == 1) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("G")
          }
        }
      }
      if (numbertable[x][y - 1] == 1) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("H")
          }
        }
      }


    }
    //1:15
    if (((y !== 1 || 15) && (x == 1))) {

      if (numbertable[x][y + 1] == 1) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("I")
          }
        }
      }
      if (numbertable[x][y - 1] == 1) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("J")
          }
        }
      }
      if (numbertable[x + 1][y] == 1) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("K")
          }
        }
      }
      console.log("Top Row")
    }
    //top row

    if (y != 1 && y != 15 && x == 15) {

      if (numbertable[x][y - 1] == 1) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("L")
          }
        }
      }
      if (numbertable[x][y + 1] == 1) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("M")
          }
        }
        
      }
      if (numbertable[x - 1][y] == 1) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("N")
          }
        }
      }
     
      console.log("Bottom Row")
    }
    //bottom row

    if ((x != 15) && (x != 1) && (y == 15)) {

      if (numbertable[x + 1][y] == 1) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("O")
          }
        }
      }
      if (numbertable[x - 1][y] == 1) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("P")
          }
        }
      }
      if (numbertable[x][y - 1] == 1) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("Q")
          }
        }
      }
      console.log("Right Colum")
    }
    
    //Right Colum
    
    if ((x != 15) && (x != 1) && (y == 1)) {

      if ((numbertable[x][y + 1] == 1)) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("Z")
          }
        }
      }

      if (numbertable[x - 1][y] == 1) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("R")
          }
        }
      }
      
      if (numbertable[x + 1][y] == 1) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("S")
          }
        }
      }
      console.log("Left Colum")
    }
    //Left colum

    else if (x != 15 && x != 1 && y != 15 && y != 1) {

      if (numbertable[x - 1][y] == 1) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("T")
          }
        }
      }
      if (numbertable[x + 1][y] == 1) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("U")
          }
        }
      }
      if (numbertable[x][y - 1] == 1) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("V")
          }
        }
      }

      if (numbertable[x][y + 1] == 1) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("W")
          }
        }
      }

    }
  }
  
  console.log("I got here")

  if (turns == 1) {
    turns = 2
    document.getElementById("playerturn2").hidden = false
    document.getElementById("playerturn1").hidden = true
  }
  else {
    turns = 1
    document.getElementById("playerturn1").hidden = false
    document.getElementById("playerturn2").hidden = true
  }

  end()
  noshowcolor()

}


//Purple function
function purple() {

  if (turns == 1) {
    board = playeroneboard
  }
  else {
    board = playertwoboard
  }

  for (let i = 0; i < board.length; i++) {

    document.getElementById(board[i]).style.backgroundColor = "mediumpurple";

    player1score = document.getElementById("playerone").innerHTML = playeroneboard.length

    player2score = document.getElementById("playertwo").innerHTML = playertwoboard.length

    console.log(playeroneboard)

    if (board[i].length == 3) {
      x = parseInt(board[i][0])
      y = parseInt(board[i][2])
      console.log("yes")
    }

    else if ((board[i].length == 4) && (board[i][2] == ":")) {
      x = parseInt(board[i][0] + board[i][1])
      y = parseInt(board[i][3])
      console.log("yippee")
    }

    else if ((board[i].length == 4) && (board[i][2] !== ":")) {
      x = parseInt(board[i][0])
      y = parseInt(board[i][2] + board[i][3])
      console.log("yy")
      
    }
    
    else if (board[i].length == 5) {
      x = parseInt(board[i][0] + board[i][1])
      y = parseInt(board[i][3] + board[i][4])
      console.log("EE")
    }

    console.log(x)
    console.log(y)
    console.log("Yippee", y + 1)

    if ((x == 1) && (y == 1)) {
      if (numbertable[x + 1][y] == 3) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("A")
          }
        }
        if (numbertable[x][y + 1] == 3) {
          if (playeroneboard.includes(table[x][y + 1]) == false) {
            if (playertwoboard.includes(table[x][y + 1]) == false) {
              board.push((table[x][y + 1]))
              console.log("B")
            }
          }
        }
      }
      console.log("1:1")
    }
    //1:1
    if ((x == 15) && (y == 1)) {
      if (numbertable[x - 1][y] == 3) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("C")
          }
        }
      
      }
      if (numbertable[x][y + 1] == 3) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("D")
          }
        }
       
      }
      console.log("15:1.")
    }
    //15:1

    if ((x == 15) && (y == 15)) {
      if (numbertable[x - 1][y] == 3) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("E")
          }
        }
      }
      if (numbertable[x][y - 1] == 3) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("F")
          }
        }
      }
      console.log("15:15")
    }
    //15:15
    if ((x == 1) && (y == 15)) {
      if (numbertable[x + 1][y] == 3) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("G")
          }
        }
      }
      if (numbertable[x][y - 1] == 3) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("H")
          }
        }
      }


    }
    //1:15
    if (((y !== 1 || 15) && (x == 1))) {

      if (numbertable[x][y + 1] == 3) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("I")
          }
        }
      }
      if (numbertable[x][y - 1] == 3) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("J")
          }
        }
      }
      if (numbertable[x + 1][y] == 3) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("K")
          }
        }
      }
      console.log("Top Row")
    }
    //top row

    if (y != 1 && y != 15 && x == 15) {

      if (numbertable[x][y - 1] == 3) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("L")
          }
        }
      }
      if (numbertable[x][y + 1] == 3) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("M")
          }
        }
        
      }
      if (numbertable[x - 1][y] == 3) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("N")
          }
        }
      }
     
      console.log("Bottom Row")
    }
    //bottom row

    if ((x != 15) && (x != 1) && (y == 15)) {

      if (numbertable[x + 1][y] == 3) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("O")
          }
        }
      }
      if (numbertable[x - 1][y] == 3) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("P")
          }
        }
      }
      if (numbertable[x][y - 1] == 3) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("Q")
          }
        }
      }
      console.log("Right Colum")
    }
    //Right Colum
    
    if ((x != 15) && (x != 1) && (y == 1)) {

      if ((numbertable[x][y + 1] == 3)) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("Z")
          }
        }
      }

      if (numbertable[x - 1][y] == 3) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("R")
          }
        }
      }
     
      if (numbertable[x + 1][y] == 3) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("S")
          }
        }
      }
      console.log("Left Colum")
    }
    //Left colum

    else if (x != 15 && x != 1 && y != 15 && y != 1) {

      if (numbertable[x - 1][y] == 3) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("T")
          }
        }
      }
      if (numbertable[x + 1][y] == 3) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("U")
          }
        }
      }
      if (numbertable[x][y - 1] == 3) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("V")
          }
        }
      }

      if (numbertable[x][y + 1] == 3) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("W")
          }
        }
      }

    }

  }
  console.log(playeroneboard)

  if (turns == 1) {
    turns = 2
    document.getElementById("playerturn2").hidden = false
    document.getElementById("playerturn1").hidden = true
  }
  else {
    turns = 1
    document.getElementById("playerturn1").hidden = false
    document.getElementById("playerturn2").hidden = true
  }
  end()
  noshowcolor()

}


function yellowgreen() {

  if (turns == 1) {
    board = playeroneboard
  }
  else {
    board = playertwoboard
  }

  for (let i = 0; i < board.length; i++) {
    document.getElementById(board[i]).style.backgroundColor = "yellowgreen";

    player1score = document.getElementById("playerone").innerHTML = playeroneboard.length 

    player2score = document.getElementById("playertwo").innerHTML = playertwoboard.length

    console.log(playeroneboard)

    if (board[i].length == 3) {
      x = parseInt(board[i][0])
      y = parseInt(board[i][2])
      console.log("yes")
    }

    else if ((board[i].length == 4) && (board[i][2] == ":")) {
      x = parseInt(board[i][0] + board[i][1])
      y = parseInt(board[i][3])
      console.log("yippee")
    }

    else if ((board[i].length == 4) && (board[i][2] !== ":")) {
      x = parseInt(board[i][0])
      y = parseInt(board[i][2] + board[i][3])
      console.log("yy")
    
    }
    
    else if (board[i].length == 5) {
      x = parseInt(board[i][0] + board[i][1])
      y = parseInt(board[i][3] + board[i][4])
      console.log("EE")
    }

    console.log(x)
    console.log(y)
    console.log("Yippee", y + 1)

    if ((x == 1) && (y == 1)) {
      if (numbertable[x + 1][y] == 4) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("A")
          }
        }
        if (numbertable[x][y + 1] == 4) {
          if (playeroneboard.includes(table[x][y + 1]) == false) {
            if (playertwoboard.includes(table[x][y + 1]) == false) {
              board.push((table[x][y + 1]))
              console.log("B")
            }
          }
        }
      }
      console.log("1:1")
    }
    //1:1
    if ((x == 15) && (y == 1)) {
      if (numbertable[x - 1][y] == 4) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("C")
          }
        }
      
      }
      if (numbertable[x][y + 1] == 4) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("D")
          }
        }
       
      }
      console.log("15:1.")
    }
    //15:1

    if ((x == 15) && (y == 15)) {
      if (numbertable[x - 1][y] == 4) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("E")
          }
        }
      }
      if (numbertable[x][y - 1] == 4) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("F")
          }
        }
      }
      console.log("15:15")
    }
    //15:15
    if ((x == 1) && (y == 15)) {
      if (numbertable[x + 1][y] == 4) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("G")
          }
        }
      }
      if (numbertable[x][y - 1] == 4) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("H")
          }
        }
      }


    }
    //1:15
    if (((y !== 1 || 15) && (x == 1))) {

      if (numbertable[x][y + 1] == 4) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("I")
          }
        }
      }
      if (numbertable[x][y - 1] == 4) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("J")
          }
        }
      }
      if (numbertable[x + 1][y] == 4) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("K")
          }
        }
      }
      console.log("Top Row")
    }
    //top row

    if (y != 1 && y != 15 && x == 15) {

      if (numbertable[x][y - 1] == 4) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("L")
          }
        }
      }
      if (numbertable[x][y + 1] == 4) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("M")
          }
        }
        
      }
      if (numbertable[x - 1][y] == 4) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("N")
          }
        }
      }
      
      console.log("Bottom Row")
    }
    //bottom row

    if ((x != 15) && (x != 1) && (y == 15)) {

      if (numbertable[x + 1][y] == 4) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("O")
          }
        }
      }
      if (numbertable[x - 1][y] == 4) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("P")
          }
        }
      }
      if (numbertable[x][y - 1] == 4) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("Q")
          }
        }
      }
      console.log("Right Colum")
    }
    //Right Colum
    
    if ((x != 15) && (x != 1) && (y == 1)) {

      if ((numbertable[x][y + 1] == 4)) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("Z")
          }
        }
      }

      if (numbertable[x - 1][y] == 4) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("R")
          }
        }
      }
      
      if (numbertable[x + 1][y] == 4) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("S")
          }
        }
      }
      console.log("Left Colum")
    }
    //Left colum

    else if (x != 15 && x != 1 && y != 15 && y != 1) {

      if (numbertable[x - 1][y] == 4) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("T")
          }
        }
      }
      if (numbertable[x + 1][y] == 4) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("U")
          }
        }
      }
      if (numbertable[x][y - 1] == 4) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("V")
          }
        }
      }

      if (numbertable[x][y + 1] == 4) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("W")
          }
        }
      }

    }

  }
  console.log(playeroneboard)

  if (turns == 1) {
    turns = 2
    document.getElementById("playerturn2").hidden = false
    document.getElementById("playerturn1").hidden = true
  }
  else {
    turns = 1
    document.getElementById("playerturn1").hidden = false
    document.getElementById("playerturn2").hidden = true
  }
  end()
  noshowcolor()

}


function orange() {

  if (turns == 1) {
    board = playeroneboard
  }
  else {
    board = playertwoboard
  }

  for (let i = 0; i < board.length; i++) {
    document.getElementById(board[i]).style.backgroundColor = "orange";

    player1score = document.getElementById("playerone").innerHTML = playeroneboard.length

    player2score = document.getElementById("playertwo").innerHTML = playertwoboard.length

    console.log(playeroneboard)

    if (board[i].length == 3) {
      x = parseInt(board[i][0])
      y = parseInt(board[i][2])
      console.log("yes")
    }

    else if ((board[i].length == 4) && (board[i][2] == ":")) {
      x = parseInt(board[i][0] + board[i][1])
      y = parseInt(board[i][3])
      console.log("yippee")
    }

    else if ((board[i].length == 4) && (board[i][2] !== ":")) {
      x = parseInt(board[i][0])
      y = parseInt(board[i][2] + board[i][3])
      console.log("yy")
      
    }
    
    else if (board[i].length == 5) {
      x = parseInt(board[i][0] + board[i][1])
      y = parseInt(board[i][3] + board[i][4])
      console.log("EE")
    }

    console.log(x)
    console.log(y)
    console.log("Yippee", y + 1)

    if ((x == 1) && (y == 1)) {
      if (numbertable[x + 1][y] == 2) {
        if (playeroneboard.includes(table[x + 1][y] == false)) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("A")
          }
        }
        if (numbertable[x][y + 1] == 2) {
          if (playeroneboard.includes(table[x][y + 1]) == false) {
            if (playertwoboard.includes(table[x][y + 1]) == false) {
              board.push((table[x][y + 1]))
              console.log("B")
            }
          }
        }
      }
      console.log("1:1")
    }
    //1:1
    if ((x == 15) && (y == 1)) {
      if (numbertable[x - 1][y] == 2) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("C")
          }
        }
       
      }
      if (numbertable[x][y + 1] == 2) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("D")
          }
        }
        
      }
      console.log("15:1.")
    }
    //15:1

    if ((x == 15) && (y == 15)) {
      if (numbertable[x - 1][y] == 2) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("E")
          }
        }
      }
      if (numbertable[x][y - 1] == 2) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("F")
          }
        }
      }
      console.log("15:15")
    }
    //15:15
    if ((x == 1) && (y == 15)) {
      if (numbertable[x + 1][y] == 2) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("G")
          }
        }
      }
      if (numbertable[x][y - 1] == 2) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("H")
          }
        }
      }


    }
    //1:15
    if (((y !== 1 || 15) && (x == 1))) {

      if (numbertable[x][y + 1] == 2) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("I")
          }
        }
      }
      if (numbertable[x][y - 1] == 2) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("J")
          }
        }
      }
      if (numbertable[x + 1][y] == 2) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("K")
          }
        }
      }
      console.log("Top Row")
    }
    //top row

    if (y != 1 && y != 15 && x == 15) {

      if (numbertable[x][y - 1] == 2) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("L")
          }
        }
      }
      if (numbertable[x][y + 1] == 2) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("M")
          }
        }
        
      }
      if (numbertable[x - 1][y] == 2) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("N")
          }
        }
      }
      
      console.log("Bottom Row")
    }
    //bottom row

    if ((x != 15) && (x != 1) && (y == 15)) {

      if (numbertable[x + 1][y] == 2) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("O")
          }
        }
      }
      if (numbertable[x - 1][y] == 2) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("P")
          }
        }
      }
      if (numbertable[x][y - 1] == 2) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("Q")
          }
        }
      }
      console.log("Right Colum")
    }
    //Right Colum
  
    if ((x != 15) && (x != 1) && (y == 1)) {

      if ((numbertable[x][y + 1] == 2)) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("Z")
          }
        }
      }

      if (numbertable[x - 1][y] == 2) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("R")
          }
        }
      }
      if (numbertable[x + 1][y] == 2) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("S")
          }
        }
      }
      console.log("Left Colum")
    }
    //Left colum

    else if (x != 15 && x != 1 && y != 15 && y != 1) {

      if (numbertable[x - 1][y] == 2) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("T")
          }
        }
      }
      if (numbertable[x + 1][y] == 2) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("U")
          }
        }
      }
      if (numbertable[x][y - 1] == 2) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("V")
          }
        }
      }

      if (numbertable[x][y + 1] == 2) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("W")
          }
        }
      }

    }

  }
  console.log(playeroneboard)

  if (turns == 1) {
    turns = 2
    document.getElementById("playerturn2").hidden = false
    document.getElementById("playerturn1").hidden = true
  }
  else {
    turns = 1
    document.getElementById("playerturn1").hidden = false
    document.getElementById("playerturn2").hidden = true
  }
  end()
  noshowcolor()

}

function pink() {

  if (turns == 1) {
    board = playeroneboard
  }
  else {
    board = playertwoboard
  }

  for (let i = 0; i < board.length; i++) {
    document.getElementById(board[i]).style.backgroundColor = "pink";

    player1score = document.getElementById("playerone").innerHTML = playeroneboard.length

    player2score = document.getElementById("playertwo").innerHTML = playertwoboard.length

    console.log(playeroneboard)

    if (board[i].length == 3) {
      x = parseInt(board[i][0])
      y = parseInt(board[i][2])
      console.log("yes")
    }

    else if ((board[i].length == 4) && (board[i][2] == ":")) {
      x = parseInt(board[i][0] + board[i][1])
      y = parseInt(board[i][3])
      console.log("yippee")
    }

    else if ((board[i].length == 4) && (board[i][2] !== ":")) {
      x = parseInt(board[i][0])
      y = parseInt(board[i][2] + board[i][3])
      console.log("yy")

    }
    
    else if (board[i].length == 5) {
      x = parseInt(board[i][0] + board[i][1])
      y = parseInt(board[i][3] + board[i][4])
      console.log("EE")
    }

    console.log(x)
    console.log(y)
    console.log("Yippee", y + 1)

    if ((x == 1) && (y == 1)) {
      if (numbertable[x + 1][y] == 5) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("A")
          }
        }
        if (numbertable[x][y + 1] == 5) {
          if (playeroneboard.includes(table[x][y + 1]) == false) {
            if (playertwoboard.includes(table[x][y + 1]) == false) {
              board.push((table[x][y + 1]))
              console.log("B")
            }
          }
        }
      }
      console.log("1:1")
    }
    //1:1
    if ((x == 15) && (y == 1)) {
      if (numbertable[x - 1][y] == 5) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("C")
          }
        }
      }
      if (numbertable[x][y + 1] == 5) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("D")
          }
        }
      }
      console.log("15:1.")
    }
    //15:1

    if ((x == 15) && (y == 15)) {
      if (numbertable[x - 1][y] == 5) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("E")
          }
        }
      }
      if (numbertable[x][y - 1] == 5) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("F")
          }
        }
      }
      console.log("15:15")
    }
    //15:15
    if ((x == 1) && (y == 15)) {
      if (numbertable[x + 1][y] == 5) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("G")
          }
        }
      }
      if (numbertable[x][y - 1] == 5) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("H")
          }
        }
      }


    }
    //1:15
    if (((y !== 1 || 15) && (x == 1))) {

      if (numbertable[x][y + 1] == 5) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("I")
          }
        }
      }
      if (numbertable[x][y - 1] == 5) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("J")
          }
        }
      }
      if (numbertable[x + 1][y] == 5) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("K")
          }
        }
      }
      console.log("Top Row")
    }
    //top row

    if (y != 1 && y != 15 && x == 15) {

      if (numbertable[x][y - 1] == 5) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("L")
          }
        }
      }
      if (numbertable[x][y + 1] == 5) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("M")
          }
        }
       
      }
      if (numbertable[x - 1][y] == 5) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("N")
          }
        }
      }
      
      console.log("Bottom Row")
    }
    //bottom row

    if ((x != 15) && (x != 1) && (y == 15)) {

      if (numbertable[x + 1][y] == 5) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("O")
          }
        }
      }
      if (numbertable[x - 1][y] == 5) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("P")
          }
        }
      }
      if (numbertable[x][y - 1] == 5) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("Q")
          }
        }
      }
      console.log("Right Colum")
    }
    
    //Right Colum
    
    if ((x != 15) && (x != 1) && (y == 1)) {

      if ((numbertable[x][y + 1] == 5)) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("Z")
          }
        }
      }

      if (numbertable[x - 1][y] == 5) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("R")
          }
        }
      }

      if (numbertable[x + 1][y] == 5) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("S")
          }
        }
      }
      console.log("Left Colum")
    }
    //Left colum

    else if (x != 15 && x != 1 && y != 15 && y != 1) {

      if (numbertable[x - 1][y] == 5) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("T")
          }
        }
      }
      if (numbertable[x + 1][y] == 5) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("U")
          }
        }
      }
      if (numbertable[x][y - 1] == 5) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("V")
          }
        }
      }

      if (numbertable[x][y + 1] == 5) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("W")
          }
        }
      }

    }

  }
  console.log(playeroneboard)

  if (turns == 1) {
    turns = 2
    document.getElementById("playerturn2").hidden = false
    document.getElementById("playerturn1").hidden = true
  }
  else {
    turns = 1
    document.getElementById("playerturn1").hidden = false
    document.getElementById("playerturn2").hidden = true
  }


  end()
  noshowcolor()

}

function orangered() {

  if (turns == 1) {
    board = playeroneboard
  }
  else {
    board = playertwoboard
  }

  for (let i = 0; i < board.length; i++) {
    document.getElementById(board[i]).style.backgroundColor = "orangered";

    player1score = document.getElementById("playerone").innerHTML = playeroneboard.length

    player2score = document.getElementById("playertwo").innerHTML = playertwoboard.length

    console.log(playeroneboard)

    if (board[i].length == 3) {
      x = parseInt(board[i][0])
      y = parseInt(board[i][2])
      console.log("yes")
    }

    else if ((board[i].length == 4) && (board[i][2] == ":")) {
      x = parseInt(board[i][0] + board[i][1])
      y = parseInt(board[i][3])
      console.log("yippee")
    }

    else if ((board[i].length == 4) && (board[i][2] !== ":")) {
      x = parseInt(board[i][0])
      y = parseInt(board[i][2] + board[i][3])
      console.log("yy")
     
    }
  
    else if (board[i].length == 5) {
      x = parseInt(board[i][0] + board[i][1])
      y = parseInt(board[i][3] + board[i][4])
      console.log("EE")
    }

    console.log(x)
    console.log(y)
    console.log("Yippee", y + 1)

    if ((x == 1) && (y == 1)) {
      if (numbertable[x + 1][y] == 6) {
        if (playeroneboard.includes(table[x + 1][y] == false)) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("A")
          }
        }
        if (numbertable[x][y + 1] == 6) {
          if (playeroneboard.includes(table[x][y + 1]) == false) {
            if (playertwoboard.includes(table[x][y + 1]) == false) {
              board.push((table[x][y + 1]))
              console.log("B")
            }
          }
        }
      }
      console.log("1:1")
    }
    //1:1
    if ((x == 15) && (y == 1)) {
      if (numbertable[x - 1][y] == 6) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("C")
          }
        }

      }
      if (numbertable[x][y + 1] == 6) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("D")
          }
        }

      }
      console.log("15:1.")
    }
    //15:1

    if ((x == 15) && (y == 15)) {
      if (numbertable[x - 1][y] == 6) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("E")
          }
        }
      }
      if (numbertable[x][y - 1] == 6) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("F")
          }
        }
      }
      console.log("15:15")
    }
    //15:15
    if ((x == 1) && (y == 15)) {
      if (numbertable[x + 1][y] == 6) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("G")
          }
        }
      }
      if (numbertable[x][y - 1] == 6) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("H")
          }
        }
      }


    }
    //1:15
    if (((y !== 1 || 15) && (x == 1))) {

      if (numbertable[x][y + 1] == 6) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("I")
          }
        }
      }
      if (numbertable[x][y - 1] == 6) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("J")
          }
        }
      }
      if (numbertable[x + 1][y] == 6) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("K")
          }
        }
      }
      console.log("Top Row")
    }
    //top row

    if (y != 1 && y != 15 && x == 15) {

      if (numbertable[x][y - 1] == 6) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("L")
          }
        }
      }
      if (numbertable[x][y + 1] == 6) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("M")
          }
        }
        
      }
      if (numbertable[x - 1][y] == 6) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("N")
          }
        }
      }
   
      console.log("Bottom Row")
    }
    //bottom row

    if ((x != 15) && (x != 1) && (y == 15)) {

      if (numbertable[x + 1][y] == 6) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("O")
          }
        }
      }
      if (numbertable[x - 1][y] == 6) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("P")
          }
        }
      }
      if (numbertable[x][y - 1] == 6) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("Q")
          }
        }
      }
      console.log("Right Colum")
    }
    //Right Colum
    
    if ((x != 15) && (x != 1) && (y == 1)) {

      if ((numbertable[x][y + 1] == 6)) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("Z")
          }
        }
      }

      if (numbertable[x - 1][y] == 6) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("R")
          }
        }
      }
     
      if (numbertable[x + 1][y] == 6) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("S")
          }
        }
      }
      console.log("Left Colum")
    }
    //Left colum

    else if (x != 15 && x != 1 && y != 15 && y != 1) {

      if (numbertable[x - 1][y] == 6) {
        if (playeroneboard.includes(table[x - 1][y]) == false) {
          if (playertwoboard.includes(table[x - 1][y]) == false) {
            board.push((table[x - 1][y]))
            console.log("T")
          }
        }
      }
      if (numbertable[x + 1][y] == 6) {
        if (playeroneboard.includes(table[x + 1][y]) == false) {
          if (playertwoboard.includes(table[x + 1][y]) == false) {
            board.push((table[x + 1][y]))
            console.log("U")
          }
        }
      }
      if (numbertable[x][y - 1] == 6) {
        if (playeroneboard.includes(table[x][y - 1]) == false) {
          if (playertwoboard.includes(table[x][y - 1]) == false) {
            board.push((table[x][y - 1]))
            console.log("V")
          }
        }
      }

      if (numbertable[x][y + 1] == 6) {
        if (playeroneboard.includes(table[x][y + 1]) == false) {
          if (playertwoboard.includes(table[x][y + 1]) == false) {
            board.push((table[x][y + 1]))
            console.log("W")
          }
        }
      }

    }

  }


  console.log(playeroneboard)


  if (turns == 1) {
    turns = 2
    document.getElementById("playerturn2").hidden = false
    document.getElementById("playerturn1").hidden = true
  }
  else {
    turns = 1
    document.getElementById("playerturn1").hidden = false
    document.getElementById("playerturn2").hidden = true
  }
  end()
  noshowcolor()

}
//The no show color function is so that only one player can have a color a a time. The color choice buttons at the top will dissapear and appear accordingly

function noshowcolor() {

  if ((document.getElementById(playeroneboard[0]).style.backgroundColor !== "deepskyblue") && (document.getElementById(playertwoboard[0]).style.backgroundColor !== "deepskyblue")) {
    document.getElementById("deepskyblueclick").hidden = false
  }

  if ((document.getElementById(playeroneboard[0]).style.backgroundColor == "deepskyblue") || (document.getElementById(playertwoboard[0]).style.backgroundColor == "deepskyblue")) {
    document.getElementById("deepskyblueclick").hidden = true
  }
  //no show color deepskyblue above
  if ((document.getElementById(playeroneboard[0]).style.backgroundColor == "mediumpurple") || (document.getElementById(playertwoboard[0]).style.backgroundColor == "mediumpurple")) {
    document.getElementById("mediumpurpleclick").hidden = true
  }

  if ((document.getElementById(playeroneboard[0]).style.backgroundColor !== "mediumpurple") && (document.getElementById(playertwoboard[0]).style.backgroundColor !== "mediumpurple")) {
    document.getElementById("mediumpurpleclick").hidden = false
  }
  //no show color medium purple above
  if ((document.getElementById(playeroneboard[0]).style.backgroundColor == "yellowgreen") || (document.getElementById(playertwoboard[0]).style.backgroundColor == "yellowgreen")) {
    document.getElementById("yellowgreenclick").hidden = true
  }

  if ((document.getElementById(playeroneboard[0]).style.backgroundColor !== "yellowgreen") && (document.getElementById(playertwoboard[0]).style.backgroundColor !== "yellowgreen")) {
    document.getElementById("yellowgreenclick").hidden = false
  }
  //no show color yellow green above
  if ((document.getElementById(playeroneboard[0]).style.backgroundColor == "orange") || (document.getElementById(playertwoboard[0]).style.backgroundColor == "orange")) {
    document.getElementById("orangeclick").hidden = true
  }

  if ((document.getElementById(playeroneboard[0]).style.backgroundColor !== "orange") && (document.getElementById(playertwoboard[0]).style.backgroundColor !== "orange")) {
    document.getElementById("orangeclick").hidden = false
  }
  //no show color orange above

  if ((document.getElementById(playeroneboard[0]).style.backgroundColor == "pink") || (document.getElementById(playertwoboard[0]).style.backgroundColor == "pink")) {
    document.getElementById("pinkclick").hidden = true
  }

  if ((document.getElementById(playeroneboard[0]).style.backgroundColor !== "pink") && (document.getElementById(playertwoboard[0]).style.backgroundColor !== "pink")) {
    document.getElementById("pinkclick").hidden = false
  }
  //no show color pink above
  if ((document.getElementById(playeroneboard[0]).style.backgroundColor == "orangered") || (document.getElementById(playertwoboard[0]).style.backgroundColor == "orangered")) {
    document.getElementById("orangered").hidden = true
  }

  if ((document.getElementById(playeroneboard[0]).style.backgroundColor !== "orangered") && (document.getElementById(playertwoboard[0]).style.backgroundColor !== "orangered")) {
    document.getElementById("orangered").hidden = false
  }
}

//The end function stops the game when all squares are filled and states the winner. It then hides all the elemnts on the gameboard page except the main menu and play again page. 

function end() {
  if ((playeroneboard.length + playertwoboard.length == 225)) {
    document.getElementById("table1").hidden = true
    document.getElementById("table2").hidden = true
    document.getElementById("bigtable").hidden = true
    document.getElementById("div1").hidden = true
    document.getElementById("div2").hidden = true
    document.getElementById("playerturn1").hidden = true
    document.getElementById("playerturn2").hidden = true
    document.getElementById("selectacolor").hidden = true

    if (playeroneboard.length > playertwoboard.length) {
      document.getElementById("win1").hidden = false
      document.getElementById("win2").hidden = true
    }
    else if (playertwoboard.length > playeroneboard.length) {
      document.getElementById("win2").hidden = false
      document.getElementById("win1").hidden = true
    }
    else if (playeroneboard.length == playertwoboard.length) {
      document.getElementById("win2").hidden = true
      document.getElementById("win1").hidden = true
      document.getElementById("tie").hidden = false
    }
  }

}

