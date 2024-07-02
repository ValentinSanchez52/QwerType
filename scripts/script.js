let score = { succes: 0, fails: 0 }
let averageSpeed = 0

let propositionArray = wordsArray
let propositionIndex = getRandomInt(0, propositionArray.length)
let start = 0

let radioBtnList = document.querySelectorAll(".sourceOptions input")
let propositionZone = document.querySelector(".propositionZone")
let confirmBtn = document.getElementById("textConfirm")
let textInput = document.getElementById("textInput")

// textInput behavior
textInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        if (textInput.value !== "") {
            let delay = new Date().getTime() - start
            averageSpeed += textInput.value.length / delay * 1000
            averageSpeed /= 2
            setLetterPerSec(averageSpeed)
        }
        confirmAnswer()
    }
})
textInput.addEventListener("input", () => { if (textInput.value.length === 1) { start = new Date().getTime() }})

// confirm button behavior
confirmBtn.addEventListener("click", () => { confirmAnswer() })

// type selector
radioBtnList.forEach(element => {
    element.addEventListener("change", (event) => {
        if (event.target.id === "words") { propositionArray = wordsArray }
        else if (event.target.id === "phrases") { propositionArray = phrasesArray }
        setCurrentProposition(propositionArray[propositionIndex])
    })
});