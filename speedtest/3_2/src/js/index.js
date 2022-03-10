const loadTimeOptions = () => {
    const times = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    for (const time of times) {
        $("#time-selection").append(`<option value="GMT+${time}:00">GMT+${time}:00</option>`);
    }
};

const onLoad = () => {
    loadTimeOptions();
    startClock();
};

const startClock = () => {
    setInterval(() => {
        const date = new Date();
        const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

        // const localeTime = date.toLocaleTimeString("en-US", {
        //     timeZone: "GMT",
        //     timeZoneName: "short",
        // });

        $(".clock-text").text(`${hours}:${minutes}:${seconds}`);
    }, 1000);
};
