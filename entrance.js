class Quiz {
    constructor(questions, reward) {
        this.reward= reward;
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score +=this.reward;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

var totalMarks = 0;
function displayQuestion(count, quizElement, hasNext, next) {
    QuizNumber(count);
    if (quizElement.isEnded()) {
        totalMarks += quizElement.score;
        if(hasNext){
            clearInterval(quizTimer1);
            countDown2(15);
            displayQuestion(2, quiz2, false, null);
        }
        else{
            clearInterval(quizTimer2);
            countDown3(8);
            displayLogoQuestion();
        }
    } else {
        let questionElement = document.getElementById("qn");
        questionElement.innerHTML = quizElement.getQuestionIndex().text;

        let choices = quizElement.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i], count, quizElement, hasNext, next);
        }

        showProgress(quizElement);
    }
};

function displayLogoQuestion(){
    QuizNumber(3);
    if (quiz3.isEnded()) {
        totalMarks += quiz3.score;
        showScores();
    }else{
        let questionElement = document.getElementById("qn");
        questionElement.innerHTML = `<img src='${quiz3.getQuestionIndex().text}' style='width:30%; height:70%; display:flex; margin-left:auto; margin-right:auto'></img>`;

        let choices = quiz3.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess2("btn" + i, choices[i]);
        }
        showProgress(quiz3);
    }
}

function QuizNumber(Count){
    let quizNumber = document.getElementById("heading");
    quizNumber.innerHTML = `Round ${Count}`;
}

function guess(id, guess, count, quizElement, hasNext, next) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quizElement.guess(guess);
        displayQuestion(count, quizElement, hasNext, next);
    }
};
function guess2(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz3.guess(guess);
        displayLogoQuestion();
    }
};

function showProgress(quizElement) {
    let currentQuestionNumber = quizElement.questionIndex + 1;
    let ProgressElement = document.getElementById("qnNum");
    ProgressElement.innerHTML =
        `Question ${currentQuestionNumber}`;
};

function showScores() {
    var passed="Your results: ",result="";
    totalMarks = totalMarks/6;
    if(totalMarks > 9.5){
        result="You are admitted in Vellore Campus successfully";
    }else if(totalMarks > 7.5){
        result="You are admitted in Chennai Campus successfully";
    }else if(totalMarks > 6.5){
        result="You are admitted in Amaravati Campus successfully";
    }
    else{
        passed="Sorry you are disqualified from this test with low scores, better luck next time!";
    }
    let quizEndHTML =
        `
    <h3 class='message'>SCORE</h3>
    <h3 class='score'> ${totalMarks}</h3>
    <h3 class='score'> ${passed}</h3>
    <h3 class='score'> ${result}</h3>
    `;
    let quizElemnt = document.getElementById("quiz");
    quizElemnt.innerHTML = quizEndHTML;

    let quizElemnt2 = document.getElementById("quizHeading");
    quizElemnt2.innerHTML = "<br><br><br><br>";
};

let questions1 = [
    new Question(
        "Most modern TV's draw power even if turned off. The circuit the power is used in does what function?", ["Sound", "Remote control", "Color balance", "High voltage"], "Remote control"
    ),
    new Question(
        "Which is a type of Electrically-Erasable Programmable Read-Only Memory?", ["Flash", "Flange", "Fury", "Fram"], "Flash"
    ),
    new Question(
        "The most common format for a home video recorder is VHS. VHS stands for?", ["Video Home System",
        "Very high speed",
        "Video horizontal standard",
        "Voltage house standard"], "Video Home System"
    ),
    new Question(
        "'.MOV' extension refers usually to what kind of file?", ["Image file",
        "Animation/movie file",
        "Audio file",
        "MS Office document"], "Animation/movie file"
    ),
    new Question(
        "Which consists of two plates separated by a dielectric and can store a charge?", ["Inductor",
        "Capacitor",
        "Transistor",
        "Relay"], "Capacitor"
    ),
    new Question(
        "What does AM mean?", [ "Angelo marconi",
        "Anno median",
        "Amplitude modulation",
        "Amperes"], "Amplitude Modulation"
    ),
    new Question(
        "What was the first ARPANET message?", [ "'lo'",
        "'hello world'",
        "'mary had a little lamb'",
        "'cyberspace, the final frontier'"], "'lo'"
    ),
    new Question(
        "'DTP' computer abbreviation usually means?", [ "Digital Transmission Protocol",
        "DeskTop Publishing",
        "Data Type Programming",
        "Document Type Processing"], "DeskTop Publishing"
    ),
    new Question(
        "What does AC and DC stand for in the electrical field?", ["Alternating Current and Direct Current",
        "A Rock Band from Australia",
        "Average Current and Discharged Capacitor",
        "Atlantic City and District of Columbia"], "Alternating Current and Direct Current"
    ),
    new Question(
        "What does EPROM stand for?", ["Evaluable Philotic Random Optic Memory",
        "Every Person Requires One Mind",
        "Electric Programmable Read Only Memory",
        "Erasable Programmable Read Only Memory"], "Erasable Programmable Read Only Memory"
    )
];

let questions2 = [
    new Question(
      "Grand Central Terminal, Park Avenue, New York is the world's___?", [ "largest railway station",
      "highest railway station",
      "longest railway station",
      "None of the above"], "largest railway station"  
    ),
    new Question(
      "Entomology is the science that studies____?", [ "Behavior of human beings",
      "Insects",
      "The origin and history of technical and scientific terms",
      "The formation of rocks"], "Insects"  
    ),
    new Question(
      "For which of the following disciplines is Nobel Prize awarded?", [ "Physics and Chemistry",
      "Physiology or Medicine",
      "Literature, Peace and Economics",
      "All of the above"], "All of the above"  
    ),
    new Question(
      "Golf player Vijay Singh belongs to which country? 1 Rupee = ", ["USA",
      "Fiji",
      "India",
      "UK"], "Fiji"  
    ),
    new Question(
      "First China War was fought between?", ["China and Britain",
      "China and France",
      "China and Egypt",
      "China and Greek"], "China and Britain"  
    )
];

let questions3 = [
    new Question(
        "C:/Users/rahul/Desktop/meta.png", ["Google", "Meta", "Facebook", "Instagram"], "Meta"
    ),
    new Question(
        "C:/Users/rahul/Desktop/micro.png", ["Twitter", "Ola", "Google", "Microsoft"], "Microsoft"
    ),
    new Question(
        "C:/Users/rahul/Desktop/apple.png", ["Apple", "Facebook", "LinkedIn", "Instagram"], "Apple"
    ),
    new Question(
        "C:/Users/rahul/Desktop/google.png", ["Amazon", "Google", "Flipkart", "Uber"], "Google"
    ),
    new Question(
        "C:/Users/rahul/Desktop/twitter.png", ["Microsoft", "LinkedIn", "Twitter", "Apple"], "Twitter"
    )
];

let quiz1 = new Quiz(questions1, 2);
let quiz2 = new Quiz(questions2, 2);
let quiz3 = new Quiz(questions3, 4)

displayQuestion(1, quiz1, true, quiz2);

let counting = document.getElementById("timer");

var quizTimer1, quizTimer2, quizTimer3;

function countDown1(time) {
    let quizTimeInMinutes = time * 60 * 60;
    let quizTime = quizTimeInMinutes / 60;
    quizTimer1 = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer1);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `Time left: ${min}:${sec}`;
        }
    }, 1000);
}
function countDown2(time) {
    let quizTimeInMinutes = time * 60 * 60;
    let quizTime = quizTimeInMinutes / 60;
    quizTimer2 = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer2);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `Time left: ${min}:${sec}`;
        }
    }, 1000);
}
function countDown3(time) {
    let quizTimeInMinutes = 8   * 60 * 60;
    let quizTime = quizTimeInMinutes / 60;
    quizTimer3 = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer3);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `Time left: ${min}:${sec}`;
        }
    }, 1000);
}
countDown1(15);