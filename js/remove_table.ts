// удаление таблицы
export const removeTable = (): void => {
    let el = document.getElementById('tbody');
    if (el) {
        el.remove();
    }
    let tbody2 = document.createElement('tbody');
    tbody2.setAttribute('id', 'tbody');
    let table = document.querySelector('#table');
    if (table) {
    table.appendChild(tbody2);
    }
}