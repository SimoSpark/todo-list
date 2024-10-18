const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const dueDateInput = document.getElementById('due-date');
const timeInput = document.getElementById('time-input');
const priorityInput = document.getElementById('priority');
const todoList = document.getElementById('todo-list');
const quoteContainer = document.getElementById('quote-container');

const quotes = [
    "The bad news is time flies. The good news is you’re the pilot. – Michael Altshuler",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort. – Paul J. Meyer",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe"
];

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function updateQuote() {
    quoteContainer.textContent = getRandomQuote();
}

updateQuote();
setInterval(updateQuote, 60000); // Update quote every minute

form.addEventListener('submit', function (e) {
    e.preventDefault();
    addTodo();
});

function addTodo() {
    if (input.value.trim() === '') return;

    const li = document.createElement('li');
    const dueDate = new Date(dueDateInput.value);
    const formattedDate = dueDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    const formattedTime = timeInput.value;

    li.innerHTML = `
                <div class="task-info">
                    <span>${input.value}</span>
                    <span class="due-date">Due: ${formattedDate} at ${formattedTime}</span>
                    <span class="priority priority-${priorityInput.value}">Priority: ${priorityInput.value}</span>
                </div>
                <button class="delete-button">Delete</button>
            `;

    li.querySelector('.delete-button').addEventListener('click', function () {
        li.remove();
    });

    todoList.appendChild(li);
    input.value = '';
    dueDateInput.value = '';
    timeInput.value = '';
    priorityInput.value = 'low';
}
