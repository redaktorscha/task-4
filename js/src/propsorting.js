
// сортировка массива по возрастанию
function propSorting (arr, prop) {
    arr.sort(function arrSort(x, y) {
        return x[prop] > y[prop] ? 1 : x[prop] < y[prop] ? -1 : 0;
    });
};
module.exports = propSorting;
