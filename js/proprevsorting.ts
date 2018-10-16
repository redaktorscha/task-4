import { ICat } from "./interfaces";
// сортировка массива по убыванию
export const propRevSorting = (arr: ICat[], prop: string): void => {
    arr.sort(
        function (a: ICat, b: ICat): number {
            return b[prop] > a[prop] ? 1 : b[prop] < a[prop] ? -1 : 0;
        }
    );
}