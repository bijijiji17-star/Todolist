const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleTask(this)">${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">✖</button>
  `;
  taskList.appendChild(li);

  // Neon glow effect
  li.style.boxShadow = "0 0 20px #00ffe0";
  setTimeout(() => li.style.boxShadow = "none", 600);

  taskInput.value = "";
}

function toggleTask(task) {
  task.parentElement.classList.toggle("completed");
}

function deleteTask(btn) {
  const li = btn.parentElement;
  li.style.transform = "translateX(100px)";
  li.style.opacity = "0";
  setTimeout(() => li.remove(), 400);
}
