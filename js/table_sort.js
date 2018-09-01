var catsArray = [];
var sorted = {
    state: null,
    prop: null
};
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
// сортировка массива по возрастанию
var propSorting = function (arr, prop) {
    arr.sort(function (x, y) {
        return x[prop] > y[prop] ? 1 : x[prop] < y[prop] ? -1 : 0;
    });
};
// сортировка массива по убыванию
var propRevSorting = function (arr, prop) {
    arr.sort(function (a, b) {
        return b[prop] > a[prop] ? 1 : b[prop] < a[prop] ? -1 : 0;
    });
};
new Cat('Thomas', 10, 'grey', 'male', 8),
    new Cat('Kitty', 5, 'red', 'female', 2),
    new Cat('Max', 6, 'white', 'male', 12),
    new Cat('Angel', 3, 'black', 'male', 1),
    new Cat('Bella', 4, 'white', 'female', 5),
    new Cat('Tabby', 7, 'whiskas', 'male', 2),
    new Cat('Daisy', 3, 'beige', 'female', 5),
    new Cat('Misty', 5, 'grey', 'female', 3),
    new Cat('Spotty', 8, 'spotted', 'male', 6),
    new Cat('Tiger', 9, 'red', 'male', 4);
// удаление таблицы
var removeTable = function () {
    var el = document.getElementById('tbody');
    el.remove();
    var tbody2 = document.createElement('tbody');
    tbody2.setAttribute('id', 'tbody');
    var table = document.querySelector('#table');
    table.appendChild(tbody2);
};
// сортировка таблицы по заданным критериям
var sortTable = function (p) {
    removeTable();
    if (sorted.prop !== p || !sorted.state) {
        propSorting(catsArray, p);
        imgToggle(p, 'btn_asc');
        sorted.state = true;
    }
    else {
        propRevSorting(catsArray, p);
        imgToggle(p, 'btn_desc');
        sorted.state = false;
    }
    sorted.prop = p;
    createTable();
    clearButtons(p);
};
// создание таблицы
var createTable = function () {
    for (var i = 0; i < catsArray.length; i++) {
        var props = Object.values(catsArray[i]);
        var tbody = document.getElementById('tbody');
        var row = document.createElement('tr');
        for (var k = 0; k < props.length; k++) {
            var cell = document.createElement('td');
            var text = document.createTextNode(props[k]);
            cell.appendChild(text);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
};
// что происходит по нажатии на конкретную кнопку
var onClick = function (e) {
    if (e.target.id !== "") {
        sortTable(e.target.id);
        highlighter(getHeaderIndex(e));
    }
};
// подсветка отсортированных колонок
var highlighter = function (index) {
    var tbody = document.getElementById('tbody');
    for (var j = 0; j < tbody.rows.length; j++) {
        tbody.rows[j].cells[index].setAttribute('class', 'shadow');
    }
};
// поиск номера ячейки таблицы, которую нужно подсветить
var getHeaderIndex = function (el) {
    return el.target.closest('th').cellIndex;
};
// смена картинки на кнопке
var imgToggle = function (id, src) {
    var buttons = document.getElementsByTagName('button');
    buttons[id].classList.toggle(src);
};
// возврат неактивных кнопок к первоначальной картинке
var clearButtons = function (nm) {
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].id !== nm) {
            buttons[i].setAttribute('class', 'btn');
        }
    }
};
var thead = document.querySelector('#thead');
thead.addEventListener('click', onClick);
createTable();
