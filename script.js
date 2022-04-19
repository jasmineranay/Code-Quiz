//getting all required elements 
var startQuiz = document.querySelector(#info-box);
var infoBox= document.querySelector(#info-box);
var quitQuiz = document.querySelector(".buttons .quit");
var continue_btn = document.querySelector(".buttons .restart");
var quiz_box = document.querySelector(".buttons .restart");

startQuiz.onclick= ()=>{
  infoBox.classList.add("activateInfo");

}

quitQuiz.onclick= ()=>{
  info-box.classList.remove("activateInfo");
}

continue_btn.onclick= ()=>{
  info-box.classList.remove("activateInfo");
  quiz-box.classList.add("activateQuiz");
  showQuestions();
}

let que_count = 0;

function showQuestions(){
  const que_text = document.querySelector(".quetext");
  let que_tag = '<span>' + questions[0].question + '</span>';
  que_text.innerHTML = que_tag;
}