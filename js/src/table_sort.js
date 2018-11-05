"use strict";
exports.__esModule = true;
var propsorting_1 = require("./propsorting");
var proprevsorting_1 = require("./proprevsorting");
var remove_table_1 = require("./remove_table");
var create_table_1 = require("./create_table");
var highlighter_1 = require("./highlighter");
var get_header_index_1 = require("./get_header_index");
var img_toggle_1 = require("./img_toggle");
var clear_buttons_1 = require("./clear_buttons");
var catsArray = [];
module.exports = catsArray;

var sorted = {};
// создает массив из объектов
var Cat = /** @class */ (function () {
    function Cat(name, weight, color, gender, age) {
        this.name = name;
        this.weight = weight;
        this.color = color;
        this.gender = gender;
        this.age = age;
        catsArray.push(this);
    }
    return Cat;
}());
new Cat('Thomas', 10, 'grey', 'male', 8);
new Cat('Kitty', 5, 'red', 'female', 2);
new Cat('Max', 6, 'white', 'male', 12);
new Cat('Angel', 3, 'black', 'male', 1);
new Cat('Bella', 4, 'white', 'female', 5);
new Cat('Tabby', 7, 'whiskas', 'male', 2);
new Cat('Daisy', 3, 'beige', 'female', 5);
new Cat('Misty', 5, 'grey', 'female', 3);
new Cat('Spotty', 8, 'spotted', 'male', 6);
new Cat('Tiger', 9, 'red', 'male', 4);
// сортировка таблицы по заданным критериям
var sortTable = function (p) {
    remove_table_1.removeTable();
    if (sorted.prop !== p || !sorted.state) {
        propsorting_1.propSorting(catsArray, p);
        img_toggle_1.imgToggle(p, 'btn_asc');
        sorted.state = true;
    }
    else {
        proprevsorting_1.propRevSorting(catsArray, p);
        img_toggle_1.imgToggle(p, 'btn_desc');
        sorted.state = false;
    }
    sorted.prop = p;
    create_table_1.createTable(catsArray);
    clear_buttons_1.clearButtons(p);
};
// что происходит по нажатии на конкретную кнопку
var onClick = function (e) {
    if (e.target.id) {
        sortTable(e.target.id);
        highlighter_1.highlighter(get_header_index_1.getHeaderIndex(e));
    }
};
var thead = document.querySelector('#thead');
if (thead) {
    thead.addEventListener('click', function (e) {
        onClick(e);
    });
}
create_table_1.createTable(catsArray);
