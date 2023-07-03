import { onCreateTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';
import { deleteTask, getTasksList } from './serverExchange.js';
import { renderTasks } from './renderer.js';
import { setItem, getItem } from './storage.js';

const onDeleteTask = (e) => {
  const taskId = e.target.closest('.list__item').dataset.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

export const onListClick = (e) => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');
  if (isCheckbox) {
    onToggleTask(e);
    return;
  }

  const isDeleteButton = e.target.classList.contains('list__item-delete-btn');
  if (isDeleteButton) {
    onDeleteTask(e);
  }
};

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  const deleteBtnElem = document.querySelector('.list__item-delete-btn');

  createBtnElem.addEventListener('click', onCreateTask);

  // deleteBtnElem.addEventListener('click', onToggleBtn);
  const todoListElem = document.querySelector('.list');

  // todoListElem.addEventListener('click', onToggleTask);
  todoListElem.addEventListener('click', onListClick);
};
