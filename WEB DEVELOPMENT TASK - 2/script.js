let todoList = [
    {
        item: 'Buy Milk',
        dueDate: '4/10/2023',
        completed: false
    },
    {
        item: 'Go to College',
        dueDate: '4/10/2023',
        completed: false
    }
];

displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate, completed: false});
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        let {item, dueDate, completed} = todoList[i];
        newHtml += `
            <span class="letter-text ${completed ? 'completed' : ''}">${item}</span>
            <span class="letter-text ${completed ? 'completed' : ''}">${dueDate}</span>
            <button class='btn-complete' onclick="markAsCompleted(${i});">Mark as Completed</button>
            <button class='btn-delete' onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>
        `;
    }
    containerElement.innerHTML = newHtml;
}

function markAsCompleted(index) {
    todoList[index].completed = true;
    displayItems();
}
