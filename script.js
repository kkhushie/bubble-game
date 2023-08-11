let gameBox = document.querySelector(".cbody")

let timer = 10
let score = 0;
let htval;
let hitvalue = document.querySelector("#hitval")
hitvalue.textContent = 4

let scorevalue = document.querySelector("#scoreval")
scorevalue.textContent = 0
document.querySelector("#timeval").textContent = timer

const makebubble = () => {
    let clutter = "";
    for (let i = 0; i < 152; i++) {
        let val = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${val}</div>`
    }
    gameBox.innerHTML = clutter

}
const changeHitval = () => {

    htval = Math.floor(Math.random() * 10)
    hitvalue.textContent = htval
}
const runTime = () => {
    const timerr = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeval").textContent = timer
        }
        else {
            clearInterval(timerr)
            gameBox.innerHTML = `<div class="ending"><h1 style="font-size:70px">game Over</h1><h2>Score : ${score}</h2></div>`

        }
    }, 1000);
}
const increaseScore = () => {
    score += 10
    scorevalue.textContent = score
}


makebubble()
runTime()
changeHitval()
gameBox.addEventListener("click", (dets) => {
    let htnbtn = Number(dets.target.textContent);
    // console.log(htnbtn)
    if (htnbtn === htval) {
        increaseScore()
        makebubble()
        changeHitval()

    }

})