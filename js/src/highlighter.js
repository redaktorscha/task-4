"use strict";
exports.__esModule = true;
// подсветка отсортированных колонок
exports.highlighter = function (index) {
    var tbody = document.getElementById('tbody');
    for (var j = 0; j < tbody.rows.length; j++) {
        tbody.rows[j].cells[index].setAttribute('class', 'shadow');
    }
};
