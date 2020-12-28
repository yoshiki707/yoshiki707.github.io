const addTask = document.getElementById('searchForm');
const list = document.getElementById('todoLists');

const createTodoList = task => {
  const html = `
  <li>
    <span>${task}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;
  list.innerHTML += html;
}