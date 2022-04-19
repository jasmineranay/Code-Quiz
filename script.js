//getting all required elements 
const start_btn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info-box");
const exit_btn = document.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");
const continue_box = document.querySelector(".buttons .restart");
const quiz_box = info_box.querySelector("quiz-box");

start_btn.onclick= ()=>{
  info-Box.classList.add("activateInfo");

}

exit_btn.onclick= ()=>{
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