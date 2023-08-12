const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteButton">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";

        const deleteButton = li.querySelector(".deleteButton");
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(li);
        });
    }
}
