"use strict";
exports.__esModule = true;
// сортировка массива по убыванию
exports.propRevSorting = function (arr, prop) {
    arr.sort(function arrRevSort(a, b) {
        return b[prop] > a[prop] ? 1 : b[prop] < a[prop] ? -1 : 0;
    });
};
