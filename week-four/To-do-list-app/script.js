const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll('.task-item').forEach(function (li) {
        const span = li.querySelector('span');
        if (span) {
            tasks.push({
                text: span.textContent,
                completed: li.classList.contains('completed')
            });
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTaskElement(text, completed) {
    const li = document.createElement('li');
    li.classList.add('task-item');
    if (completed) li.classList.add('completed');
    li.innerHTML = `
        <span>${text}</span>
        <button class="edit-btn" aria-label="Edit task">&#9998;</button>
        <button class="delete-btn" aria-label="Delete task">&times;</button>
    `;
    return li;
}

function loadTasks() {
    getTasks().forEach(function (task) {
        taskList.appendChild(createTaskElement(task.text, task.completed));
    });
}

function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    taskList.appendChild(createTaskElement(text, false));
    saveTasks();

    taskInput.value = '';
    taskInput.focus();
}

function saveEdit(li, input) {
    const newText = input.value.trim();
    const span = document.createElement('span');
    span.textContent = newText || li.querySelector('input').dataset.original;
    li.replaceChild(span, input);
    saveTasks();
}

taskList.addEventListener('click', function (e) {
    const li = e.target.closest('.task-item');
    if (!li) return;

    if (e.target.classList.contains('delete-btn')) {
        li.remove();
        saveTasks();
        return;
    }

    if (e.target.classList.contains('edit-btn')) {
        const span = li.querySelector('span');
        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('edit-input');
        input.value = span.textContent;
        span.dataset.original = span.textContent;
        li.replaceChild(input, span);
        input.focus();
        input.select();
        return;
    }

    if (e.target.tagName === 'SPAN') {
        li.classList.toggle('completed');
        saveTasks();
    }
});

taskList.addEventListener('keydown', function (e) {
    if (e.target.classList.contains('edit-input') && e.key === 'Enter') {
        saveEdit(e.target.closest('.task-item'), e.target);
    }
});

taskList.addEventListener('blur', function (e) {
    if (e.target.classList.contains('edit-input')) {
        saveEdit(e.target.closest('.task-item'), e.target);
    }
}, true);

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

loadTasks();
