let userscore = 0;
let compscore = 0;
let msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#User-Score");
const compscorepara = document.querySelector("#Comp-Score");

const choices = document.querySelectorAll(".choice");

const drawgame = (userchoice) => {
  msg.innerText = `Draw!! same choice : ${userchoice}`;
  msg.style.backgroundColor = "blueviolet";
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});

const playgame = (userchoice) => {
  //console.log("user choice = " + userchoice);
  //generate a computer choice
  const compchoice = gencompchoice();
  //console.log("computer choice = " + compchoice);
  if (userchoice === compchoice) {
    drawgame(userchoice);
  } else {
    let userwin = true;

    if (userchoice == "rock") {
      //compchoice can be either rock or scissor as paper could alreaddy have drawn it
      userwin = compchoice == "paper" ? false : true;
    } else if (userchoice == "paper") {
      userwin = compchoice == "scissor" ? false : true;
    } else {
      userwin = compchoice == "rock" ? false : true;
    }

    showwinner(userwin, userchoice, compchoice);
  }
};

const gencompchoice = () => {
  let options = ["paper", "rock", "scissor"];
  let index = Math.floor(Math.random() * 3);
  return options[index];
};

const showwinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    userscore++;
    msg.innerText = `Won !! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "Green";
    userscorepara.innerText = userscore;
  } else {
    compscore++;
    msg.innerText = `Lost !! ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "Red";
    compscorepara.innerText = compscore;
  }
};
