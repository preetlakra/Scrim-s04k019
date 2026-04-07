let homeScoreEl = document.getElementById("homeScore")
let guestScoreEl = document.getElementById("guestScore")
let homePlusOneBtn = document.getElementById("home-plus-one")
let homePlusTwoBtn = document.getElementById("home-plus-two")
let homePlusThreeBtn = document.getElementById("home-plus-three")
let guestPlusOneBtn = document.getElementById("guest-plus-one")
let guestPlusTwoBtn = document.getElementById("guest-plus-two")
let guestPlusThreeBtn = document.getElementById("guest-plus-three")
let resetBtn = document.getElementById("reset-button")

let homeScore = 0
let guestScore = 0 

function HomePlusOne(){
    homeScore += 1
    homeScoreEl.innerText = homeScore 
}

function HomePlusTwo(){
    homeScore += 2
    homeScoreEl.innerText = homeScore
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

homePlusOneBtn.addEventListener("click", HomePlusOne)
homePlusTwoBtn.addEventListener("click", HomePlusTwo)
homePlusThreeBtn.addEventListener("click", HomePlusThree)
guestPlusOneBtn.addEventListener("click", GuestPlusOne)
guestPlusTwoBtn.addEventListener("click", GuestPlusTwo)
guestPlusThreeBtn.addEventListener("click", GuestPlusThree)
resetBtn.addEventListener("click", reset)