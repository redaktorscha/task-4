"use strict";
exports.__esModule = true;
// смена картинки на кнопке
exports.imgToggle = function (id, src) {
    var button = document.getElementById(id);
    if (button) {
        button.classList.toggle(src);
    }
};
