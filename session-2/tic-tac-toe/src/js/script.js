const PLAYER_X = "X";
const PLAYER_O = "O";

// switch between player X and O
let currentPlayer = PLAYER_X;
// mutable variable to prevent tearing down and setting up click listeners multiple times
let isGameOver = false;

const loadBoard = () => {
    $("#current-player").text(`The current player is ${currentPlayer}`);
    const cells = $(".cell").toArray();

    cells.forEach(_cell => {
        const cell = $(_cell);

        cell.on("click", () => {
            const cellText = cell.text();

            if (cellText === "") {
                $(cell.text(currentPlayer));

                if (checkWinner()) {
                    endGame();
                    return;
                }

                changePlayer();
            }
        });
    });
};

const checkWinner = () => {
    const cells = $(".cell").toArray();

    for (let i = 0; i < possibleWins.length; i++) {
        const [a, b, c] = possibleWins[i];

        if (
            $(cells[a]).text() !== "" &&
            $(cells[a]).text() === $(cells[b]).text() &&
            $(cells[a]).text() === $(cells[c]).text()
        ) {
            return true;
        }
    }

    return false;
};

const changePlayer = () => {
    currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
    $("#current-player").text(`The current player is ${currentPlayer}`);
};

// uninitialise the cells' onclick event
const endGame = () => {
    const cells = $(".cell").toArray();

    cells.forEach(cell => {
        $(cell).off("click");
    });

    isGameOver = true;
    alert(`Player ${currentPlayer} wins!`);
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

    cells.forEach(cell => {
        $(cell).text("");
    });

    if (isGameOver) {
        isGameOver = false;
        loadBoard();
    }
};
