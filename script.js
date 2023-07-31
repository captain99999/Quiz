const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Leo Tolstoy", "Charles Dickens"],
        answer: "William Shakespeare"
    }
];

const questionContainer = document.getElementById("question-container");
const submitBtn = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const question = quizData[currentQuestion];
    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
            ${question.options.map(option => `<br><div><input type="radio" name="answer" value="${option}">${option}`).join('')}
    </div>`;

}

function showResult() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        if (userAnswer === quizData[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        selectedOption.checked = false;
        if (currentQuestion < quizData.length) {
            showQuestion();
        } else {
            showFinalResult();
        }
    }
}

function showFinalResult() {
    questionContainer.style.display = "none";
    submitBtn.style.display = "none";
    resultContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your Score: ${score} out of ${quizData.length}</p>
    `;
}

showQuestion();
