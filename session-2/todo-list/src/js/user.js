function loadUsers() {
    $(() => {
        $.getJSON("users.json", users => {
            localStorage.setItem("users", JSON.stringify(users));
        });
    });
}

function registerUser() {
    $(() => {
        const username = $("#username-register-input").val();

        if (username.length <= 0) {
            alert("Username can't be empty!");
            return;
        }

        if (sessionStorage.getItem("user") === username) {
            $("#username-registration").hide();
            return;
        };

        $.getJSON("users.json", () => {
            const users = JSON.parse(localStorage.getItem("users"));

            if (users.find(user => user.username === username)) {
                alert("You have already registered under that username!");
                return;
            }

            $("#username-registration").hide();
            $("#username-login").hide();
            $("#logged-in-as").append(`Logged in as: ${username}`)
            // add a new user to the session storage with zero todos
            const newUsers = users.concat({ username, todos: [] });
            localStorage.setItem("users", JSON.stringify(newUsers));
        });
    });
}

function loginUser() {
    $(() => {
        const username = $("#username-login-input").val();

        $.getJSON("users.json", () => {
            const users = JSON.parse(localStorage.getItem("users"));

            if (!users.find(user => user.username === username)) {
                alert("You haven't registered under that username!");
                return;
            }

            sessionStorage.setItem("user", username);
        });
    });
}
