import { ICat } from "./interfaces";
// сортировка массива по возрастанию
export const propSorting = (arr: ICat[], prop: string): void => {
    arr.sort(
        function (x: ICat, y: ICat): number {
            return x[prop] > y[prop] ? 1 : x[prop] < y[prop] ? -1 : 0;
        }
    );
}
