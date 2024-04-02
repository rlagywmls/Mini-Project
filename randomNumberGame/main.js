let randomNum = 0
let startBtn = document.getElementById('start-btn')
let resetBtn = document.getElementById('reset-btn')
let userInput = document.getElementById('user-input')
let resultArea = document.getElementById('result')
let chance = 5
let gameOver = false
let chanceArea = document.getElementById('chance')
let history =[]

startBtn.addEventListener('click',starter)
resetBtn.addEventListener('click', reset)
userInput.addEventListener('focus',function (){
    userInput.value = "";
})

//랜덤 숫자 받기
function pickRandomNum() {
    randomNum = Math.floor(Math.random()*100)+1
    console.log(randomNum)
}
pickRandomNum()

function starter() {
    //유효성 검사
    let userValue = userInput.value
    if (userValue < 1 || userValue > 100 ) {
        resultArea.textContent = '1과 100사이의 숫자를 입력해 주세요.'
        return
    }
    if (history.includes(userValue)){
        resultArea.textContent = '이미 입력한 숫자입니다. 다른 숫자를 입력해주세요'
        return
    }
    chance --;
    chanceArea.textContent = `남은기회 : ${chance}`
    // 숫자 맞추기
    if (userValue < randomNum) {
        resultArea.textContent = "지금보다 숫자가 높아요! UP!"
    } else if (userValue > randomNum) {
        resultArea.textContent = "지금보다 숫자가 낮아요! DOWN!"
    } else {
        resultArea.textContent = "정답입니다!"
        gameOver = true
    }
    history.push(userValue)
    // 남은기회
    if (chance < 1) {
        gameOver = true
    }
    if (gameOver === true) {
        startBtn.disabled = true
    }
}
//리셋버튼
function reset() {
    userInput.value = "";
    pickRandomNum()
    resultArea.textContent = '1~100 사이의 숫자를 입력해주세요'
    startBtn.disabled = false
    chance = 5
    chanceArea.textContent = `남은기회 : ${chance}`
    history = []
}