document.getElementById('bgMusic').play();
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const ROW = 18;
const COL = 10;
const SQ = 40;
const COLOR = "WHITE";
let score = 0;

let dropInterval = 700;
let interval;
let speedUpTimer;
let gameOver = false;
let p;

function drawSquare(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * SQ, y * SQ, SQ, SQ);

    ctx.strokeStyle = "#ccc";
    ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
}

let board = [];
for (let r = 0; r < ROW; r++) {
    board[r] = [];
    for (let c = 0; c < COL; c++) {
        board[r][c] = COLOR;
    }
}

function drawBoard() {
    for (let r = 0; r < ROW; r++) {
        for (let c = 0; c < COL; c++) {
            drawSquare(c, r, board[r][c]);
        }
    }
}

class Piece {
    constructor(tetromino, color) {
        this.tetromino = tetromino;
        this.color = color;
        this.tetrominoN = 0;
        this.activeTetromino = this.tetromino[this.tetrominoN];
        this.x = 3;
        this.y = -2;
    }

    fill(color) {
        for (let r = 0; r < this.activeTetromino.length; r++) {
            for (let c = 0; c < this.activeTetromino.length; c++) {
                if (this.activeTetromino[r][c]) {
                    drawSquare(this.x + c, this.y + r, color);
                }
            }
        }
    }

    draw() {
        this.fill(this.color);
    }

    unDraw() {
        this.fill(COLOR);
    }

    moveDown() {
        if (!this.collision(0, 1, this.activeTetromino)) {
            this.unDraw();
            this.y++;
            this.draw();
        } else {
            this.lock();
            p = randomPiece();
        }
    }

    moveLeft() {
        if (!this.collision(-1, 0, this.activeTetromino)) {
            this.unDraw();
            this.x--;
            this.draw();
        }
    }

    moveRight() {
        if (!this.collision(1, 0, this.activeTetromino)) {
            this.unDraw();
            this.x++;
            this.draw();
        }
    }

    rotate() {
        let nextPattern = this.tetromino[(this.tetrominoN + 1) % this.tetromino.length];
        let kick = 0;

        if (this.collision(0, 0, nextPattern)) {
            kick = this.x > COL / 2 ? -1 : 1;
        }

        if (!this.collision(kick, 0, nextPattern)) {
            this.unDraw();
            this.x += kick;
            this.tetrominoN = (this.tetrominoN + 1) % this.tetromino.length;
            this.activeTetromino = this.tetromino[this.tetrominoN];
            this.draw();
        }
    }

    collision(x, y, piece) {
        for (let r = 0; r < piece.length; r++) {
            for (let c = 0; c < piece.length; c++) {
                if (!piece[r][c]) continue;
                let newX = this.x + c + x;
                let newY = this.y + r + y;
                if (newX < 0 || newX >= COL || newY >= ROW) {
                    return true;
                }
                if (newY < 0) continue;
                if (board[newY][newX] !== COLOR) {
                    return true;
                }
            }
        }
        return false;
    }

    lock() {
        for (let r = 0; r < this.activeTetromino.length; r++) {
            for (let c = 0; c < this.activeTetromino.length; c++) {
                if (!this.activeTetromino[r][c]) continue;
                if (this.y + r < 0) {
                    gameOverHandler();
                    return;
                }
                board[this.y + r][this.x + c] = this.color;
            }
        }

        // Xử lý ăn hàng
        for (let r = 0; r < ROW; r++) {
            let isFull = true;
            for (let c = 0; c < COL; c++) {
                if (board[r][c] === COLOR) {
                    isFull = false;
                    break;
                }
            }
            if (isFull) {
                for (let y = r; y > 0; y--) {
                    for (let c = 0; c < COL; c++) {
                        board[y][c] = board[y - 1][c];
                    }
                }
                for (let c = 0; c < COL; c++) {
                    board[0][c] = COLOR;
                }
                score += 10;
            }
        }

        drawBoard();
        document.getElementById('score').innerText = score;
    }
}

const PIECES = [
    [I, "cyan"],
    [O, "blue"],
    [T, "yellow"],
    [S, "green"],
    [Z, "red"],
    [J, "orange"],
    [L, "purple"]
];

function randomPiece() {
    let r = Math.floor(Math.random() * PIECES.length);
    return new Piece(PIECES[r][0], PIECES[r][1]);
}

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 37) p.moveLeft();
    else if (e.keyCode === 39) p.moveRight();
    else if (e.keyCode === 40) p.moveDown();
    else if (e.keyCode === 38) p.rotate();
});

function startGame(level) {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'flex';
    if (level === 'easy') dropInterval = 700;
    if (level === 'medium') dropInterval = 500;
    if (level === 'hard') dropInterval = 300;
    drawBoard();
    p = randomPiece();
    drop();
    speedUpTimer = setInterval(speedUp, 30000);
    updateHighScore();
}

function drop() {
    interval = setInterval(function () {
        if (!gameOver) {
            p.moveDown();
        } else {
            clearInterval(interval);
            clearInterval(speedUpTimer);
        }
    }, dropInterval);
}

function speedUp() {
    if (dropInterval > 100) {
        dropInterval -= 50;
        clearInterval(interval);
        drop();
    }
}

function updateHighScore() {
    let highScore = localStorage.getItem('tetrisHighScore') || 0;
    document.getElementById('highScore').innerText = highScore;
}

function checkAndUpdateHighScore() {
    let highScore = localStorage.getItem('tetrisHighScore') || 0;
    if (score > highScore) {
        localStorage.setItem('tetrisHighScore', score);
    }
}

function gameOverHandler() {
    gameOver = true;
    clearInterval(interval);
    clearInterval(speedUpTimer);
    checkAndUpdateHighScore();
    alert('Game Over! Your Score: ' + score);
    location.reload();
}
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const musicButton = document.getElementById('musicButton');

    if (music.paused) {
        music.play();
        musicButton.innerText = "Turn Music Off";
    } else {
        music.pause();
        musicButton.innerText = "Turn Music On";
    }
}

