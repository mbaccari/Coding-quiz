var score = 0;
var time = 60;
var timeRemain = document.getElementById('timeLeft');
var gameArea = document.querySelector('#gameArea');

var questions = {
    q1:{
        question: "How do you link to a javascript file?",
        a1: "<link rel='javascript' href='script.js'>",
        b1: "<script><link rel='javascript' href='script.js'></script>",
        c1: "<script src='script.js'></script>",
        d1: "<script>script.js</script>"
    },
    q:{
        question: "",
        a2: "",
        b2: "",
        c2: "",
        d2: ""
    },
    q3:{
        question: "",
        a3: "",
        b3: "",
        c3: "",
        d3: ""
    },
    q4:{
        question: "",
        a4: "",
        b4: "",
        c4: "",
        d4: ""
    }
};


// Time function
function setTime() {
    var timing = setInterval(function() {
        time--;
        timeRemain.textContent = time;
        console.log(time);
    }, 1000);
};
setTime();

// Creating display
var h2 = document.createElement('h2');
var ul = document.createElement('ul');
    var li1 = document.createElement('li');
    var li2 = document.createElement('li');
    var li3 = document.createElement('li');
    var li4 = document.createElement('li');
gameArea.appendChild(h2);
gameArea.appendChild(ul);
function showUp () {
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
h2.textContent = questions.q1.question;
li1.textContent = questions.q1.a1;
li2.textContent = questions.q1.b1;
li3.textContent = questions.q1.c1;
li4.textContent = questions.q1.d1;
}
gameArea.addEventListener("click", showUp);