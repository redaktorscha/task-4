import { ICat } from "./interfaces";
import { ISorted } from "./interfaces";
import { IEvent } from './interfaces';
import { propSorting } from "./propsorting";
import { propRevSorting } from "./proprevsorting";
import { removeTable } from './remove_table';
import { createTable} from './create_table';
import { highlighter } from './highlighter';
import { getHeaderIndex } from './get_header_index';
import { imgToggle } from './img_toggle';
import { clearButtons } from './clear_buttons';

let catsArray: ICat[] = [];

let sorted = {} as ISorted;

// создает массив из объектов
class Cat implements ICat{
     [prop: string]: string | number;
    constructor(
        public name: string,
        public weight: number,
        public color: string,
        public gender: string,
        public age: number
    ) {        
        catsArray.push(this);
    }
}

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
    createTable(catsArray);
    clearButtons(p);
}

 
// что происходит по нажатии на конкретную кнопку
const onClick = (e: IEvent): void => {        
        if ((e.target as HTMLElement).id) {
        sortTable((e.target as HTMLElement).id);
        highlighter(getHeaderIndex(e));
    }
}


let thead = document.querySelector('#thead');
if (thead) {
  thead.addEventListener('click', e => {
    onClick(e)
  });
}
createTable(catsArray);