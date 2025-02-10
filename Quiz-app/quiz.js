const question = [
    {
        question: "What is the capital of MP?",
        answer: [
            { text: "Jabalpur", correct: false },
            { text: "Bhopal", correct: true },
            { text: "Indore", correct: false },
            { text: "Gwalior", correct: false }
        ]
    },
    
        {
            "question": "What is the capital of India?",
            "answer": [
                { "text": "New Delhi", "correct": true },
                { "text": "Mumbai", "correct": false },
                { "text": "Kolkata", "correct": false },
                { "text": "Chennai", "correct": false }
            ]
        },
        {
            "question": "Which is the largest planet in our solar system?",
            "answer": [
                { "text": "Earth", "correct": false },
                { "text": "Mars", "correct": false },
                { "text": "Jupiter", "correct": true },
                { "text": "Venus", "correct": false }
            ]
        },
        {
            "question": "Who wrote the national anthem of India?",
            "answer": [
                { "text": "Rabindranath Tagore", "correct": true },
                { "text": "Bankim Chandra Chatterjee", "correct": false },
                { "text": "Sarojini Naidu", "correct": false },
                { "text": "Mahatma Gandhi", "correct": false }
            ]
        },
        {
            "question": "What is the chemical symbol for water?",
            "answer": [
                { "text": "O2", "correct": false },
                { "text": "H2O", "correct": true },
                { "text": "CO2", "correct": false },
                { "text": "NaCl", "correct": false }
            ]
        },
        {
            "question": "Who was the first Prime Minister of India?",
            "answer": [
                { "text": "Jawaharlal Nehru", "correct": true },
                { "text": "Mahatma Gandhi", "correct": false },
                { "text": "Sardar Patel", "correct": false },
                { "text": "Lal Bahadur Shastri", "correct": false }
            ]
        },
        {
            "question": "Which is the longest river in the world?",
            "answer": [
                { "text": "Amazon River", "correct": false },
                { "text": "Nile River", "correct": true },
                { "text": "Ganges River", "correct": false },
                { "text": "Yangtze River", "correct": false }
            ]
        },
        {
            "question": "What is the national bird of India?",
            "answer": [
                { "text": "Peacock", "correct": true },
                { "text": "Sparrow", "correct": false },
                { "text": "Parrot", "correct": false },
                { "text": "Eagle", "correct": false }
            ]
        },
        {
            "question": "Which continent is known as the 'Dark Continent'?",
            "answer": [
                { "text": "Africa", "correct": true },
                { "text": "Asia", "correct": false },
                { "text": "Europe", "correct": false },
                { "text": "Australia", "correct": false }
            ]
        },
        {
            "question": "Who discovered gravity?",
            "answer": [
                { "text": "Albert Einstein", "correct": false },
                { "text": "Isaac Newton", "correct": true },
                { "text": "Galileo Galilei", "correct": false },
                { "text": "Nikola Tesla", "correct": false }
            ]
        },
        {
            "question": "Which gas do plants absorb during photosynthesis?",
            "answer": [
                { "text": "Oxygen", "correct": false },
                { "text": "Carbon Dioxide", "correct": true },
                { "text": "Nitrogen", "correct": false },
                { "text": "Hydrogen", "correct": false }
            ]
        } , 
            {
                "question": "What is the tallest mountain in the world?",
                "answer": [
                    { "text": "K2", "correct": false },
                    { "text": "Mount Everest", "correct": true },
                    { "text": "Kangchenjunga", "correct": false },
                    { "text": "Makalu", "correct": false }
                ]
            },
            {
                "question": "Which is the smallest state in India by area?",
                "answer": [
                    { "text": "Goa", "correct": true },
                    { "text": "Sikkim", "correct": false },
                    { "text": "Tripura", "correct": false },
                    { "text": "Manipur", "correct": false }
                ]
            },
            {
                "question": "Who invented the telephone?",
                "answer": [
                    { "text": "Alexander Graham Bell", "correct": true },
                    { "text": "Thomas Edison", "correct": false },
                    { "text": "Nikola Tesla", "correct": false },
                    { "text": "Guglielmo Marconi", "correct": false }
                ]
            },
            {
                "question": "Which planet is known as the Red Planet?",
                "answer": [
                    { "text": "Mars", "correct": true },
                    { "text": "Venus", "correct": false },
                    { "text": "Jupiter", "correct": false },
                    { "text": "Saturn", "correct": false }
                ]
            }   
    ];

const questionelement = document.querySelector(".qu");
const answerbutton = document.querySelector(".ansbtn");
const nextbutton = document.querySelector(".nebt");


let currentquestionindex =0 ;
let score =0;

function startquiz(){
    currentquestionindex =0 ;
     score =0;
     nextbutton.innerHTML ="Next"
     showQuestion();

}

function   showQuestion(){
    resetState();
    let currentQuestion = question[currentquestionindex];
    let questionno = currentquestionindex+1;
    questionelement.innerHTML = questionno +"."+ currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerbutton.appendChild(button);
    });
};

function resetState(){

nextbutton.style.display = 'none';
while (answerbutton.firstChild) {
    answerbutton.removeChild(answerbutton.firstChild);
}
}
function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerbutton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbutton.style.display = 'block';
}

nextbutton.addEventListener('click', () => {
    currentquestionindex++;
    if (currentquestionindex < question.length) {
        showQuestion();
    } else {
       showScore();
    }
});

function showScore() {
    resetState();
    questionelement.innerHTML = `You scored ${score} out of ${question.length}!`;
    nextbutton.innerHTML = "Play Again";
    nextbutton.style.display = 'block';
    nextbutton.removeEventListener("click", showQuestion);
    nextbutton.addEventListener("click", startquiz);
}

startquiz();
    nextbutton.removeEventListener("click", startquiz);
