

function initialize() {
    const addTodoButton = document.getElementById("submit-data")
    addTodoButton.addEventListener('click', async function() {
        const userInput = document.getElementById('userInput')
        const todoInput = document.getElementById('todoInput')
        const todoData = await fetch("http://localhost:8000", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: '{ "todo": ' + todoInput.value + '" }'
        })
        const todoJson = await todoData.json()
        console.log("todoJson: ", todoJson)
        addNewTodo(todoInput.value)
    })

    const getTodoFromAPIButton = document.getElementById('get-todo-from-api')
    getTodoFromAPIButton.addEventListener('click', async function() {
        const todoData = await fetch('http://localhost:8000')
        const todoJson = await todoData.json()
        todoJson.forEach(todo => {
            addNewTodo(todo.todo)
        });
    })
    
}

function addNewTodo(todo) {
    const theWall = document.getElementById('the-wall')
    let newListItem = document.createElement('li')
    newListItem.appendChild(document.createTextNode(todo))
    theWall.appendChild(newListItem)
}

initialize()
