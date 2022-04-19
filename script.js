//getting all required elements 
const start_btn = document.querySelector(".start-btn");
const info_box = document.querySelector(".info-box");
const exit_btn = document.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");
const continue_box = document.querySelector(".buttons .restart");
const quiz_box = document.querySelector("quiz-box");

start_btn.onclick= ()=>{
  info_box.classList.add("activateInfo");

}

exit_btn.onclick= ()=>{
  info_box.classList.remove("activateInfo");
}

continue_btn.onclick= ()=>{
  info_box.classList.remove("activateInfo");
  quiz_box.classList.add("activateQuiz");
  showQuestions();
  queCounter();
}

let que_count = 0;
let que_numb = 1;

const next_btn = document.querySelector(".next_btn");

next_btn.onclick = ()=>{
  if(que_count < questions.length - 1){
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
  }else{
    console.log("Questions.competed")
  }  
  }

function showQuestions(index){
  const que_text = document.querySelector(".quetext");
  const option_list = document.querySelector(".option_list");
  let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
  let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
          + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
          + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
          + '<div class="option">' + questions[index].options[3] + '<span></span></div>'
          + '<div class="option">' + questions[index].options[4] + '<span></span></div>'
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;
}

function queCounter(index) {
  const bottom_ques_counter = quiz_box.querySelector(".total_que");
  let totalQuesCountTag = '<span><p>' + que_count + '</p>of<p>5' + questions.length + '</p>Questions</span';
  bottom_ques_counter.innerHTML = totalQuesCountTag;
}