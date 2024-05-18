let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let result = document.querySelector("#result h2");

let turnO = true;

//storing winning values in form of an array:
let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];


let resetGame = () => {
    turnO = true;
    result.style.opacity = 0;
    enableBoxes();
}


boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turnO==true) {
            console.log("O was print!");
            box.innerText = "O";
            turnO = false;
        }
        else {
            console.log("X was print!");
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})


//Function to disable all the boxes after result is declared:
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        resetBtn.innerText = "Reset Game";
        box.innerText = "";
    }
};


let checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner" , pos1Val);
                resetBtn.innerText = "New Game";
                result.style.opacity = 1;
                result.innerText = `Congratulations, Winner is ${pos1Val} !`;
                disableBoxes();
        }
    }
    }
}



resetBtn.addEventListener("click" , resetGame);

