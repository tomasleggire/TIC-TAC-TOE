const playerX = document.querySelector(".player-x");
const playerCircle = document.querySelector(".player-circle");
const mainMenu = document.querySelector(".container-main");
const newGame = document.querySelector(".game-cpu");
const newGamePlayer = document.querySelector(".game-player");
const tablero = document.querySelector(".tablero");
const modalX = document.querySelector(".modal-x-back");
const modalO = document.querySelector(".modal-O-back");
const modalTie = document.querySelector(".modal-tie-back");
const restart = document.querySelector(".restart");
const modalRestart = document.querySelector(".modal-restart-back");
const next1 = document.querySelector(".next1");
const quit1 = document.querySelector(".quit1");
const next2 = document.querySelector(".next2");
const quit2 = document.querySelector(".quit2");
const next3 = document.querySelector(".next3");
const quit3 = document.querySelector(".quit3");
const cancel = document.querySelector(".cancel");
const restart2 = document.querySelector(".restart2");

let quits = [quit1,quit2,quit3];

const wins = document.querySelector(".wins");
const ties = document.querySelector(".ties");
const loses = document.querySelector(".loses");
let win = 0;
let tie = 0;
let lose = 0;

wins.innerHTML = `X: ${win++}`;
ties.innerHTML = `TIES: ${tie++}`;
loses.innerHTML = `O: ${lose++}`;

const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
const box4 = document.querySelector(".box-4");
const box5 = document.querySelector(".box-5");
const box6 = document.querySelector(".box-6");
const box7 = document.querySelector(".box-7");
const box8 = document.querySelector(".box-8");
const box9 = document.querySelector(".box-9");

const markTurn = document.querySelector(".mark-turn");

let boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

let player1 = "X";
let player2 = "circle";
let turno = true;
let CPU = true;
let clase;

const turnoCPU = ()=> {
    setTimeout(()=>{
        if (CPU == true) {
            let randomBox;
        if (turno == false) {
            randomBox = boxes[Math.floor(Math.random() * boxes.length)];
            randomBox.innerHTML = marcar();
            randomBox.classList.add(agregarClase(clase));
            removerCaja(randomBox);
        }
        cambiarTurno();
        }
    },500);
};

const cambiarMark = ()=> {
    if (player1 == "X") {
        if (turno == true) {
            markTurn.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        } else {
            markTurn.innerHTML = `<i class="fa-solid fa-circle-dot"></i>`;
        }
    } else {
        if (turno == true) {
            markTurn.innerHTML = `<i class="fa-solid fa-circle-dot"></i>`;
        } else {
            markTurn.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        }
    }
};

const agregarClase = (clase)=>{
    let marcaX = "marcaX";
    let marcaO = "marcaO";
    if(clase == "marcaX") {
        return marcaX;
    } else {
        return marcaO;
    }
};

const comprobarGanador = ()=> {
    let empate = true;
    if(box1.classList.contains("marcaX")&(box2.classList.contains("marcaX"))&box3.classList.contains("marcaX") || 
       box1.classList.contains("marcaX")&(box4.classList.contains("marcaX"))&box7.classList.contains("marcaX") ||
       box1.classList.contains("marcaX")&(box5.classList.contains("marcaX"))&box9.classList.contains("marcaX") ||
       box2.classList.contains("marcaX")&(box5.classList.contains("marcaX"))&box8.classList.contains("marcaX") || 
       box3.classList.contains("marcaX")&(box6.classList.contains("marcaX"))&box9.classList.contains("marcaX") || 
       box3.classList.contains("marcaX")&(box5.classList.contains("marcaX"))&box7.classList.contains("marcaX") ||
       box4.classList.contains("marcaX")&(box5.classList.contains("marcaX"))&box6.classList.contains("marcaX") || 
       box7.classList.contains("marcaX")&(box8.classList.contains("marcaX"))&box9.classList.contains("marcaX")){
        modalX.classList.add("show");
        empate = false;
    } else if (box1.classList.contains("marcaO")&(box2.classList.contains("marcaO"))&box3.classList.contains("marcaO") || 
               box1.classList.contains("marcaO")&(box4.classList.contains("marcaO"))&box7.classList.contains("marcaO") ||
               box1.classList.contains("marcaO")&(box5.classList.contains("marcaO"))&box9.classList.contains("marcaO") ||
               box2.classList.contains("marcaO")&(box5.classList.contains("marcaO"))&box8.classList.contains("marcaO") || 
               box3.classList.contains("marcaO")&(box6.classList.contains("marcaO"))&box9.classList.contains("marcaO") || 
               box3.classList.contains("marcaO")&(box5.classList.contains("marcaO"))&box7.classList.contains("marcaO") ||
               box4.classList.contains("marcaO")&(box5.classList.contains("marcaO"))&box6.classList.contains("marcaO") || 
               box7.classList.contains("marcaO")&(box8.classList.contains("marcaO"))&box9.classList.contains("marcaO")){
                modalO.classList.add("show");
                empate = false;
    };
    if (empate == true) {
        if (boxes.length == 0) {
            modalTie.classList.add("show");
        }
    }
};


const cambiarTurno = ()=>{
    if (turno == true) {
        turno = false;
        cambiarMark();
    } else {
        turno = true;
        cambiarMark();
    }
    comprobarGanador();
    return turno;
};

const marcar = ()=>{
    let marca;
    if(turno == true){
        if (player1 == "X") {
            marca = `<i class="fa-solid fa-circle-xmark xmark"></i>`;
            clase = "marcaX";
        } else {
            marca = `<i class="fa-solid fa-circle-dot circle"></i>`;
            clase = "marcaO";
        } 
    } else {
        if (player1 == "circle") {
            marca = `<i class="fa-solid fa-circle-xmark xmark"></i>`;
            clase = "marcaX";
        } else {
            marca = `<i class="fa-solid fa-circle-dot circle"></i>`;
            clase = "marcaO";
        }
    }
    return marca;
};

const removerCaja = (caja)=>{
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i] == caja)
        boxes.splice(i,1);
    } 
}

playerX.addEventListener("click",()=>{
    playerX.classList.add("selected");
    playerCircle.classList.remove("selected");
    player1 = "X";
    player2 = "circle"
    turno = true;
});

playerCircle.addEventListener("click",()=>{
    playerCircle.classList.add("selected");
    playerX.classList.remove("selected");
    player1 = "circle";
    player2 = "X";
    turno = false;
});

newGame.addEventListener("click",()=>{
    mainMenu.classList.add("hide");
    tablero.classList.add("show");
    CPU = true;
    if (player1 == "circle"){
        turnoCPU();
    }
});

newGamePlayer.addEventListener("click",()=>{
    mainMenu.classList.add("hide");
    tablero.classList.add("show");
    CPU = false;
});





box1.addEventListener("click",()=>{
    box1.innerHTML = marcar();
    box1.classList.add(agregarClase(clase));
    removerCaja(box1);
    cambiarTurno();
    turnoCPU();
});

box2.addEventListener("click",()=>{
    box2.innerHTML = marcar();
    box2.classList.add(agregarClase(clase));
    removerCaja(box2);
    cambiarTurno();
    turnoCPU();
});
box3.addEventListener("click",()=>{
    box3.innerHTML = marcar();
    box3.classList.add(agregarClase(clase));
    removerCaja(box3);
    cambiarTurno();
    turnoCPU();
});
box4.addEventListener("click",()=>{
    box4.innerHTML = marcar();
    box4.classList.add(agregarClase(clase));
    removerCaja(box4);
    cambiarTurno();
    turnoCPU();
});
box5.addEventListener("click",()=>{
    box5.innerHTML = marcar();
    box5.classList.add(agregarClase(clase));
    removerCaja(box5);
    cambiarTurno();
    turnoCPU();
});
box6.addEventListener("click",()=>{
    box6.innerHTML = marcar();
    box6.classList.add(agregarClase(clase));
    removerCaja(box6);
    cambiarTurno();
    turnoCPU();
});
box7.addEventListener("click",()=>{
    box7.innerHTML = marcar();
    box7.classList.add(agregarClase(clase));
    removerCaja(box7);
    cambiarTurno();
    turnoCPU();
});
box8.addEventListener("click",()=>{
    box8.innerHTML = marcar();
    box8.classList.add(agregarClase(clase));
    removerCaja(box8);
    cambiarTurno();
    turnoCPU();
});
box9.addEventListener("click",()=>{
    box9.innerHTML = marcar();
    box9.classList.add(agregarClase(clase));
    removerCaja(box9);
    cambiarTurno();
    turnoCPU();
});


next1.addEventListener("click",()=>{
    modalX.classList.remove("show");
    modalO.classList.remove("show");
    modalTie.classList.remove("show");
    boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9];
    for(let i = 0; i < boxes.length; i++){
        boxes[i].innerHTML = "";
        boxes[i].classList.remove("marcaX");
        boxes[i].classList.remove("marcaO");
    };
    if (player1 == "circle" & CPU == true){
        turnoCPU();
        cambiarTurno();
    } else if (player1 == "X"){
        turno = true;
        cambiarMark();
    } else if (player1 =="circle" & CPU == false){
        markTurn.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
    };
    wins.innerHTML = `X: ${win++}`;
});

next2.addEventListener("click",()=>{
    modalX.classList.remove("show");
    modalO.classList.remove("show");
    modalTie.classList.remove("show");
    boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9];
    for(let i = 0; i < boxes.length; i++){
        boxes[i].innerHTML = "";
        boxes[i].classList.remove("marcaX");
        boxes[i].classList.remove("marcaO");
    };
    if (player1 == "circle" & CPU == true){
        turnoCPU();
        cambiarTurno();
    } else if (player1 == "X"){
        turno = true;
        cambiarMark();
    } else if (player1 =="circle" & CPU == false){
        markTurn.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
    };
    loses.innerHTML = `O: ${lose++}`;
});

next3.addEventListener("click",()=>{
    modalX.classList.remove("show");
    modalO.classList.remove("show");
    modalTie.classList.remove("show");
    boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9];
    for(let i = 0; i < boxes.length; i++){
        boxes[i].innerHTML = "";
        boxes[i].classList.remove("marcaX");
        boxes[i].classList.remove("marcaO");
    };
    if (player1 == "circle" & CPU == true){
        turnoCPU();
        cambiarTurno();
    } else if (player1 == "X"){
        turno = true;
        cambiarMark();
    } else if (player1 =="circle" & CPU == false){
        markTurn.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
    };
    ties.innerHTML = `TIES: ${tie++}`;
});


for (let i = 0; i < quits.length; i++){
    quits[i].addEventListener("click",()=>{
        window.location.reload();
    })
};

restart.addEventListener("click",()=>{
    modalRestart.classList.remove("hide");
})

cancel.addEventListener("click",()=>{
    modalRestart.classList.add("hide");
})

restart2.addEventListener("click",()=>{
    boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9];
    for(let i = 0; i < boxes.length; i++){
        boxes[i].innerHTML = "";
        boxes[i].classList.remove("marcaX");
        boxes[i].classList.remove("marcaO");
    };
    if (player1 == "circle" & CPU == true){
        turnoCPU();
        cambiarTurno();
    } else if (player1 == "X"){
        turno = true;
        cambiarMark();
    } else if (player1 =="circle" & CPU == false){
        markTurn.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
    };
    modalRestart.classList.add("hide");
    win = 0;
    tie = 0;
    lose = 0;
    wins.innerHTML = `X: ${win++}`;
    ties.innerHTML = `TIES: ${tie++}`;
    loses.innerHTML = `O: ${lose++}`;
});