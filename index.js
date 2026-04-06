let homeScoreEl = document.getElementById("homeScore")
let guestScoreEl = document.getElementById("guestScore")

let homeScore = 0
let guestScore = 0 

function HomePlusOne(){
    homeScore += 1
    homeScoreEl.innerText = homeScore 
}

function HomePlusTwo(){
    homeScore += 2
    homeScoreEl.innerText = guestScore
}

function HomePlusThree(){
    homeScore += 3
    homeScoreEl.innerText = homeScore
}

function GuestPlusOne(){
    guestScore += 1
    guestScoreEl.innerText = guestScore
  
}

function GuestPlusTwo(){
    guestScore += 2
    guestScoreEl.innerText = guestScore
}

function GuestPlusThree(){
    guestScore += 3
    guestScoreEl.innerText = guestScore
}


function reset(){
  
  homeScoreEl.innerHTML = 0 
  guestScoreEl.innerHTML = 0 
  guestScore = 0 
  homeScore = 0

}