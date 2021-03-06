"use strict";
// form
var addTask = document.getElementById('addForm');
var list = document.getElementById('todoLists');
(function () {
    // 初期化処理
    // ローカルストレージに格納されている値を取得し、リストを生成する
    for (var key in sessionStorage) {
        var html = sessionStorage.getItem(key);
        if (html) {
            list.innerHTML += sessionStorage.getItem(key);
        }
    }
})();
var saveTaskTosessionStorage = function (task, html) {
    // nullはsessionStorageに保存しない
    if (html) {
        // sessionStorageは、0から始まる
        sessionStorage.setItem(task, html);
        return;
    }
    return;
};
var deleteTaskFromsessionStorage = function (task) {
    sessionStorage.removeItem(task);
    return;
};
var createTodoList = function (task) {
    // HTML テンプレートを生成
    var html = "\n  <li>\n    <span>" + task + "</span>\n    <i class=\"far fa-trash-alt delete\"></i>\n  </li>\n  ";
    list.innerHTML += html;
    saveTaskTosessionStorage(task, html);
};
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
// 削除機能
list.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});
// フィルタリング機能
var search = document.getElementById('searchBox');
var filterTasks = function (term) {
    Array.from(list.children)
        // フィルタ条件
        .filter(function (todo) { return !todo.textContent.toLowerCase().includes(term); })
        .forEach(function (todo) { return todo.classList.add('filtered'); });
    Array.from(list.children)
        .filter(function (todo) { return todo.textContent.toLowerCase().includes(term); })
        .forEach(function (todo) { return todo.classList.remove('filtered'); });
};
search.addEventListener('keyup', function () {
    // 空白削除かつ、小文字に変換(大文字・小文字の区別をなくす)
    var term = search.value.trim().toLowerCase();
    filterTasks(term);
});
