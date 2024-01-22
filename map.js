const available = document.querySelector(".available")
const checkButton = document.querySelector(".check-btn")

function generateRandom(num1, num2) {
    let difference = num2-num1;
    let rand = Math.random()
    rand = Math.floor(rand * difference)

    rand = rand + num1

    return rand
}

function showResult() {
    let availability = generateRandom(1,5)
    console.log(availability)
    if (availability == 1 || availability == 3 || availability == 5) {
        available.textContent = "PARKING SPACE AVAILABLE"
    }
    else {
        available.textContent = "PARKING SPACE IS NOT AVAILABLE"
    }
}

checkButton.addEventListener("click", showResult())
