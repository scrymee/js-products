const quizData = [
    {
        question : "私が好きな食べ物は何ですか？",
        a : 'りんご',
        b : 'みかん',
        c : 'なし',
        d : 'とびうお',
        correct : 'a',
    },
    {
        question : "私が好きなゲームは何ですか？",
        a : 'ポケモン',
        b : 'スプラトゥーン',
        c : 'モンスタハンター',
        d : 'Cuphead',
        correct : 'b',
    },

]

var currentQuiz = 0;
var score = 0;

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

loadQuiz();

function loadQuiz() {

    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function getSelected() {

    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}

function deselectAnswers() {

    let answer = undefined;
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if(answer) {
        console.log(quizData[currentQuiz].correct);
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if( currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Your Score is ${score} / ${quizData.length} . </h2>
            <button onclick="location.reload()"> Restart </button>`
        }

    }

})