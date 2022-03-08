const PLAYER_X = "X";
const PLAYER_O = "O";

const GameResult = {
    WIN: "WIN",
    DRAW: "DRAW",
    UNFINISHED: "UNFINISHED",
};

// switch between player X and O
let currentPlayer = PLAYER_X;
// variable to prevent tearing down and setting up click listeners multiple times
let isGameOver = false;

const loadBoard = () => {
    $("#current-player").text(`The current player is ${currentPlayer}`);
    const cells = $(".cell").toArray();

    cells.forEach(cell => $(cell).on("click", () => handleCellClick($(cell))));
};

const handleCellClick = cell => {
    const cellText = cell.text();

    if (cellText === "") {
        $(cell.text(currentPlayer));
        const gameState = checkGameState()

        if (gameState !== GameResult.UNFINISHED) {
            endGame(gameState);
            return;
        }

        changePlayer();
    }
};

const checkGameState = () => {
    const cells = $(".cell").toArray();

    if (cells.every(cell => $(cell).text() !== "")) {
        return GameResult.DRAW;
    }

    for (let i = 0; i < possibleWins.length; i++) {
        const [a, b, c] = possibleWins[i];

        if (
            $(cells[a]).text() !== "" &&
            $(cells[a]).text() === $(cells[b]).text() &&
            $(cells[a]).text() === $(cells[c]).text()
        ) {
            return GameResult.WIN;
        }
    }

    return GameResult.UNFINISHED;
};

const changePlayer = () => {
    currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
    $("#current-player").text(`The current player is ${currentPlayer}`);
};

// uninitialise the cells' onclick event
const endGame = gameResult => {
    const cells = $(".cell").toArray();

    cells.forEach(cell => {
        $(cell).off("click");
    });

    isGameOver = true;

    switch (gameResult) {
        case GameResult.WIN:
            alert(`Player ${currentPlayer} wins!`);
            break;
        case GameResult.DRAW:
            alert("It's a draw!");
            break;
    }
};

// possible win combinations for tic-tac-toe
const possibleWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetBoard = () => {
    const cells = $(".cell").toArray();
    currentPlayer = PLAYER_X;
    $("#current-player").text(`The current player is ${currentPlayer}`);

    cells.forEach(cell => {
        $(cell).text("");
    });

    if (isGameOver) {
        isGameOver = false;
        loadBoard();
    }
};
