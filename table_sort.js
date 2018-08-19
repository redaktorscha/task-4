let catsArray = [];
let sorted = {};


// создает массив из объектов
// @param cat_name, cat_weight, cat_color, cat_gender, cat_age String/Number свойства объектов
const cat = function (cat_name, cat_weight, cat_color, cat_gender, cat_age) {
    this.name = cat_name;
    this.weight = cat_weight;
    this.color = cat_color;
    this.gender = cat_gender;
    this.age = cat_age;
    this.toArray = function () {
        catsArray.push(this)
    };
    this.toArray();
}

// сортировка массива по возрастанию
// @param arr Object сортируемый массив, prop String ключ свойства объекта, по которому производится сортировка
const propSorting = (arr, prop) => {
    arr.sort(
        function (x, y) {
            return x[prop] > y[prop] ? 1 : x[prop] < y[prop] ? -1 : 0;
        }
    );
}

// сортировка массива по убыванию
// @param arr Object сортируемый массив, prop String ключ свойства объекта, по которому производится сортировка
const propRevSorting = (arr, prop) => {
    arr.sort(
        function (a, b) {
            return b[prop] > a[prop] ? 1 : b[prop] < a[prop] ? -1 : 0;
        }
    );
}


let cat1 = new cat('Thomas', 10, 'grey', 'male', 8),
    cat2 = new cat('Kitty', 5, 'red', 'female', 2),
    cat3 = new cat('Max', 6, 'white', 'male', 12),
    cat4 = new cat('Angel', 3, 'black', 'male', 1),
    cat5 = new cat('Bella', 4, 'white', 'female', 5),
    cat6 = new cat('Tabby', 7, 'whiskas', 'male', 2),
    cat7 = new cat('Daisy', 3, 'beige', 'female', 5),
    cat8 = new cat('Misty', 5, 'grey', 'female', 3),
    cat9 = new cat('Spotty', 8, 'spotted', 'male', 6),
    cat10 = new cat('Tiger', 9, 'red', 'male', 4);

// удаление таблицы
const removeTable = () => {
    let el = document.getElementById('tbody');
    el.remove();
    let tbody2 = document.createElement('tbody');
    tbody2.setAttribute('id', 'tbody');
    let table = document.querySelector('#table');
    table.appendChild(tbody2);
}

// сортировка таблицы по заданным критериям
// @param p String ключ свойства объекта, по которому производится сортировка
const sortTable = (p) => {
    removeTable();
    if (sorted.prop !== p || sorted.state === false) {
        propSorting(catsArray, p);
        imgToggle(p, 'btn', 'btn_asc');
        sorted.state = true;
    } else {
        propRevSorting(catsArray, p);
        imgToggle(p, 'btn_asc', 'btn_desc');
        sorted.state = false;
    }
    sorted.prop = p;
    createTable();
    clearButtons(p);
}


// создание таблицы
const createTable = () => {
    for (i = 0; i < catsArray.length; i++) {
        let props = Object.values(catsArray[i]);
        let tbody = document.getElementById('tbody');
        let row = document.createElement('tr');
        for (k = 0; k < 5; k++) {
            let cell = document.createElement('td');
            let text = document.createTextNode(props[k]);
            cell.appendChild(text);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
}

// что происходит по нажатию на конкретную кнопку
// @param e Object кнопка, на которую нажимает пользователь
const onClick = (e) => {
    let btnId = e.target.id;
    switch (btnId) {
        case 'name':
            sortTable('name');
            highlighter(0);            
            break;
        case 'weight':
            sortTable('weight');
            highlighter(1);
            break;
        case 'color':
            sortTable('color');
            highlighter(2);
            break;
        case 'gender':
            sortTable('gender');
            highlighter(3);
            break;
        case 'age':
            sortTable('age');
            highlighter(4);
            break;
    }
}

// подсветка отсортированных колонок
// @param Index Number номер подсвеченной ячейки таблицы
const highlighter = (index) => {
    let tbody = document.getElementById('tbody');
    for (let j = 0; j < tbody.rows.length; j++) {
        tbody.rows[j].cells[index].setAttribute('class', 'shadow');
    }
}

// смена картинки на кнопке
// @param id String ключ свойства объекта, по которому производится сортировка, src1 String класс объекта, src 2 String класс объекта
const imgToggle = (id, src1, src2) => {
    let buttons = document.getElementsByTagName('button');
    if (buttons[id].getAttribute('class', src1)) {
        buttons[id].setAttribute('class', src2)
    };

}

// возврат неактивных кнопок к первоначальной картинке
// @param nm String ключ свойства объекта, по которому производится сортировка
const clearButtons = (nm) => {
    let buttons = document.getElementsByTagName('button');
    for (i = 0; i < buttons.length; i++) {
        if (buttons[i].id !== nm) {
            buttons[i].setAttribute('class', 'btn');
        }
    }
}


let thead = document.querySelector('#thead');
thead.addEventListener('click', onClick);


createTable();

