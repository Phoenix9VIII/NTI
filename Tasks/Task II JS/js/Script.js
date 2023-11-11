document.getElementById('add-task-form').addEventListener('submit', function(event) {
  event.preventDefault();

  let taskInput = document.getElementById('task-input');
  let descriptionInput = document.getElementById('description-input');
  let statusInput = document.getElementById('status-input');

  let taskValue = taskInput.value.trim();
  let descriptionValue = descriptionInput.value.trim();

  if (taskValue.length < 5) {
    alert('Task must be at least 5 characters long');
    return; 
  }

  if (taskValue.length > 50) {
    alert('Task must not exceed 50 characters');
    return; 
  }

  if (descriptionValue.length < 5) {
    alert('Description must be at least 5 characters long');
    return; 
  }

  if (descriptionValue.length > 50) {
    alert('Description must not exceed 50 characters');
    return;
  }

  let listItem = document.createElement('li');
  let taskText = document.createElement('span');
  let descriptionText = document.createElement('span');
  let statusText = document.createElement('span');
  let deleteButton = document.createElement('button');
  let editButton = document.createElement('button');

  taskText.textContent = taskValue;
  descriptionText.textContent = descriptionValue;
  statusText.textContent = statusInput.checked ? 'Saved' : 'Unsaved';
  deleteButton.textContent = 'Delete';
  editButton.textContent = 'Edit';

  listItem.appendChild(taskText);
  listItem.appendChild(document.createElement('br'));
  listItem.appendChild(descriptionText);
  listItem.appendChild(document.createElement('br'));
  listItem.appendChild(statusText);
  listItem.appendChild(document.createElement('br'));
  listItem.appendChild(deleteButton);
  listItem.appendChild(editButton);

  statusText.classList.add(statusInput.checked ? 'bg-success' : 'bg-warning');

  document.getElementById('tasks').appendChild(listItem);

  taskInput.value = '';
  descriptionInput.value = '';
  statusInput.checked = false;

  deleteButton.addEventListener('click', function() {
    listItem.remove();
  });

  editButton.addEventListener('click', function() {
    if (statusText.textContent === 'Saved') {
      statusText.textContent = 'Unsaved';
      statusText.classList.remove('bg-success');
      statusText.classList.add('bg-warning');
    } else {
      statusText.textContent = 'Saved';
      statusText.classList.remove('bg-warning');
      statusText.classList.add('bg-success');
    }
  });
});