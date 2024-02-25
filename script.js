let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");

let diseOne = document.querySelector("#diseOne");
let diseTwo = document.querySelector("#diseTwo");

let firstBtn = document.querySelector("#firstBtn");

let firstCount = document.querySelector(".firstCount");
let secondCount = document.querySelector(".secondCount");

let playerScore = document.querySelector(".playerScore")
let oppenentScore = document.querySelector(".oppenentScore")

// let select = document.querySelector("#select");
let mes = document.querySelector(".mes");
let mesContainer = document.querySelector(".mesContainer")
let number = document.querySelector("#number")
let playerScoreUpdate = 0;
let oppenentScoreUpdate = 0;

function rollFirstDice() {
  return Math.floor(Math.random() * 6) + 1;
}
function rollSecondDice() {
  return Math.floor(Math.random() * 6) + 1;
}

firstBtn.addEventListener("click", () => {
  if(number.value==="" ||number.value < 0){
    number.value="6";
  }
  firstBtn.innerText = "Roll";
  let firstDiseRoll = rollFirstDice();
  let secondDiseRoll = rollSecondDice();
  firstCount.innerText = firstDiseRoll;
  secondCount.innerText = secondDiseRoll;
  function finalResult() {
    if (firstDiseRoll > secondDiseRoll) {
      playerScoreUpdate++;
     playerScore.innerText=playerScoreUpdate;
     if( playerScore.innerText===number.value){
      mesContainer.classList.remove("visibility")
  mes.innerText="You Win";
  mes.style.backgroundColor="green"
  firstBtn.disabled=true;
     }
    
      player1.innerText = "You Win";
      player1.style.backgroundColor = "green";
      player2.innerText = "Loose";
      player2.style.backgroundColor = "red";
    } else if (firstDiseRoll < secondDiseRoll) {
      oppenentScoreUpdate++;
      oppenentScore.innerText=oppenentScoreUpdate;
      if( oppenentScore.innerText===number.value){
        mesContainer.classList.remove("visibility")
        mes.innerText="You Lose";
        mes.style.backgroundColor="red"
        firstBtn.disabled=true;
       }
      player1.innerText = "You Loose";
      player1.style.backgroundColor = "red";
      player2.innerText = "Win";
      player2.style.backgroundColor = "green";
    } else {
      player1.innerText = "Draw";
      player1.style.backgroundColor = " #EA9215";
      player2.innerText = "Draw";
      player2.style.backgroundColor = " #EA9215";
    }
  }

  // fffff
  console.log(firstDiseRoll);
  console.log(secondDiseRoll);
  if (firstDiseRoll === 6) {
    for (let childe of diseOne.children) {
      childe.classList.remove("one");
      childe.classList.remove("two");
      childe.classList.remove("three", "u", "d");
      childe.classList.remove("four", "twf", "tf", "btm");
      childe.classList.remove("five", "fs", "fv", "ff");
      childe.classList.add("circlesix");
    }
  } else if (firstDiseRoll === 1) {
    for (let childe of diseOne.children) {
      childe.classList.remove("circlesix");
      childe.classList.remove("two");
      childe.classList.remove("three", "u", "d", "btm");
      childe.classList.remove("four", "twf", "tf");
      childe.classList.remove("five", "fs", "fv", "ff");
    }
    diseOne.children[0].classList.add("one");
  } else if (firstDiseRoll === 2) {
    for (let childe of diseOne.children) {
      childe.classList.remove("circlesix");
      childe.classList.remove("one");
      childe.classList.remove("three", "u", "d", "btm");
      childe.classList.remove("four", "twf", "tf");
      childe.classList.remove("five", "fs", "fv", "ff");
    }
    diseOne.children[0].classList.add("two");
    diseOne.children[1].classList.add("two");
  } else if (firstDiseRoll === 3) {
    for (let childe of diseOne.children) {
      childe.classList.remove("circlesix");
      childe.classList.remove("one");
      childe.classList.remove("two");
      childe.classList.remove("four", "twf", "tf");
      childe.classList.remove("five", "fs", "fv", "ff");
    }
    diseOne.children[0].classList.add("three", "u");
    diseOne.children[1].classList.add("three", "btm");
    diseOne.children[2].classList.add("three", "d");
  } else if (firstDiseRoll === 4) {
    for (let childe of diseOne.children) {
      childe.classList.remove("circlesix");
      childe.classList.remove("one");
      childe.classList.remove("two");
      childe.classList.remove("three", "u", "d", "btm");
      childe.classList.remove("five", "fs", "fv", "ff");
    }
    diseOne.children[0].classList.add("four");
    diseOne.children[1].classList.add("four", "twf");
    diseOne.children[2].classList.add("four");
    diseOne.children[3].classList.add("four", "tf");
  } else {
    for (let childe of diseOne.children) {
      childe.classList.remove("circlesix");
      childe.classList.remove("one");
      childe.classList.remove("two");
      childe.classList.remove("three", "u", "d", "btm");
      childe.classList.remove("four", "twf", "tf");
    }
    diseOne.children[0].classList.add("five", "fs");
    diseOne.children[1].classList.add("five", "ff");
    diseOne.children[2].classList.add("five", "fs");
    diseOne.children[3].classList.add("five");
    diseOne.children[4].classList.add("five", "fv");
  }

  if (secondDiseRoll === 6) {
    for (let childe of diseTwo.children) {
      childe.classList.remove("one");
      childe.classList.remove("two");
      childe.classList.remove("three", "u", "d");
      childe.classList.remove("four", "twf", "tf", "btm");
      childe.classList.remove("five", "fs", "fv", "ff");
      childe.classList.add("circlesix");
    }
  } else if (secondDiseRoll === 1) {
    for (let childe of diseTwo.children) {
      childe.classList.remove("circlesix");
      childe.classList.remove("two");
      childe.classList.remove("three", "u", "d", "btm");
      childe.classList.remove("four", "twf", "tf");
      childe.classList.remove("five", "fs", "fv", "ff");
    }
    diseTwo.children[0].classList.add("one");
  } else if (secondDiseRoll === 2) {
    for (let childe of diseTwo.children) {
      childe.classList.remove("circlesix");
      childe.classList.remove("one");
      childe.classList.remove("three", "u", "d", "btm");
      childe.classList.remove("four", "twf", "tf");
      childe.classList.remove("five", "fs", "fv", "ff");
    }
    diseTwo.children[0].classList.add("two");
    diseTwo.children[1].classList.add("two");
  } else if (secondDiseRoll === 3) {
    for (let childe of diseTwo.children) {
      childe.classList.remove("circlesix");
      childe.classList.remove("one");
      childe.classList.remove("two");
      childe.classList.remove("four", "twf", "tf");
      childe.classList.remove("five", "fs", "fv", "ff");
    }
    diseTwo.children[0].classList.add("three", "u");
    diseTwo.children[1].classList.add("three", "btm");
    diseTwo.children[2].classList.add("three", "d");
  } else if (secondDiseRoll === 4) {
    for (let childe of diseTwo.children) {
      childe.classList.remove("circlesix");
      childe.classList.remove("one");
      childe.classList.remove("two");
      childe.classList.remove("three", "u", "d", "btm");
      childe.classList.remove("five", "fs", "fv", "ff");
    }
    diseTwo.children[0].classList.add("four");
    diseTwo.children[1].classList.add("four", "twf");
    diseTwo.children[2].classList.add("four");
    diseTwo.children[3].classList.add("four", "tf");
  } else {
    for (let childe of diseTwo.children) {
      childe.classList.remove("circlesix");
      childe.classList.remove("one");
      childe.classList.remove("two");
      childe.classList.remove("three", "u", "d", "btm");
      childe.classList.remove("four", "twf", "tf");
    }
    diseTwo.children[0].classList.add("five", "fs");
    diseTwo.children[1].classList.add("five", "ff");
    diseTwo.children[2].classList.add("five", "fs");
    diseTwo.children[3].classList.add("five");
    diseTwo.children[4].classList.add("five", "fv");
  }

  // comDiseRoll();
  finalResult();
});

// computer diseroll
