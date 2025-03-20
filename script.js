const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a task
function addTask(taskText) {
  if (!taskText.trim()) return; // Prevent adding empty tasks

  const taskItem = document.createElement('li');

  // Create a text node for the task
  const taskTextNode = document.createTextNode(taskText);
  taskItem.appendChild(taskTextNode);

  // Add a delete button to the task
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.classList.add('delete');
  taskItem.appendChild(deleteBtn);

  // Append the task item to the list
  taskList.appendChild(taskItem);

  // Mark task as completed when clicked
  taskItem.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  // Remove the task when delete button is clicked
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent marking as completed if delete button is clicked
    taskList.removeChild(taskItem);
  });

  // Clear input field after adding task
  taskInput.value = '';
}

// Event listener for "Add" button
addTaskBtn.addEventListener('click', () => {
  addTask(taskInput.value);
});

// Event listener for pressing "Enter" to add task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask(taskInput.value);
  }
});