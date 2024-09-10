const questions = [

        {
            question: "1. What's your ideal vacation vibe?",
            options: [
                { text: "A) Adventure", type: "mountains" },
                { text: "B) Relaxation", type: "beach" },
                { text: "C) Culture", type: "city" },
                { text: "D) Luxury", type: "luxury" }
            ]
        },
        {
            question: "2. What excites you most?",
            options: [
                { text: "A) Hiking", type: "mountains" },
                { text: "B) Sunbathing", type: "beach" },
                { text: "C) Markets", type: "city" },
                { text: "D) Landmarks", type: "city" }
            ]
        },
        {
            question: "3. What shopping experience do you like?",
            options: [
                { text: "A) Handicrafts", type: "city" },
                { text: "B) Luxury shops", type: "luxury" },
                { text: "C) Boutiques", type: "city" },
                { text: "D) Food markets", type: "city" }
            ]
        },
        {
            question: "4. How important is nightlife?",
            options: [
                { text: "A) Partying", type: "city" },
                { text: "B) Quiet evenings", type: "beach" },
                { text: "C) Live shows", type: "city" },
                { text: "D) Good food/view", type: "luxury" }
            ]
        },
        {
            question: "5. What kind of stay?",
            options: [
                { text: "A) Boutique", type: "mountains" },
                { text: "B) Resort", type: "luxury" },
                { text: "C) Homestay", type: "city" },
                { text: "D) Trendy hotel", type: "city" }
            ]
        },
        {
            question: "6. Your travel style?",
            options: [
                { text: "A) Adventure", type: "mountains" },
                { text: "B) Indulge", type: "luxury" },
                { text: "C) Culture", type: "city" },
                { text: "D) Escape stress", type: "beach" }
            ]
        },
        {
            question: "7. Perfect companion?",
            options: [
                { text: "A) Friends", type: "mountains" },
                { text: "B) Alone", type: "beach" },
                { text: "C) Loved one", type: "luxury" },
                { text: "D) Shoppers", type: "city" }
            ]
        }
    ];
    


let currentQuestionIndex = 0;
let score = { mountains: 0, beach: 0, city: 0, luxury: 0 };

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const suggestionElement = document.getElementById('suggestion');
const restartButton = document.getElementById('restart-button');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectOption(option.type));
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedType) {
    score[selectedType]++;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.classList.add('hidden');
    optionsContainer.classList.add('hidden');
    nextButton.classList.add('hidden');
    resultContainer.classList.remove('hidden');


    const suggestedPlace = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
    
    
    suggestionElement.textContent = ` ${suggestedPlace}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = { mountains: 0, beach: 0, city: 0, luxury: 0 };
    questionContainer.classList.remove('hidden');
    optionsContainer.classList.remove('hidden');
    nextButton.classList.remove('hidden');
    resultContainer.classList.add('hidden');
    loadQuestion();
}

nextButton.addEventListener('click', loadQuestion);
restartButton.addEventListener('click', restartQuiz);

// Initialize quiz
loadQuestion();
