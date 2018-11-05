"use strict";
exports.__esModule = true;
// удаление таблицы
exports.removeTable = function () {
    var el = document.getElementById('tbody');
    if (el) {
        el.remove();
    }
    var tbody2 = document.createElement('tbody');
    tbody2.setAttribute('id', 'tbody');
    var table = document.querySelector('#table');
    if (table) {
        table.appendChild(tbody2);
    }
};
