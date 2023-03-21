let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

// Adăugăm un eveniment pentru a detecta apăsarea unei taste
document.addEventListener('keydown', event => {
  // Verificăm ce taste au fost apăsate și actualizăm direcția de intrare în funcție de tastă
  switch (event.code) {
    case 'ArrowUp':
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case 'ArrowDown':
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case 'ArrowLeft':
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case 'ArrowRight':
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

// Exportăm funcția getInputDirection pentru a fi disponibilă în alte module
export function getInputDirection() {
  // Actualizăm ultima direcție de intrare și returnăm direcția curentă
  lastInputDirection = inputDirection;
  return inputDirection;
}