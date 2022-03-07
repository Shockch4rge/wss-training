let todoId = 0;

function addTodo() {
    $(() => {
        const todo = $("#todo-input").val();
        const id = todoId++;

        if (!todo) {
            alert("Your to-do can't be empty.");
            return;
        }

        $("#todo-list").append(`
            <li id="${id}">
                <input id="todo-checkbox-${id}" class="mr-2" type="checkbox" onclick="toggleTodoCompleted(${id})"/>
                ${todo}  
                <button onclick="removeTodo(${id})" type="button" class="close ml-3">
                    <span aria-hidden="true">&times;</span>
                </button>
            </li>
        `);
    });
}

function toggleTodoCompleted(id) {
    $(() => {
        if ($(`#todo-checkbox-${id}`).prop("checked")) {
            $(`#${id}`).css("text-decoration", "line-through");
        } else {
            $(`#${id}`).css("text-decoration", "none");
        }
    });
}

function removeAllTodos() {
    $(() => {
        const todos = $("#todo-list").children();

        if (todos <= 0) {
            alert("There are no to-dos to clear!");
            return;
        }

        todos.remove();
    });
}

// remove a todo with a specific id when clicked
function removeTodo(id) {
    $(() => {
        $(`#${id}`).remove();
    });
}
