"use strict";
var addTask = document.getElementById('addForm');
var list = document.getElementById('todoLists');
var createTodoList = function (task) {
    // HTML テンプレートを生成
    var html = "\n  <li>\n    <span>" + task + "</span>\n    <i class=\"far fa-trash-alt delete\"></i>\n  </li>\n  ";
    if (list) {
        list.innerHTML += html;
    }
};
if (addTask) {
    addTask.addEventListener('submit', function (e) {
        // デフォルトのイベントを無効
        e.preventDefault();
        // タスクに入力した値を空白を除外して格納
        var task = addTask.add.value.trim();
        if (task.length) {
            // Todo List の HTML を作成
            createTodoList(task);
            // タスクに入力した文字をクリア
            addTask.reset();
        }
    });
}
