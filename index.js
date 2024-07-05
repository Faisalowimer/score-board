let homeOnePoint = document.getElementById("home-one-point")
let homeTwoPoint = document.getElementById("home-two-point")
let homeThreePoint = document.getElementById("home-three-point")
let homeScreen = document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne() {
    homeScore += 1
    homeScreen.textContent = homeScore
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeScreen.textContent = homeScore
}

function increaseHomeScoreThree() {
    homeScore += 3
    homeScreen.textContent = homeScore
}

let guestOnePoint = document.getElementById("guest-one-point")
let guestTwoPoint = document.getElementById("guest-two-point")
let guestThreePoint = document.getElementById("guest-three-point")
let guestScreen = document.getElementById("guest-score")
let guestScore = 0

function increaseGuestScoreOne() {
    guestScore += 1
    guestScreen.textContent = guestScore
}

function increaseGuestScoreTwo() {
    guestScore += 2
    guestScreen.textContent = guestScore
}

function increaseGuestScoreThree() {
    guestScore += 3
    guestScreen.textContent = guestScore
}