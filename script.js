//getting all required elements 
var startQuiz = document.querySelector(#info-box);
var infoBox= document.querySelector(#info-box);
var quitQuiz = document.querySelector(".buttons .quit");
var continue_btn = document.querySelector(".buttons .restart");
var quiz_box = document.querySelector(".buttons .restart");

startQuiz.onClick= ()=>{
  infoBox.classList.add("activateInfo");

}

quitQuiz.onClick= ()=>{
  info-box.classList.remove("activateInfo");
}

restart_btn.onClick= ()=>{
  info-box.classList.remove("activateInfo");
  quiz-box.classList.add("activateQuiz");
}

