const addTask = (document.getElementById('addForm') as HTMLFormElement);
const list = document.getElementById('todoLists');

const createTodoList = (task:string | number) => {
  // HTML テンプレートを生成
  const html = `
  <li>
    <span>${task}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;

  if(list) {
    list.innerHTML += html;
  }
}
addTask.addEventListener('submit', (e) => {
  // デフォルトのイベントを無効
  e.preventDefault();

  // タスクに入力した値を空白を除外して格納
  const task = addTask.add.value.trim();
  if(task.length) {
    // Todo List の HTML を作成
    createTodoList(task);
    // タスクに入力した文字をクリア
    addTask.reset();
  }
})