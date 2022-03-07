let todoId = 0;

function addTodo() {
    const id = Math.random().toString(36).substring(7);

    const title = $("#todo-input-title").val();
    const description = $("#todo-input-description").val();
    const deadline = $("#todo-input-deadline").val();

    if (!title || !deadline) {
        return alert("Your to-do has missing required fields.");
    }

    $("#todo-list").append(`
        <div class="d-flex flex-column " id="${id}">
            <div class="mt-2">
                <h5>Title:</h5>
                <p>${title}</p>

                <h5>Description:</h5>
                <p>${description}</p>
            </div>
            <button onclick="removeTodo(${id})" type="button" class="close ml-3">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `);
}

function toggleTodoCompleted(id) {
    if ($(`#todo-checkbox-${id}`).prop("checked")) {
        $(`#${id}`).css("text-decoration", "line-through");
    } else {
        $(`#${id}`).css("text-decoration", "none");
    }
}

function removeAllTodos() {
    const todos = $("#todo-list").children();

    if (todos <= 0) {
        alert("There are no to-dos to clear!");
        return;
    }

    todos.remove();
}

// remove a todo with a specific id when clicked
function removeTodo(id) {
    $(`#${id}`).remove();
}
