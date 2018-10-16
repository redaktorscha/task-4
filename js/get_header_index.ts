import { IEvent } from './interfaces';

// поиск номера ячейки таблицы, которую нужно подсветить
export const getHeaderIndex = (e: IEvent): number => {
    const closest = (e.target as HTMLElement).closest('th');
    return closest ? closest.cellIndex : -1;
}