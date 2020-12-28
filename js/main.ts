const addTask = document.getElementById('searchForm');
const list = document.getElementById('todoLists');

const createTodoList = task => {
  // HTML テンプレートを生成
  const html = `
  <li>
    <span>${task}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;
  list.innerHTML += html;
}

addTask.addEventListener('submit', e => {
  // デフォルトのイベントを無効
  e.preventDedault();

  // タスクに入力した値を空白を除外して格納
  const task = addTask?.addEventListener.value.trim();
  if(task.length) {
    // TodoListのHTMLを作成
    createTodoList(task);
    // タスクに入力した文字をクリア
    addTask.reset();
  }
})