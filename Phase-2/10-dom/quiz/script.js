const questions = [
     // C Language
    {
        question: "Who is known as the father of C language?",
        choice: ["Dennis Ritchie", "Brian Kernighan", "James Gosling", "Bjarne Stroustrup"],
        answer: "Dennis Ritchie"
    },
    {
        question: "What is the correct way to declare a pointer in C?",
        choice: ["int *ptr;", "int ptr;", "pointer int ptr;", "*int ptr;"],
        answer: "int *ptr;"
    },
    {
        question: "Which header file is required for using printf and scanf?",
        choice: ["<stdio.h>", "<conio.h>", "<stdlib.h>", "<string.h>"],
        answer: "<stdio.h>"
    },
]

let currQuestionIndex = 0
let score = 0
let thisChoice = 0

//question-container
let questionContainer = document.getElementById('question-container')
let questionText = document.getElementById('qstn-txt')
let choiceList = document.getElementById('choice-list')
let nextBtn = document.getElementById('next-btn')

//result-container
let resultContainer = document.getElementById('result-container')
let resultDisplay = document.getElementById('score')
let restartBtn = document.getElementById('restart-btn')

//home
let startBtn = document.getElementById('start-btn')
// console.log(startBtn)
console.log(startBtn, restartBtn, nextBtn)

startBtn.addEventListener('click',startQuiz)
restartBtn.addEventListener('click',restartQuiz)
nextBtn.addEventListener('click',nextQuestion)

function restartQuiz() {
    score = 0
    currQuestionIndex = 0
    // ResultContainer.classList.add('hidden')
    // QuestionContainer.classList.remove('hidden')
    nextBtn.textContent = 'Next Question'
    startQuiz()
}

function startQuiz() {
    // hide result container, show question container
    resultContainer.classList.add('hidden')
    startBtn.classList.add('hidden')
    questionContainer.classList.remove('hidden')

    // render questions
    showQuestion()
}

function showQuestion() {

    // QuestionText.textContent = questions[currentQuestionIndex].question
    questionText.textContent = `${currQuestionIndex + 1}. ${questions[currQuestionIndex].question}`

    // show options
    questions[currQuestionIndex].choice.forEach((opt) => {
        const li = document.createElement('li')
        li.textContent = opt
        li.addEventListener('click', (event) => { selectAnswer(event) })
        choiceList.append(li)
    })

}

function nextQuestion() {
    if (thisChoice == questions[currQuestionIndex].answer) score++

    questionText.textContent = ''
    choiceList.innerHTML = ''
    nextBtn.classList.add('hidden')

    currQuestionIndex++
    if (currQuestionIndex == questions.length - 1) nextBtn.textContent = 'Submit'

    // show question
    if (currQuestionIndex == questions.length) return showResult()

    showQuestion()
}

function selectAnswer(event) {
    clearSelection()
    event.target.classList.add('selected')
    nextBtn.classList.remove('hidden')
    thisChoice = event.target.textContent
}

function clearSelection() {
    const list = document.querySelectorAll('li')
    // console.log(list)
    list.forEach(item => item.classList.remove('selected'))
}

function showResult() {
    questionContainer.classList.add('hidden')
    resultContainer.classList.remove('hidden')
    resultDisplay.textContent = `${score} of ${questions.length}`
}