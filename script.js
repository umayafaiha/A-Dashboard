// ---------- TIME & DATE ----------
function updateDateTime() {
    const now = new Date();

    // Time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("time").textContent = `${hours}:${minutes}`;

    // Date
    const options = { weekday: "long", month: "long", day: "numeric" };
    document.getElementById("date").textContent = now.toLocaleDateString("en-US", options);
}

setInterval(updateDateTime, 1000);
updateDateTime();


// ---------- RANDOM QUOTES ----------
const quotes = [
    "Start where you are. Use what you have. Do what you can.",
    "Small progress each day adds up to big results.",
    "Focus on the step in front of you, not the whole staircase.",
    "Your only limit is your mindset.",
    "Be stronger than your excuses."
];

function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}
displayQuote();


// ---------- TO-DO LIST ----------
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load saved tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(task => addTaskToDOM(task));

function addTask() {
    const task = taskInput.value.trim();
    if (task === "") return;

    tasks.push(task);
    addTaskToDOM(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
}

function addTaskToDOM(task) {
    const li = document.createElement("li");
    li.textContent = task;

    li.onclick = () => {
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        li.remove();
    };

    taskList.appendChild(li);
}


// ---------- THEME TOGGLE ----------
const themeToggle = document.getElementById("themeToggle");

themeToggle.onclick = () => {
    document.body.classList.toggle("dark");
};
