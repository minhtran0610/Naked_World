var question = [{
    question_content: "Who is the current president of the US?",
    choice_A: "A. Barack Obama",
    choice_B: "B. Donald Trump",
    choice_C: "C. Groot",
    correct: "B",
},
{
    question_content: "Which male character stars in A Star is Born?",
    choice_A: "A. Bradley Cooper",
    choice_B: "B. Groot",
    choice_C: "C. Leonardo DiCaprio",
    correct: "A",
},
{
    question_content: "Who will play Captain America after Avengers: Endgame?",
    choice_A: "A. Groot",
    choice_B: "B. Chris Evans",
    choice_C: "C. Anthony Mackie",
    correct: "C",
},
{
    question_content: "What did Captain America say before the battle against Thanos in Avengers: Endgame?",
    choice_A: "A. Language.",
    choice_B: "B. I am Groot",
    choice_C: "C. Avengers! Assemble.",
    correct: "C",
}];
const questionContainer = document.getElementById("questions")
const questionEl = document.getElementById("question")
const questionContent = document.getElementById("question_content")
const choiceContainer = document.getElementById("choices")
const choiceA = document.getElementById("A")
const choiceB = document.getElementById("B")
const choiceC = document.getElementById("C")
const scoreEl = document.getElementById("score")
var currentQuestionIndex = 0
var lastQuestionIndex = question.length - 1
function renderQuestion(qIn) {
    questionContent.innerHTML = question[qIn].question_content
    choiceA.innerHTML = question[qIn].choice_A
    choiceB.innerHTML = question[qIn].choice_B
    choiceC.innerHTML = question[qIn].choice_C
}
renderQuestion(currentQuestionIndex)
var score = 0;
function checkAnswer(ans) {
    
    if (ans == question[currentQuestionIndex].correct) {
        score += 10;
        scoreEl.innerHTML = `SCORE: ${score}`
        if (currentQuestionIndex < lastQuestionIndex) {
            currentQuestionIndex ++
            renderQuestion(currentQuestionIndex)
        } else {
            currentQuestionIndex = currentQuestionIndex;
            alert("Please move to the next session")
        }
    } else {
        score -= 5
        scoreEl.innerHTML = `SCORE: ${score}`
    }
}









