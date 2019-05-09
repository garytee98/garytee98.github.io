let word = ''
let dashes = []
let easyvocab = ['appreciate','congratulations','beloved','essay','chaos'];
let normalvocab = ['dignity','respond','ancestor','compliment','civilization'];
let hardvocab = ['aberration','brazen','complacency','diligent','empathy'];
let blank_area = document.querySelector('.challengebank')
let answer
let x=0
let lives = 8
document.getElementById("lives").innerHTML=lives;
function easy() {
  let word = easyvocab[Math.floor(Math.random()*easyvocab.length)];
  dashes = [] 
  blankDash(word);
  answer=word
}

function normal() { 
  let word = normalvocab[Math.floor(Math.random()*normalvocab.length)];
  dashes = [] 
  blankDash(word);
  answer=word
}
function hard() { 
  let word = hardvocab[Math.floor(Math.random()*hardvocab.length)];
  dashes = [] 
  blankDash(word);
  answer=word
}

function blankDash(word) {
  for (let i = 0; i < word.length; i++) {
    dashes.push('_');
  }
  
  let temp_blank = dashes.join(" ");
  blank_area.innerHTML = temp_blank;
  
  
}

function checkAns() {
  for(let i=0;i<answer.length;i++){
    console.log(answer[i]);
    if(answer[i]==document.getElementById("value").value){
      dashes[i] = document.getElementById("value").value; 
      let temp_blank = dashes.join(" ");
      blank_area.innerHTML = temp_blank;
      x++;
      if(x==answer.length){
        alert("congrat")
      }
      
      
    }
    else if(document.getElementById("value").value != answer[i]){
      lives=lives - 1;
      if(lives == 0){
        alert("gameover")
      }
      document.getElementById("lives").innerHTML=lives;
      return 
    }
  }
  
}




function checkWord(event) {
  event.preventDefault()
  console.log(document.getElementById("value").value);
  checkAns() 
}






