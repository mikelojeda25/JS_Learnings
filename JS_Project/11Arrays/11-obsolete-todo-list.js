const todoList = [];

renderTodoList();

    function renderTodoList(){
        let todoListHTML = '';

        for (let i=0; i<todoList.length; i++) {
            const todo = todoList[i];
            const html = `
            <p>
            ${todo} 
             </p>`;

            todoListHTML += html;
        }

        document.querySelector('.js-todo-list')
            .innerHTML = todoListHTML;

        console.log(todoListHTML);
    }

    function addTodo() {
        const inputElement = document.querySelector('.js-name-input'); 
        const name = inputElement.value;  // Get the value of the input field
            
        todoList.push(name);  // Add the name to the todoList
        console.log(todoList);  // Log the added name to the console

        inputElement.value = '';

        renderTodoList();

    }