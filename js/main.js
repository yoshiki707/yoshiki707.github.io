"use strict";
var addTask = document.getElementById('searchForm');
var list = document.getElementById('todoLists');
var createTodoList = function (task) {
    // HTML テンプレートを生成
    var html = "\n  <li>\n    <span>" + task + "</span>\n    <i class=\"far fa-trash-alt delete\"></i>\n  </li>\n  ";
    list.innerHTML += html;
};
addTask.addEventListener('submit', function (e) {
    // デフォルトのイベントを無効
    e.preventDedault();
    // タスクに入力した値を空白を除外して格納
    var task = addTask === null || addTask === void 0 ? void 0 : addTask.addEventListener.value.trim();
    if (task.length) {
        // TodoListのHTMLを作成
        createTodoList(task);
        // タスクに入力した文字をクリア
        addTask.reset();
    }
});
