let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let msgcontainer = document.querySelector(".msgcontainer");
let newbtn = document.querySelector(".newbtn");
let reset = document.querySelector(".reset");
let turn0 = true;
const winPatterns =
    [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];
let count = 0;
const resetGame = () => {
    count = 0;
    enableBoxes();
    msgcontainer.classList.add("hide");
  };
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText = "O";
            box.classList.add("purple");
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
            box.classList.add("blue");
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
          gameDraw();
        }
    })
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disablebox();
  };

const disablebox = (()=>{
    for(box of boxes){
        box.disabled = true;
    }
});

const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };

const showWinner = ((winner)=>{
    msg.innerText = `Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
});

const checkWinner = (()=>{
    for(pattern of winPatterns){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

    if(val1 !="" && val2 !="" && val3 != ""){
        if(val1===val2 && val2===val3){
            showWinner(val1);
            return true;
        }
    }
    }
});
newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
