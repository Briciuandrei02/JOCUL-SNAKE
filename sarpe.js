import { getInputDirection } from "./input.js" //importa functia getInputDirection din fisierul input.js

export const PLAYER_SPEED = 5 //seteaza viteza jucatorului la 5
const playerBody = [{ x: 11, y: 11 }] //declara pozitia initiala a jucatorului
let newSegments = 0 //initializarea numarului de segmente noi adaugate

export function update() { //declara functia update
addSegments() //adauga segmente noi daca sunt
const inputDirection = getInputDirection() //preia directia input-ului de la tastatura
for (let i = playerBody.length - 2; i >= 0; i--) { //parcurge corpul jucatorului incepand de la penultima pozitie
playerBody[i + 1] = { ...playerBody[i] } //muta fiecare segment din corpul jucatorului spre urmatoarea pozitie
}
playerBody[0].x += inputDirection.x //modifica pozitia capului jucatorului pe axa x cu inputDirection.x
playerBody[0].y += inputDirection.y //modifica pozitia capului jucatorului pe axa y cu inputDirection.y
}

export function draw(gameBoard) { //declara functia draw care deseneaza jucatorul
playerBody.forEach(segment => { //parcurge fiecare segment din corpul jucatorului
const playerElement = document.createElement('div') //creeaza un element HTML
playerElement.style.gridRowStart = segment.y //seteaza pozitia pe axa y a elementului
playerElement.style.gridColumnStart = segment.x //seteaza pozitia pe axa x a elementului
playerElement.classList.add('player') //adauga clasa 'player' elementului
gameBoard.appendChild(playerElement) //adauga elementul la panoul de joc
})
}

export function expandPlayer(amount) { //declara functia expandPlayer
newSegments += amount //adauga numarul de segmente noi in functie de valoarea parametrului 'amount'
}

export function onPlayer(position, { ignoreHead = false } = {}) { //declara functia onPlayer care verifica daca o anumita pozitie este ocupata de jucator
return playerBody.some((segment, index) => { //verifica daca exista un segment din corpul jucatorului care ocupa pozitia data
if (ignoreHead && index === 0) return false //daca se ignora pozitia capului si indexul este 0, returneaza fals
return equalPositions(segment, position)//daca segmentul din corpul jucatorului de la indexul curent are aceeasi pozitie cu pozitia data
})
}

export function getPlayerHead() { //declara functia getPlayerHead care returneaza pozitia capului jucatorului
return playerBody[0] //returneaza pozitia primului segment din corpul jucatorului (care este capul)
}

export function playerIntersection() { //declara functia playerIntersection care verifica daca jucatorul se intersecteaza cu propriul corp
return onPlayer(playerBody[0], { ignoreHead: true }) //apeleaza functia onPlayer cu pozitia capului si ignora capul in verificare
}

function equalPositions(pos1, pos2) { //declara functia equalPositions care verifica daca doua pozitii sunt egale
return pos1.x === pos2.x && pos1.y === pos2.y //returneaza daca pozitia x si pozitia y sunt egale intre cele doua pozitii
}

function addSegments() { //declara functia addSegments care adauga segmente noi in corpul jucatorului
for (let i = 0; i < newSegments; i++) { //parcurge numarul de segmente noi adaugate
playerBody.push({ ...playerBody[playerBody.length - 1] }) //adauga un segment nou la finalul corpului jucatorului cu aceeasi pozitie ca si ultimul segment
}

newSegments = 0 //resetare numarul de segmente noi adaugate la 0
}



