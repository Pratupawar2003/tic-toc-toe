let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;
let count = 0;
// enableBoxes();
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
     turnO = true;
     count = 0;
     enableBoxes();
     msgContainer.classList.add("hide");
};


boxes.forEach((box)  => {
   box.addEventListener("click", () => {
    //  console.log("box was clicked");
     if(turnO) {
      box.innerText = "O";
      turnO = false;
     } else {
      box.innerText = "x";
      turnO = true;
     }
     box.disabled = true;
     count++;

    let isWinner =  checkwinner();

    if (count === 9 && !isWinner){
        gameDraw();
    }

   });
});

const gameDraw = () => {
    msg.innerText = `game was a draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
   for(let box of boxes){
    box.disabled = true;
   }
};

const enableBoxes = () =>{
    for(let box of boxes){
     box.disabled = false;
     box.innerText = "";
    }
 };

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkwinner = () => {
    for(let pattern of winpatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
            let pos1Val = boxes[pattern[0]].innerText; 
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;
        
         if(pos1Val != "" && pos2Val !="" && pos3Val !="") {
             if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);

                showWinner(pos1Val);
                return true;
             }
         }
       
    }
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);

