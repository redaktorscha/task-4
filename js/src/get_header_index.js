"use strict";
exports.__esModule = true;
// поиск номера ячейки таблицы, которую нужно подсветить
exports.getHeaderIndex = function (e) {
    var closest = e.target.closest('th');
    return closest ? closest.cellIndex : -1;
};
