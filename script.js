/// / (0 1 2)(3 4 5 )(6 7 8)(0 3 6)(1 4 7)(2 5 8)(0 4 8)(2 4 6)

let boxing=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#button");
let newBtn=document.querySelector("#new-game");
let messageContainer=document.querySelector(".msg-container")
let message=document.querySelector("#message")
let turnO=true;
let count=0;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


// boxing.forEach((box) => {
//     box.addEventListener("click",()=>{
//         console.log("cli nckenbutbh bd");
//         box.innerText="eh";
//     })
// });


const resetGame=()=>{
    turnO=true;
    enableBox();
    messageContainer.classList.add("hide");
    count=0;
 
}



boxing.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.style.color="aquamarine";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="red";
            turnO=true;
        }
        count=count+1;
        box.disabled=true;
        
        checkWinner();
        
        
    })
})

const disableBox=()=>{
    for(box of boxing){
        box.disabled=true;
        // box.innerText="";
        count=0;
    }
}
const enableBox=()=>{
    for(box of boxing){
        box.disabled=false;
        box.innerText="";
        count=0;
    }
}
const showDraw = ()=>{
    console.log(count)
    message.innerText='Match draw';
    console.log("loskdjas");
    messageContainer.classList.remove("hide");
    // disableBox();
}
const showWinner=(position1)=>{
    message.innerText=`Congratulations, winner is ${position1}`;
    messageContainer.classList.remove("hide");
    disableBox();
}
const checkWinner=()=>{
    for(pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxing[pattern[0]].innerText,
        //     boxing[pattern[1]].innerText,
        //     boxing[pattern[2]].innerText
        // );
        let position1=boxing[pattern[0]].innerText;
        let position2=boxing[pattern[1]].innerText;
        let position3=boxing[pattern[2]].innerText;
        if(position1!="" && position2!="" && position3!=""){
            if(position1==position2 && position1==position3){
                count=0;
                showWinner(position1);
            }
            else if(count==9){
                showDraw();
            }  
        }
        
    };
}


newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame)
