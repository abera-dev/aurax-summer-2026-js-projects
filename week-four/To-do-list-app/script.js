const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    const li = document.createElement('li');
    li.classList.add('task-item');
    li.innerHTML = `
        <span>${text}</span>
        <button class="edit-btn" aria-label="Edit task">&#9998;</button>
        <button class="delete-btn" aria-label="Delete task">&times;</button>
    `;
    taskList.appendChild(li);

    taskInput.value = '';
    taskInput.focus();
}

function saveEdit(li, input) {
    const newText = input.value.trim();
    const span = document.createElement('span');
    span.textContent = newText || li.querySelector('span').dataset.original;
    li.replaceChild(span, input);
}

taskList.addEventListener('click', function (e) {
    const li = e.target.closest('.task-item');
    if (!li) return;

    if (e.target.classList.contains('delete-btn')) {
        li.remove();
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
