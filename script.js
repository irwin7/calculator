let elQuestionInp = document.querySelector(".question");
let elAnswerInp = document.querySelector(".answer");
let elHistory = document.querySelector(".history");
document.getElementById("item-0").addEventListener("click",()=>{
  elQuestionInp.value += '6'
})
document.getElementById("item-1").addEventListener("click",()=>{
  elQuestionInp.value += '3'
})
document.getElementById("item-2").addEventListener("click",()=>{
  elQuestionInp.value += '2'
})
document.getElementById("item-3").addEventListener("click",()=>{
  elQuestionInp.value += '1'
})
document.getElementById("item-4").addEventListener("click",()=>{
  elQuestionInp.value += '4'
})
document.getElementById("item-5").addEventListener("click",()=>{
  elQuestionInp.value += '5'
})
document.getElementById("item-6").addEventListener("click",()=>{
  elQuestionInp.value += '8'
})
document.getElementById("item-7").addEventListener("click",()=>{
  elQuestionInp.value += '7'
})
document.getElementById("item-8").addEventListener("click",()=>{
  elQuestionInp.value = ''
  elAnswerInp.value = ''
})
document.getElementById("item-9").addEventListener("click",()=>{
  if(elQuestionInp.value.slice(- 1) != "/" && elQuestionInp.value.slice(- 1) != "*" && elQuestionInp.value.slice(- 1) != "+" && elQuestionInp.value.slice(- 1) != "-" && elQuestionInp.value != ""){
    elQuestionInp.value += '/'
  }
})
document.getElementById("item-10").addEventListener("click",()=>{
  if(elQuestionInp.value.slice(- 1) != "/" && elQuestionInp.value.slice(- 1) != "*" && elQuestionInp.value.slice(- 1) != "+" && elQuestionInp.value.slice(- 1) != "-" && elQuestionInp.value != ""){
    elQuestionInp.value += '*'
  }
})
document.getElementById("item-11").addEventListener("click",()=>{
  elQuestionInp.value += '9'
})
document.getElementById("item-12").addEventListener("click",()=>{
  if(elQuestionInp.value.slice(- 1) != "."){
    elQuestionInp.value += '.'
  }
})
document.getElementById("item-13").addEventListener("click",()=>{
  elQuestionInp.value += '0'
})
document.getElementById("item-14").addEventListener("click",()=>{
  if(elQuestionInp.value.slice(- 1) != "/" && elQuestionInp.value.slice(- 1) != "*" && elQuestionInp.value.slice(- 1) != "+" && elQuestionInp.value.slice(- 1) != "-"){
    elQuestionInp.value += '%'
  }
})
document.getElementById("item-15").addEventListener("click",()=>{
  elAnswerInp.value = "";
  if(elQuestionInp.value != ""){
    elAnswerInp.value += eval(elQuestionInp.value)
    let ques = document.createElement("p");
    let answ = document.createElement("span");
    ques.className = "history__text";
    answ.className = "history__answer";
    ques.innerText = elQuestionInp.value + "=";
    answ.innerText = elAnswerInp.value;
    ques.appendChild(answ);
    elHistory.appendChild(ques);
  }
  elQuestionInp.value = "";
})
document.getElementById("item-16").addEventListener("click",()=>{
  if(elQuestionInp.value.slice(- 1) != "/" && elQuestionInp.value.slice(- 1) != "*" && elQuestionInp.value.slice(- 1) != "+" && elQuestionInp.value.slice(- 1) != "-"){
    elQuestionInp.value += '+'
  }
})
document.getElementById("item-17").addEventListener("click",()=>{
  if(elQuestionInp.value.slice(- 1) != "/" && elQuestionInp.value.slice(- 1) != "*" && elQuestionInp.value.slice(- 1) != "+" && elQuestionInp.value.slice(- 1) != "-"){
    elQuestionInp.value += '-'
  }
})
document.getElementById("item-18").addEventListener("click",()=>{
  elQuestionInp.value = elQuestionInp.value.slice(0,- 1);
})