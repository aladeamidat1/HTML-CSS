
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let tasksVisible = true;


document.addEventListener('DOMContentLoaded', function () {
    showTaskList();

    document.getElementById("add-task-form").addEventListener('submit', function (e) {
        e.preventDefault();
        addTask();
    });

    document.getElementById("find-task-form").addEventListener('submit', function (e) {
        e.preventDefault();
        findTask();
    });

    document.getElementById("delete-task-form").addEventListener('submit', function (e) {
        e.preventDefault();
        deleteTask();
    });

    document.getElementById('toggleTasksBtn').addEventListener('click', function () {
        tasksVisible = !tasksVisible;
        showOrHideTasks();

    });

    
});

function addTask(){
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter something!");
        return;
    }
    tasks.push({
        text: taskText,
        completed: false
    });
    saveTasks();
    taskInput.value = "";
    showTaskList();
}

function showTaskList() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML = '<li>No tasks to display</li>';
        return;
    }
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.onchange = function () {
            task.completed = this.checked;
            saveTasks();
            showTaskList();
        };

        const taskSpan = document.createElement('span');
        taskSpan.textContent = task.text;
        if (task.completed) {
            taskSpan.classList.add('completed');
        }

         li.appendChild(checkbox);
        li.appendChild(taskSpan);
        
        taskList.appendChild(li);

    });
}

function showOrHideTasks() {
    const toggleBtn = document.getElementById('toggleTasksBtn');
    if (tasksVisible) {
        showTaskList();
        toggleBtn.textContent = 'Hide Tasks';
    } else {
        hideTasks();
        toggleBtn.textContent = 'Display all tasks';
    }
}

function hideTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = '<li>Tasks are hidden</li>';
}

function findTask() {
    const searchInput = document.getElementById("findInput");
    const searchText = searchInput.value.trim().toLowerCase();

    if (searchText === '') {
        alert('Please enter a search term!');
        return;
    }

    showTaskList();

    const taskElements = document.querySelectorAll("#taskList li");
    let found = false;

    tasks.forEach((task, index) => {
        if (task.text.toLowerCase().includes(searchText)) {
            taskElements[index].style.backgroundColor = '#ffff99';
            found = true;
        }
    });

    if (!found) {
        alert('No tasks found matching your search!');
    }
}

function deleteTask() {
    const deleteInput = document.getElementById("deleteInput");
    const deleteText = deleteInput.value.trim().toLowerCase();

    if (deleteText === '') {
        alert('Please enter a task to delete!');
        return;
    }

    const originalLength = tasks.length;
    tasks = tasks.filter(task => task.text.toLowerCase() !== deleteText);

    if (tasks.length === originalLength) {
        alert('No matching task found to delete!');
    } else {
        saveTasks();
        showTaskList();
    }

    deleteInput.value = '';
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


