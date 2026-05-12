const questions = [
    {
        question: "Which technique uses 25-minute focus blocks? (a) Feynman  (b) Pomodoro  (c) Mind Mapping",
        correct: "b",
        correctFeedback: "Correct! Pomodoro breaks work into 25-minute sprints with short breaks.",
        wrongFeedback: "Not quite. The answer is b) Pomodoro — 25 min work, 5 min break."
    },
    {
        question: "What does Active Recall involve? (a) Re-reading notes  (b) Watching videos  (c) Testing yourself from memory",
        correct: "c",
        correctFeedback: "Correct! Closing your notes and retrieving from memory is the whole point.",
        wrongFeedback: "Not quite. The answer is c) — retrieval practice, not passive review."
    },
    {
        question: "The Feynman Technique asks you to explain a concept as if teaching it to whom? (a) A professor  (b) A 12-year-old  (c) A classmate",
        correct: "b",
        correctFeedback: "Correct! Simple language forces genuine understanding.",
        wrongFeedback: "Not quite. The answer is b) — explain it simply enough for a 12-year-old."
    },
    {
        question: "Spaced Repetition works by reviewing material at: (a) Random times  (b) Increasing intervals  (c) Fixed daily intervals",
        correct: "b",
        correctFeedback: "Correct! Each successful recall pushes the next review further out.",
        wrongFeedback: "Not quite. The answer is b) — intervals grow longer after each success."
    }
];

let currentIndex = 0;

const chatWindow = document.getElementById("chat-window");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("msg", sender === "user" ? "msg-user" : "msg-bot");
    msg.textContent = text;
    chatWindow.appendChild(msg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function showQuestion() {
    if (currentIndex < questions.length) {
        addMessage(questions[currentIndex].question, "bot");
    } else {
        addMessage("That's all the questions! Great work studying. Refresh the page to start again.", "bot");
        chatInput.disabled = true;
    }
}

chatForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const answer = chatInput.value.trim().toLowerCase();
    if (!answer) return;

    addMessage(answer, "user");
    chatInput.value = "";

    const current = questions[currentIndex];
    if (answer === current.correct) {
        addMessage(current.correctFeedback, "bot");
    } else {
        addMessage(current.wrongFeedback, "bot");
    }

    currentIndex++;
    showQuestion();
});

addMessage("Welcome! I will quiz you on Strive's study methods. Type a, b, or c to answer.", "bot");
showQuestion();