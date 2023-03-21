// Importăm funcțiile onSnake și expandSnake din fișierul 'snake.js'
import { onSnake, expandSnake } from './snake.js';

// Importăm funcția randomGridPosition din fișierul 'grid.js'
import { randomGridPosition } from './grid.js';

// Inițializăm variabila food cu o poziție aleatoare pe grilă
let food = getRandomFoodPosition();

// Stabilim o rată de extindere a șarpelui
const EXPANSION_RATE = 5;

// Exportăm funcția update pentru a fi disponibilă în alte module
export function update() {
  // Dacă șarpele se intersectează cu mâncarea, extindem șarpele și actualizăm poziția mâncării
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}
export function draw(gameBoard) {
  const foodElement = document.createElement('div');
  
  // Setăm poziția elementului div pe grilă în funcție de poziția curentă a mâncării
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  
  // Adăugăm clasa 'food' la elementul div pentru a-l stiliza cu CSS
  foodElement.classList.add('food');
  
  // Adăugăm elementul div pentru mâncare la tabla de joc (gameBoard)
  gameBoard.appendChild(foodElement);
  }
  
  // Funcție pentru generarea unei noi poziții aleatoare pentru mâncare
  function getRandomFoodPosition() {
  let newFoodPosition;
  
  // Generăm poziții aleatoare până când găsim o poziție care nu se intersectează cu șarpele
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
  newFoodPosition = randomGridPosition();
  }
  
  return newFoodPosition;
  }
  
