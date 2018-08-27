let catsArray: Array<Object> = [];
let sorted = {
    state: <boolean> null,
    prop: <string> null,
};

interface Cat {
    name: string;
    weight: number;
    color: string;
    gender: string;
    age: number;
}
// создает массив из объектов
class Cat {
    constructor(name, weight, color, gender, age) {
        this.name = name;
        this.weight = weight;
        this.color = color;
        this.gender = gender;
        this.age = age;
        catsArray.push(this);
    }
}
// сортировка массива по возрастанию
const propSorting = (arr: any[], prop: string) => {
    arr.sort(
        function (x, y) {
            return x[prop] > y[prop] ? 1 : x[prop] < y[prop] ? -1 : 0;
        }
    );
}

// сортировка массива по убыванию
const propRevSorting = (arr: any[], prop: string) => {
    arr.sort(
        function (a, b) {
            return b[prop] > a[prop] ? 1 : b[prop] < a[prop] ? -1 : 0;
        }
    );
}


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
const removeTable = () => {
    let el = document.getElementById('tbody');
    el.remove();
    let tbody2 = document.createElement('tbody');
    tbody2.setAttribute('id', 'tbody');
    let table = document.querySelector('#table');
    table.appendChild(tbody2);
}

// сортировка таблицы по заданным критериям
const sortTable = (p) => {
    removeTable();
    if (sorted.prop !== p || !sorted.state) {
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
    for (let i = 0; i < catsArray.length; i++) {
        let props = Object.values(catsArray[i]);
        let tbody = document.getElementById('tbody');
        let row = document.createElement('tr');
        for (let k = 0; k < props.length; k++) {
            let cell = document.createElement('td');
            let text = document.createTextNode(props[k]);
            cell.appendChild(text);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
}

// что происходит по нажатии на конкретную кнопку
const onClick = (e: any) => {
        if (e.target.id !== "") {
        sortTable(e.target.id);
        highlighter(getHeaderIndex(e));
    }
}

// подсветка отсортированных колонок
const highlighter = (index: number) => {
    let tbody = document.getElementById('tbody');
    for (let j = 0; j < tbody.rows.length; j++) {
        tbody.rows[j].cells[index].setAttribute('class', 'shadow');
    }
}

// поиск номера ячейки таблицы, которую нужно подсветить
const getHeaderIndex = (el: any) => {
    return el.target.closest('th').cellIndex;
}


// смена картинки на кнопке
const imgToggle = (id: number, src1: string, src2: string) => {
    let buttons = document.getElementsByTagName('button');
    if (buttons[id].getAttribute(src1)) {//тут пришлось убрать 'class', ts ругался
        buttons[id].setAttribute('class', src2)
    };

}

// возврат неактивных кнопок к первоначальной картинке
const clearButtons = (nm: string) => {
    let buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id !== nm) {
            buttons[i].setAttribute('class', 'btn');
        }
    }
}


let thead = document.querySelector('#thead');
thead.addEventListener('click', onClick);


createTable();