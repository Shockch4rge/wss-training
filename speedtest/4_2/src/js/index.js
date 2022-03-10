const getPositionOfQueen = () => {
    // get every 8 characters of a string
    const board = $("#player-input")
        .val()
        .match(/.{1,8}/g);

    for (let i = 0; i < board.length; i++) {
        const row = board[i];

        {
            const firstCount = row.indexOf("X");
            const secondCount = row.lastIndexOf("X");

            if (firstCount !== secondCount) {
                console.log(
                    `Row ${i + 1} contains queens attacking each other at column ${firstCount + 1} and ${
                        secondCount + 1
                    }`
                );
            }
        }

        {
        }
    }
};
