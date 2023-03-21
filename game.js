import { update as updatePlayer, draw as drawPlayer, PLAYER_SPEED, getPlayerHead, playerIntersection } from './player.js'
import { update as updateEnemy, draw as drawEnemy } from './enemy.js'
import { outsideGrid } from './grid.js'

// Se inițializează variabilele și se preia referința la elementul HTML game-board
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

// Funcția principală care rulează jocul, primește parametrul currentTime pentru a sincroniza animația
function main(currentTime) {
// Dacă jocul este pierdut, se afișează un mesaj și se restartează jocul la apăsarea butonului OK
if (gameOver) {
if (confirm('You lost. Press ok to restart.')) {
window.location = '/'
}
return
}

// Se apelează funcția de animație a browserului, care apelează recursiv funcția main și sincronizează animația cu currentTime
window.requestAnimationFrame(main)
const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

// Se actualizează jocul și se verifică dacă jucătorul a mișcat suficient de mult pentru a face o nouă actualizare
if (secondsSinceLastRender < 1 / PLAYER_SPEED) return

// Se actualizează timpul ultimei randări și se actualizează jocul
lastRenderTime = currentTime
update()
draw()
}

// Se apelează funcția main pentru prima dată, pentru a începe jocul
window.requestAnimationFrame(main)

// Funcția care actualizează starea jocului
function update() {
updatePlayer() // Se actualizează starea jucătorului
updateEnemy() // Se actualizează starea inamicului
checkDeath()
}

function draw() {
gameBoard.innerHTML = ''
drawPlayer(gameBoard)
drawEnemy(gameBoard)
}

function checkDeath() {
gameOver = outsideGrid(getPlayerHead()) || playerIntersection()
}