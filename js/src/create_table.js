"use strict";
exports.__esModule = true;
// создание таблицы
exports.createTable = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var tbody = document.getElementById('tbody');
        var row = document.createElement('tr');
        for (var prop in arr[i]) {
            var value = arr[i][prop].toString();
            var cell = document.createElement('td');
            var text = document.createTextNode(value);
            cell.appendChild(text);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
};
