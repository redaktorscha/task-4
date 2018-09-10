
interface ICatsArray extends Array<object> {
    [index: number]: object;
}

let catsArray = [] as ICatsArray;

interface ISorted {
    state: boolean;
    prop: string;
}

let sorted = {} as ISorted;

interface ICat {
    name: string;
    weight: number;
    color: string;
    gender: string;
    age: number;
    [key: string]: string | number;        
}

// создает массив из объектов
class Cat implements ICat{
     [key: string]: string | number;
    constructor(public name: string, public weight: number, public color: string, public gender: string, public age: number) {
        this.name = name;
        this.weight = weight;
        this.color = color;
        this.gender = gender;
        this.age = age;
        catsArray.push(this);
    }
}
// сортировка массива по возрастанию
const propSorting = (arr: object[], prop: string): void => {
    arr.sort(
        function (x: object, y: object): number {
            return x[prop] > y[prop] ? 1 : x[prop] < y[prop] ? -1 : 0;
        }
    );
}

// сортировка массива по убыванию
const propRevSorting = (arr: object[], prop: string): void => {
    arr.sort(
        function (a: object, b: object): number {
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
const removeTable = (): void => {
    let el = document.getElementById('tbody');
    el.remove();
    let tbody2 = document.createElement('tbody');
    tbody2.setAttribute('id', 'tbody');
    let table = document.querySelector('#table');
    table.appendChild(tbody2);
}

// сортировка таблицы по заданным критериям
const sortTable = (p: string): void => {
    removeTable();
    if (sorted.prop !== p || !sorted.state) {
        propSorting(catsArray, p);
        imgToggle(p, 'btn_asc');
        sorted.state = true;
    } else {
        propRevSorting(catsArray, p);
        imgToggle(p, 'btn_desc');
        sorted.state = false;
    }
    sorted.prop = p;
    createTable();
    clearButtons(p);
}

declare interface ObjectConstructor {
    values(...objects: Object[]);
}

// создание таблицы
const createTable = (): void => {
    for (let i:number = 0; i < catsArray.length; i++) {
        let props = Object.values(catsArray[i]);
        let tbody = (<HTMLTableElement>document.getElementById('tbody'));
        let row = document.createElement('tr');
        for (let k:number = 0; k < props.length; k++) {
            let cell = document.createElement('td');
            let text = document.createTextNode(props[k]);
            cell.appendChild(text);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
}

interface IEvent {
    target: HTMLElement;
  }
  
// что происходит по нажатии на конкретную кнопку
const onClick = (e): void => {        
        if (e.target.id) {
        sortTable(e.target.id);
        highlighter(getHeaderIndex(e));
    }
}

// подсветка отсортированных колонок
const highlighter = (index: number): void => {
    let tbody = (<HTMLTableElement>document.getElementById('tbody'));
    for (let j:number = 0; j < tbody.rows.length; j++) {
        tbody.rows[j].cells[index].setAttribute('class', 'shadow');
    }
}

// поиск номера ячейки таблицы, которую нужно подсветить
const getHeaderIndex = (el: IEvent): number => {
    return el.target.closest('th').cellIndex;
}


// смена картинки на кнопке
const imgToggle = (id: string, src: string): void => {
    let buttons = document.getElementsByTagName('button');
    buttons[id].classList.toggle(src);
    };

// возврат неактивных кнопок к первоначальной картинке
const clearButtons = (nm: string): void => {
    let buttons = document.getElementsByTagName('button');
    for (let i:number = 0; i < buttons.length; i++) {
        if (buttons[i].id !== nm) {
            buttons[i].setAttribute('class', 'btn');
        }
    }
}


let thead = document.querySelector('#thead');
thead.addEventListener('click', function(e) {
    onClick(e)
});

createTable();