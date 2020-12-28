"use strict";
var addTask = document.getElementById('searchForm');
var list = document.getElementById('todoLists');
var createTodoList = function (task) {
    var html = "\n  <li>\n    <span>" + task + "</span>\n    <i class=\"far fa-trash-alt delete\"></i>\n  </li>\n  ";
    list.innerHTML += html;
};
