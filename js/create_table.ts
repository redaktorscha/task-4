import { ICat } from './interfaces';
// создание таблицы
export const createTable = (arr: ICat[]): void => {
    for (let i:number = 0; i < arr.length; i++) {
            let tbody = (<HTMLTableElement>document.getElementById('tbody'));
            let row = document.createElement('tr');
        for (const prop in arr[i]) {
            let value:string | number = arr[i][prop].toString();
            let cell = document.createElement('td');
            let text = document.createTextNode(value);
            cell.appendChild(text);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
}
