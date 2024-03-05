const btnP1 = document.querySelector(".player1");
const btnP2 = document.querySelector(".player2");
const reset = document.querySelector(".reset");
const win = document.querySelector("#win");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");

// Başlangıçta #win değerini 5 yaptık.
win.value = '5';
let winningScore = 5; // Oyunun başlangıç kazanma skoru
let gameOver = false;

btnP1.addEventListener("click", () => {
    if (!gameOver) {
        let score = Number(p1.textContent) + 1;
        p1.textContent = score;
        if (score >= winningScore) {
            gameOver = true;
            p1.style.color = "green";
            p2.style.color = "red";
        }
    }
});

btnP2.addEventListener("click", () => {
    if (!gameOver) {
        let score = Number(p2.textContent) + 1;
        p2.textContent = score;
        if (score >= winningScore) {
            gameOver = true;
            p2.style.color = "green";
            p1.style.color = "red";
        }
    }
});

reset.addEventListener("click", () => {
    gameOver = false;
    p1.textContent = 0;
    p2.textContent = 0;
    p1.style.color = "black";
    p2.style.color = "black";
});

// Oyunun başlangıç kazanma skorunu değiştir
win.addEventListener("change", () => {
    winningScore = Number(win.value);
    

});

reset.addEventListener("click", () => {
    // Oyun durumunu ve skorları sıfırla
    winningScore = 5;
    p1.textContent = 0;
    p2.textContent = 0;
    win.value = '5'
    p1.style.color = "black";
    p2.style.color = "black";
    gameOver = false;


})
