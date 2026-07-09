const quizData = [
    {
        image: "nadal.png",
        question: "Wer ist dieser Spieler?",
        options: ["Rafael Nadal", "Mohammed Salah", "Novak Djokovic"]
    },
    {
        image: "salah.jfif", 
        question: "In welchem Verein spielt er?",
        options: ["Liverpool", "Real Madrid", "FC Bayern"]
    },
    {
        image:"baldor.png",
        question:"Wie viele deutsche Spieler haben den Ballon d'Or gewonnen?",
        options:["1","3","5"]
    },
    {
        image:"bayern.jfif",
        question:"Wie oft hat der FC Bayern München die deutsche Meisterschaft gewonnen?",
        options:["36","34","35"]
    },
    {
        image:"langer.jfif",
        question:"Wer ist dieser Spieler?",
        options:["Jack Nicklaus","Bernhard Langer","Martin Kaymer"]
    },
    {
        image:"wolff.jpg",
        question:"Wo spielt Andreas Wolff?",
        options:["SC Magdeburg","THW Kiel","VfL Gummersbach"]
    },
    {
        image:"bastian.webp",
        question:"Wie oft hat Bastian Schweinsteiger an einer WM teilgenommen?",
        options:["4","3","5"]
    },
     {
        image:"bolt.webp",
        question:"Wie viele Goldmedaillen hat Usain Bolt gewonnen?",
        options:["6","7","8"]
    },
    {
        image:"hand.jpg",
        question:"Welcher Handballverein hat die meisten Titel gewonnen?",
        options:["Füchse Berlin","SG Flensburg-Handewitt","THW Kiel"]
    },
     {
        image:"schum.jpg",
        question:"Wie oft wurde Michael Schumacher Weltmeister?",
        options:["5","8","7"]
    },


    ];

let currentIdx = 0;


const arrowBtn = document.getElementById('fl'); 
const displayImg = document.getElementById('nadal'); 
const displayQuestion = document.getElementById('uu'); 


const option1 = document.getElementById('op1');
const option2 = document.getElementById('op2');
const option3 = document.getElementById('op3');


function updateQuizInterface(index) {
    
    displayImg.src = quizData[index].image;
    displayQuestion.innerText = quizData[index].question;
    
    
    option1.innerText = quizData[index].options[0];
    option2.innerText = quizData[index].options[1];
    option3.innerText = quizData[index].options[2];

    
    const checkboxes = document.querySelectorAll('.quiz-check');
    checkboxes.forEach(box => {
        box.checked = false;
    });
}


arrowBtn.addEventListener('click', () => {
    currentIdx++; 

    if (currentIdx < quizData.length) {
        
        updateQuizInterface(currentIdx);
    } else {
        alert("Ende des Quiz!");
        currentIdx = 0; 
        updateQuizInterface(currentIdx);
    }
});