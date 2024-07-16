document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getDatabase, ref, push, update, get } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBEYVNoV5SZ6_nBbkSLwKq5ftCD9bB6c0M",
    authDomain: "quizbeeprojectweb.firebaseapp.com",
    projectId: "quizbeeprojectweb",
    storageBucket: "quizbeeprojectweb.appspot.com",
    messagingSenderId: "166715398601",
    appId: "1:166715398601:web:93957d8aa328f1dd053018",
    databaseURL: "https://quizbeeprojectweb-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let userId;

document.addEventListener('keydown', function (_0x2ded5e) {
    if (_0x2ded5e.key === 'F12') {
      var _0xcbe9bd = prompt(" ⚠️ Please enter the password to continue to the Dev Tools:");
      if (_0xcbe9bd !== "dayvee") {
        _0x2ded5e.preventDefault();
        alert(" ❌ Incorrect password!");
      }
    }
});

const easyQuestions = [
    {
        question: "What is the common term for a computer program?",
        answers: [
            {text: "Application", correct: true},
            {text: "Device", correct: false},
            {text: "Firmware", correct: false},
            {text: "Hardware", correct: false},
        ]
    },
    {
        question: "Which device is primarily used for input?",
        answers: [
            {text: "Monitor", correct: false},
            {text: "Printer", correct: false},
            {text: "Mouse", correct: true},
            {text: "Speaker", correct: false},
        ]
    },
    {
        question: "What is the main memory of a computer called?",
        answers: [
            {text: "ROM", correct: false},
            {text: "RAM", correct: true},
            {text: "CPU", correct: false},
            {text: "HDD", correct: false},
        ]
    },
    {
        question: "What do you call malicious software?",
        answers: [
            {text: "Router", correct: false},
            {text: "Cache", correct: false},
            {text: "Proxy", correct: false},
            {text: "Virus", correct: true},
        ]
    },
    {
        question: "Which of these is a popular web browser?",
        answers: [
            {text: "Chrome", correct: true},
            {text: "Excel", correct: false},
            {text: "Word", correct: false},
            {text: "Paint", correct: false},
        ]
    }
];

const mediumQuestions = [
    {
        question: "What does 'CPU' stand for?",
        answers: [
            {text: "Memory", correct: false},
            {text: "Storage", correct: false},
            {text: "Processor", correct: true},
            {text: "Display", correct: false},
        ]
    },
    {
        question: "What is a common data transfer protocol used in email?",
        answers: [
            {text: "HTTP", correct: false},
            {text: "FTP", correct: false},
            {text: "SMTP", correct: true},
            {text: "SSH", correct: false},
        ]
    },
    {
        question: "What does OS stand for in computing?",
        answers: [
            {text: "Software", correct: false},
            {text: "System", correct: true},
            {text: "Network", correct: false},
            {text: "Firmware", correct: false},
        ]
    },
    {
        question: "Which of these is a programming language?",
        answers: [
            {text: "Photoshop", correct: false},
            {text: "Illustrator", correct: false},
            {text: "Python", correct: true},
            {text: "Premiere", correct: false},
        ]
    },
    {
        question: "Which is a type of database?",
        answers: [
            {text: "Android", correct: false},
            {text: "Linux", correct: false},
            {text: "MySQL", correct: true},
            {text: "Windows", correct: false},
        ]
    },
    {
        question: "Which device connects multiple computers in a network?",
        answers: [
            {text: "Keyboard", correct: false},
            {text: "Router", correct: true},
            {text: "Monitor", correct: false},
            {text: "Scanner", correct: false},
        ]
    },
    {
        question: "Which of these is a cloud storage service?",
        answers: [
            {text: "Dropbox", correct: true},
            {text: "Firefox", correct: false},
            {text: "Safari", correct: false},
            {text: "Opera", correct: false},
        ]
    },
    {
        question: "Which operating system is open source?",
        answers: [
            {text: "Windows", correct: false},
            {text: "macOS", correct: false},
            {text: "iOS", correct: false},
            {text: "Linux", correct: true},
        ]
    },
    {
        question: "What is the primary use of 'HTTPS'?",
        answers: [
            {text: "Printing", correct: false},
            {text: "Editing", correct: false},
            {text: "Security", correct: true},
            {text: "Designing", correct: false},
        ]
    },
    {
        question: "Which device uses an IP address?",
        answers: [
            {text: "Printer", correct: false},
            {text: "Computer", correct: true},
            {text: "Mouse", correct: false},
            {text: "Keyboard", correct: false},
        ]
    }
];

const hardQuestions = [
    {
        question: "Which protocol is used for secure file transfer?",
        answers: [
            {text: "SMTP", correct: false},
            {text: "HTTP", correct: false},
            {text: "FTP", correct: false},
            {text: "SFTP", correct: true},
        ]
    },
    {
        question: "What does 'BIOS' stand for?",
        answers: [
            {text: "Firmware", correct: true},
            {text: "System", correct: false},
            {text: "Driver", correct: false},
            {text: "Memory", correct: false},
        ]
    },
    {
        question: "Which of these is a cybersecurity threat?",
        answers: [
            {text: "Phishing", correct: true},
            {text: "Coding", correct: false},
            {text: "Debugging", correct: false},
            {text: "Compiling", correct: false},
        ]
    },
    {
        question: "Which command is used to view directory contents in Linux?",
        answers: [
            {text: "mv", correct: false},
            {text: "ls", correct: true},
            {text: "cd", correct: false},
            {text: "rm", correct: false},
        ]
    },
    {
        question: "What is the main function of a firewall?",
        answers: [
            {text: "Designing", correct: false},
            {text: "Printing", correct: false},
            {text: "Security", correct: true},
            {text: "Storing", correct: false},
        ]
    },
    {
        question: "Which is a type of encryption?",
        answers: [
            {text: "SQL", correct: false},
            {text: "HTML", correct: false},
            {text: "XML", correct: false},
            {text: "AES", correct: true},
        ]
    },
    {
        question: "Which database model uses tables?",
        answers: [
            {text: "Relational", correct: true},
            {text: "Network", correct: false},
            {text: "Hierarchical", correct: false},
            {text: "Object", correct: false},
        ]
    },
    {
        question: "Which device is used to amplify network signals?",
        answers: [
            {text: "Router", correct: false},
            {text: "Repeater", correct: true},
            {text: "Switch", correct: false},
            {text: "Hub", correct: false},
        ]
    },
    {
        question: "Which Linux command is used to change file permissions?",
        answers: [
            {text: "chmod", correct: true},
            {text: "cp", correct: false},
            {text: "mv", correct: false},
            {text: "rm", correct: false},
        ]
    },
    {
        question: "What is the purpose of a 'kernel' in an OS?",
        answers: [
            {text: "Designing", correct: false},
            {text: "Editing", correct: false},
            {text: "Printing", correct: false},
            {text: "Management", correct: true},
        ]
    },
    {
        question: "What does 'DNS' translate?",
        answers: [
            {text: "Files", correct: false},
            {text: "Names", correct: true},
            {text: "Data", correct: false},
            {text: "Programs", correct: false},
        ]
    },
    {
        question: "Which is a type of malware?",
        answers: [
            {text: "Virus", correct: true},
            {text: "Proxy", correct: false},
            {text: "Cache", correct: false},
            {text: "Token", correct: false},
        ]
    },
    {
        question: "What is a function of an API?",
        answers: [
            {text: "Storing", correct: false},
            {text: "Communication", correct: true},
            {text: "Designing", correct: false},
            {text: "Printing", correct: false},
        ]
    },
    {
        question: "What does 'SSD' replace?",
        answers: [
            {text: "GPU", correct: false},
            {text: "CPU", correct: false},
            {text: "RAM", correct: false},
            {text: "HDD", correct: true},
        ]
    },
    {
        question: "Which programming paradigm uses objects?",
        answers: [
            {text: "OOP", correct: true},
            {text: "Functional", correct: false},
            {text: "Procedural", correct: false},
            {text: "Logic", correct: false},
        ]
    }
];

let currentQuestions = [];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");
const currentModeElement = document.getElementById("current-mode");
const timerElement = document.getElementById("time");
const timerContainer = document.getElementById("timer");

let currentQuestionIndex = 0;
let score = 0;
let easyScore = 0;
let mediumScore = 0;
let hardScore = 0;
let currentMode = 'easy';
let timer;
let timerDuration = 20;

document.getElementById('easy-btn').addEventListener('click', () => selectCategory('easy'));
document.getElementById('medium-btn').addEventListener('click', () => selectCategory('medium'));
document.getElementById('hard-btn').addEventListener('click', () => selectCategory('hard'));

document.querySelector('.start-quiz').addEventListener('click', () => {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.userName').style.display = 'block';
});

document.querySelectorAll('.leaderboard').forEach((button) => {
    button.addEventListener('click', () => {
        // Clear the current leaderboard
        document.getElementById('leaderboardpage').style.display = 'block';
        document.getElementById('userleaderboard').innerHTML = '';

        // Fetch all users' data
        fetchAllUserData();
    });
});

document.getElementById('backbtn').addEventListener('click', function() {
    document.getElementById('leaderboardpage').style.display = 'none';
});

// User Leaderboard Database
function fetchAllUserData() {
    const usersRef = ref(database, 'users/');
    get(usersRef).then((snapshot) => {
        if (snapshot.exists()) {
            const users = snapshot.val();

            const userRanking = Object.keys(users).map(userId => {
                const user = users[userId];
                return {
                    userId: userId,
                    fullName: user.fullName,
                    studentId: user.studentId,
                    campus: user.campus,
                    avatar: user.avatar,
                    easyScore:  user.easyScore,
                    mediumScore: user.mediumScore,
                    hardScore: user.hardScore,
                    totalScore: user.totalScore
                };
            }).sort((a, b) => b.totalScore - a.totalScore);

            userRanking.forEach(user => {
                const listItem = document.createElement('li');
                const avatarImg = document.createElement('img');
                avatarImg.src = `assets/avatar/${user.avatar}.png`;
                avatarImg.alt = ' No Avatar Selected';
                avatarImg.style.width = '30px';
                avatarImg.style.height = '30px';
                avatarImg.style.marginRight = '10px';
                // Leaderboard with image on it
                listItem.appendChild(avatarImg);
                listItem.appendChild(document.createTextNode(`${user.fullName} - ${user.studentId} - ${user.campus} - Easy: ${user.easyScore} | Medium: ${user.mediumScore} | Hard: ${user.hardScore} | Total ${user.totalScore}`));
                // Append child of list elements
                document.getElementById('userleaderboard').appendChild(listItem);
            });
        } else {
            console.log('No data available');
        }
    }).catch((error) => {
        console.error('Error fetching user data:', error);
    });
}

document.getElementById('start-btn').addEventListener('click', () => {
    const fullName = document.getElementById('fullName').value;
    const studentId = document.getElementById('studentId').value;
    const campus = document.getElementById('campus').value;
    const avatarElement = document.querySelector('input[name="avatar"]:checked');
    
    if (!fullName || !campus || !avatarElement) {
        alert('Please fill in all fields and select an avatar.');
        return;
    }
    
    const avatar = avatarElement.value;

    push(ref(database, 'users/'), {
        fullName: fullName,
        studentId: studentId,
        campus: campus,
        avatar: avatar,
        easyScore: 0,
        mediumScore: 0,
        hardScore: 0,
        totalScore: 0
    }).then((snapshot) => {
        userId = snapshot.key;
        alert('Data submitted successfully!');
        const selectedAvatarSrc = avatarElement.nextElementSibling.getAttribute('src');
        document.getElementById('avatarImg').setAttribute('src', selectedAvatarSrc);
        const displayNameElement = document.getElementById('displayName');
        displayNameElement.textContent = `${fullName} - ${studentId} | Campus: ${campus}`;
        document.querySelector('.userName').style.display = 'none';
        document.querySelector('.app').style.display = 'block';
    }).catch((error) => {
        console.error('Error writing new data to Firebase Database', error);
        alert('An error occurred. Please try again.');
    });
});

const avatarInputs = document.querySelectorAll('input[name="avatar"]');
avatarInputs.forEach(input => {
    input.addEventListener('change', () => {
        const selectedAvatarSrc = input.nextElementSibling.getAttribute('src');
        document.getElementById('avatarImg').setAttribute('src', selectedAvatarSrc);
    });
});

function selectCategory(category) {
    if (category === 'easy') {
        currentQuestions = easyQuestions;
        currentMode = 'easy';
        currentModeElement.textContent = "Easy";
    } else if (category === 'medium') {
        currentQuestions = mediumQuestions;
        currentMode = 'medium';
        currentModeElement.textContent = "Medium";
    } else if (category === 'hard') {
        currentQuestions = hardQuestions;
        currentMode = 'hard';
        currentModeElement.textContent = "Hard";
    }
    document.getElementById('category-selection').style.display = 'none';
    document.querySelector('.quiz').style.display = 'block';
    startQuiz();
}

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = currentQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

    startTimer();
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
    if (timer) {
        clearInterval(timer);
    }
    timerContainer.style.display = 'block';
    timerElement.textContent = timerDuration;
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++; 
        updateScore(); 
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";

    clearInterval(timer);
}

const totalScore = easyScore + mediumScore + hardScore;

function updateScore() {
    document.getElementById('current-score').textContent = score;
    let scoreField;
    if (currentMode === 'easy') {
        easyScore = score;
        scoreField = 'easyScore';
    } else if (currentMode === 'medium') {
        mediumScore = score;
        scoreField = 'mediumScore';
    } else if (currentMode === 'hard') {
        hardScore = score;
        scoreField = 'hardScore';
    }
    const totalScore = easyScore + mediumScore + hardScore;
    update(ref(database, `users/${userId}`), {
        [scoreField]: score,
        totalScore: totalScore
    });
}

function showScore(){
    resetState();
    timerContainer.style.display = 'none';
    questionElement.innerHTML = `You Scored ${score} out of ${currentQuestions.length}!`;
    updateScore();
    if (currentMode === 'easy' || currentMode === 'medium') {
        nextButton.innerHTML = "Next Category";
        nextButton.style.display = "block";
    } else {
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < currentQuestions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < currentQuestions.length){
        handleNextButton();
    }else{
        if (currentMode === 'easy') {
            selectCategory('medium');
        } else if (currentMode === 'medium') {
            selectCategory('hard');
        } else {
            document.getElementById('category-selection').style.display = 'block';
            document.querySelector('.quiz').style.display = 'none';
        }
    }
});

function startTimer() {
    let timeLeft = timerDuration;
    timerElement.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeout();
        }
    }, 1000);
}

function handleTimeout() {
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    setTimeout(() => {
        handleNextButton();
    }, 1000); 
}

//nextButton.addEventListener("click", handleNextButton);

//startQuiz();