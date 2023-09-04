console.log("Welcome to Tic Tac Toe");
let music= new Audio("music.mp3");
let turn= new Audio("ting.mp3");
let gameoverAudio= new Audio("gameover.mp3");
let playerturn ="X";
let gameover = false;

//Function to change the turn
const changeTurn = ()=>{
    return playerturn === "X"? "0":"X";
}


//Function to check for a win
const checkWin = ()=>{
    let boxtexts =  document.getElementsByClassName('boxtext');
    let wins =[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8 ,15,15,90],
        [0,4,8, 5,15,45],
        [2,4,6,5,15,135]
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[1]].innerText===boxtexts[e[2]].innerText)&&(boxtexts[e[0]].innerText!=="")){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText +" won";
            gameover = true;
            gameoverAudio.play();
            //document.querySelector('.imgbox').getElementsByTagName('img').sytle.width = "200px";
            document.querySelector('.line').sytle.width = "200px" ;
            document.querySelector('.line').sytle.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

//Game Logic

let boxes =  document.getElementsByClassName("box");
Array.from(boxes).forEach((element)=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText=== ''){
            boxtext.innerText= playerturn;
            playerturn = changeTurn(); 
            turn.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText =  "Turn for " + playerturn;
            }
            
        }
    })
})

//Add onclick listener to reset button
let reset =  document.querySelector('.reset');
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach((e)=>{
        e.innerText='';
    })
    playerturn = "X";
    gameover= false;
    document.getElementsByClassName("info")[0].innerText =  "Turn for " + playerturn;
    
})