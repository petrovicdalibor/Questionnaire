const quizData = [
    {
        question: 'Who invented JavaScript?',
        a: 'Douglas Crockford',
        b: 'Sheryl Sandberg',
        c: 'Brendan Eich',
        d: 'Dalibor Petrovic',
        correctAnswer: 'b'
    },
    {
        question: 'Which one of these is a JavaScript package manager?',
        a: 'Node.js',
        b: 'ExpressJS',
        c: 'npm',
        d: 'TypeScript',
        correctAnswer: 'c'
    },
    {
        question: 'Which tool can you use to ensure code quality?',
        a: 'Angular',
        b: 'jQuery',
        c: 'RequireJS',
        d: 'ESLint',
        correctAnswer: 'd'
    }
];

const questionEl = document.getElementById('quiz-header');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const submitBtn = document.getElementById('submitBtn');
const submitBtn1 = document.getElementById('submitBtn1');
const input = document.getElementsByTagName('input');
const resUl = document.getElementById('res-ul');

const quiz = document.getElementById('quiz');
const results = document.getElementById('results');


let currentQuestion = 0;
let answers = [];

function quizInit() {
    questionEl.innerText = quizData[currentQuestion].question;

    a_text.innerText = quizData[currentQuestion].a;
    b_text.innerText = quizData[currentQuestion].b;
    c_text.innerText = quizData[currentQuestion].c;
    d_text.innerText = quizData[currentQuestion].d;
}

submitBtn.addEventListener('click', function() {
    let correctAnswers = 0;
    let correctAnswer = quizData[currentQuestion].correctAnswer;
    let userAnswer = document.querySelector('input[name="question"]:checked').getAttribute('id');
 
    if(userAnswer == correctAnswer) {
        answers.push({
            question: quizData[currentQuestion].question,
            input: true
        });
    } else {
        answers.push({
            question: quizData[currentQuestion].question,
            input: false
        });
    }

    currentQuestion++;

    if(currentQuestion < quizData.length) {
        for(let i = 0; i < input.length; i++){
            input[i].checked = false;
        }
        quizInit();
    } else {
        for(let i = 0; i < quizData.length; i++) {
            if(answers[i].input === true){
                resUl.insertAdjacentHTML('beforeend',
                `<li><i class="far fa-check-circle green"></i> ${ answers[i].question }</li>`);
                correctAnswers++;
            } else {
                resUl.insertAdjacentHTML('beforeend',
                `<li><i class="far fa-times-circle red"></i> ${ answers[i].question }</li>`);
            }
            // document.getElementById('q' +i).innerText = answers[i];
        }

        submitBtn1.innerText = correctAnswers + "/" + answers.length + " Correct Answers";

        quiz.style.display = "none";
        results.style.display = "block";
    }
});

quizInit();