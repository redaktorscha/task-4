"use strict";
exports.__esModule = true;
// возврат неактивных кнопок к первоначальной картинке
exports.clearButtons = function (nm) {
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].id !== nm) {
            buttons[i].setAttribute('class', 'btn');
        }
    }
};
