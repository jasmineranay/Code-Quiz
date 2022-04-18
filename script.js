//getting all required elements 
var startQuiz = document.querySelector(".start-btn button");
var infoBox= document.querySelector(".info-box");
var quitQuiz = document.querySelector(".buttons .quit");
var continue_btn = infoBox.querySelector(".buttons .restart");
var quiz_box = info-box.querySelector(".buttons .restart");

start-btn.oneClick= ()=>{
  infoBox.classList.add("activateInfo");

}

quit_btn.oneClick= ()=>{
  info-box.classList.remove("activateInfo");
}

restart_btn.oneClick= ()=>{
  info-box.classList.remove("activateInfo");
  quiz_box.classList.remove("activateQuiz");
}

