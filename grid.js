// Setam marimea tablei de joc
const BOARD_SIZE = 25;

// Definim functia getRandomPosition care returneaza o pozitie aleatoare pe tabla de joc
export function getRandomPosition() {
return {
x: Math.floor(Math.random() * BOARD_SIZE) + 1, // Genereaza o pozitie aleatoare pe axa x utilizand functia Math.random() care genereaza un numar pseudo-aleator intre 0 si 1 si Math.floor() care ia partea intreaga a rezultatului. Adunam 1 la final pentru a obtine un numar intreg intre 1 si BOARD_SIZE inclusiv.
y: Math.floor(Math.random() * BOARD_SIZE) + 1 // Genereaza o pozitie aleatoare pe axa y utilizand aceeasi metoda ca mai sus.
}
}

// Definim functia isOutsideBoard care verifica daca o anumita pozitie este in afara tablei de joc
export function isOutsideBoard(position) {
return (
position.x < 1 || position.x > BOARD_SIZE || // Verifica daca pozitia pe axa x este mai mica decat 1 sau mai mare decat BOARD_SIZE, daca da, pozitia este in afara tablei de joc
position.y < 1 || position.y > BOARD_SIZE // Verifica daca pozitia pe axa y este mai mica decat 1 sau mai mare decat BOARD_SIZE, daca da, pozitia este in afara tablei de joc
)
}