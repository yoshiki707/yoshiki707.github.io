// form
const addTask = document.getElementById('addForm') as HTMLFormElement;
const list = document.getElementById('todoLists') as HTMLElement;
const search = document.getElementById('searchBox') as HTMLInputElement;

(function() {
  // 初期化処理
  // ローカルストレージに格納されている値を取得し、リストを生成する
  for(let key in sessionStorage) {
    let html = sessionStorage.getItem(key);
    if (html) {
      list.innerHTML += sessionStorage.getItem(key);
    }
  }
})();

const saveTaskTosessionStorage = (task: string, html: string) => {
  // nullはsessionStorageに保存しない
  if (html) {
    // sessionStorageは、0から始まる
    sessionStorage.setItem(task, html);
    return;
  }
  return;
}

const deleteTaskFromsessionStorage = (task: string) => {
  sessionStorage.removeItem(task);
  return;
}

const createTodoList = (task: string) => {
  // HTML テンプレートを生成
  const html = `
  <li>
    <span>${task}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;

  list.innerHTML += html;
  saveTaskTosessionStorage(task, html);
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

// 削除機能
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
})

// フィルタリング機能
const filterTasks = (term: string) => {

  Array.form(list.children)
  // フィルタ条件
    .filter((todo: string) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

  Array.form(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', () => {
  // 空白削除かつ、小文字に変換（大文字、小文字の区別をなくす）
  const term = search.value.trim().toLowerCase();
  filterTasks(term);
});