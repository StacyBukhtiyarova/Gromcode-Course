import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList, deleteTask } from './serverExchange.js';
import { onDeleteTask } from './createTask.js';


export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }
  const tasksList = getItem('tasksList');
  const taskId = e.target.dataset.id;
  const { text, createDate } = tasksList.find((task) => task.id === taskId);
  const done = e.target.checked;
  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

