const alterdOne = document.querySelector(".altered-one")
const alterdTwo = document.querySelector(".altered-two")


function generateRandom(num1, num2) {
    let difference = num2-num1;
    let rand = Math.random()
    rand = Math.floor(rand * difference)

    rand = rand + num1

    return rand
}

function refresh() {
    setInterval(() => {
        alterdOne.textContent = generateRandom(1, 9);
        alterdOne.classList.add('flip');
        setTimeout(() => { alterdOne.classList.remove('flip') }, 1600); 
    }, 2000);

    setInterval(() => {
        alterdTwo.textContent = generateRandom(1, 9);
        alterdTwo.classList.add('flip');
        setTimeout(() => { alterdTwo.classList.remove('flip') }, 1600); 
    }, 3000);
}

refresh()