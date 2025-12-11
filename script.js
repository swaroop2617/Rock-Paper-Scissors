let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissors=document.querySelector(".scissors");
let disp=document.querySelector(".display");
let reset=document.querySelector(".reset");
let popupreset=document.querySelector(".reset1");
let yourChoice=document.querySelector(".uppertxt");
let comChoice=document.querySelector(".lowertxt");
let resultDisplay=document.querySelector(".resultDisplay");
let popDisplay=document.querySelector(".popupResult");
let body=document.querySelector("body");
let close=document.querySelector(".close");
let about=document.querySelector(".AboutSection");
let aboutButton=document.querySelector(".about");
let aboutContent=document.querySelector(".aboutContent");
let closeAbout=document.querySelector(".closeAbout");
let user="";
let computer="";
let clickrck=false;
let clickpap=false;
let clicksci=false;
let aboutClicked=false;
let you=0;
let com=0;
let startGame=false;

const checkWon=()=>{
    const inputPoints=document.querySelector(".inputPoints");
    let points=inputPoints.value;

    console.log(points);
    if(you==points){
        rock.disabled=true;
        paper.disabled=true;
        scissors.disabled=true;
        resultDisplay.classList.add("show");
        body.style.filter="blur(10px)";
        popDisplay.innerText=" Game Over\n You Won!! ";
        return;
    }
    else if(com==points){
        rock.disabled=true;
        paper.disabled=true;
        scissors.disabled=true;
        resultDisplay.classList.add("show");
        popDisplay.innerText=" Game Over!!\n Computer Won ";
        return;
    }
}
const result =()=>{
        let userCount=document.querySelector(".your");
        let comCount=document.querySelector(".comps");
        
        if(user=="rock" && computer=="paper"){
            com++;
            comCount.value=com;
            yourChoice.value="Rock";
            comChoice.value="Paper";
            comChoice.style.color="green";
            yourChoice.style.color="red";
            disp.innerText="computer won";
            disp.style.background="rgba(255, 92, 92, 1)";
        }
        else if(user=="paper" && computer=="rock"){
            you++;
            userCount.value=you;
            yourChoice.value="Paper";
            comChoice.value="Rock";
            yourChoice.style.color="green";
            comChoice.style.color="red";
            disp.innerText="You won";
            disp.style.background="rgb(96, 255, 96)";
        }
        else if(user=="rock" && computer=="scissors"){
            you++;
            userCount.value=you;
            yourChoice.value="Rock";
            comChoice.value="Scissors";
            yourChoice.style.color="green";
            comChoice.style.color="red";
            disp.innerText="You won";
            disp.style.background="rgb(96, 255, 96)";
        }
        else if(user=="scissors" && computer=="rock"){
            com++;
            comCount.value=com;
            yourChoice.value="Scissors";
            comChoice.value="Rock";
            comChoice.style.color="green";
            yourChoice.style.color="red";
            disp.innerText="Computer won";
            disp.style.background="rgba(255, 92, 92, 1)";
        }
        else if(user=="scissors" && computer=="paper"){
            you++;
            userCount.value=you;
            yourChoice.value="Scissors";
            comChoice.value="Paper";
            yourChoice.style.color="green";
            comChoice.style.color="red";
            disp.innerText="You won";
            disp.style.background="rgb(96, 255, 96)";
        }
        else if(user=="paper" && computer=="scissors"){
            com++;
            comCount.value=com;
            yourChoice.value="Paper";
            comChoice.value="Scissors";
            comChoice.style.color="green";
            yourChoice.style.color="red";
            disp.innerText="computer won";
            disp.style.background="rgba(255, 92, 92, 1)";
        }
        else{
            disp.innerText="Draw";
            yourChoice.style.color="black";
            comChoice.style.color="black";
            yourChoice.value=user;
            comChoice.value=computer;
            disp.style.background="linear-gradient(to right, rgb(208, 208, 208),  rgb(195, 194, 194))";
            
        }
        startGame=true;
        checkWon();
}
const computerGame =()=>{
    const compwin=["rock","paper","scissors"];
    let temp=Math.floor(Math.random()*3);
    computer=compwin[temp];
}
const rockClicked=()=>{
    rock.addEventListener("click",()=>{
        let temp=rock.getAttribute("class");
        if(!clickrck){
        user=temp;
        computerGame();
        result();
        clickrck=true;
        }
        clickrck=false;
    })
}
const paperClicked=()=>{
    paper.addEventListener("click",()=>{
        let temp=paper.getAttribute("class");
        if(!clickpap){
            user=temp;
            computerGame();
            result();
            clickpap=true;
        }
        
        clickpap=false;
    })
}
const scissorsClicked=()=>{
    scissors.addEventListener("click",()=>{
        let temp=scissors.getAttribute("class");
        if(!clicksci){
            console.log("you clicked ",temp);
            user=temp;
            computerGame();
            result();
            clicksci=true;
        } 
        clicksci=false;

    })
}

disp.addEventListener("click", () => {
    startGame = !startGame;
    if (startGame) {
        disp.style.background="rgb(96, 255, 96)";
        disp.innerText="Pick your choice!";
        disp.style.pointerEvents="none";
        rockClicked();
        paperClicked();
        scissorsClicked();
    }
});
reset.addEventListener("click",()=>{
    location.reload();
})
popupreset.addEventListener("click",()=>{
    location.reload();
})
function closeAboutPopup() {
    about.classList.remove("showAbout");
    body.style.filter = "blur(0px)";
}

aboutButton.addEventListener("click",(e)=>{
    e.stopPropagation();
    about.classList.remove("closeAbout");
    about.classList.add("showAbout");
    body.style.filter="blur(10px)";
})
close.addEventListener("click",()=>{
    resultDisplay.classList.remove("show");
    body.style.filter="blur(0px)";
    resultDisplay.classList.add("closePopup");
    
})
document.addEventListener("click", (e) => {
    // if popup is not open, do nothing
    if (!about.classList.contains("showAbout")) return;

    // ignore clicks inside the popup or on the About button
    if (about.contains(e.target) || aboutButton.contains(e.target)) return;

    // otherwise, click was on the background → close
    about.classList.remove("showAbout");
    about.classList.add("closeAbout");      // if you use zoomOut
    body.style.filter = "blur(0px)";
});






   






