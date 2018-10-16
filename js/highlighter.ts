// подсветка отсортированных колонок
export const highlighter = (index: number): void => {
    let tbody = (<HTMLTableElement>document.getElementById('tbody'));
    for (let j:number = 0; j < tbody.rows.length; j++) {
        tbody.rows[j].cells[index].setAttribute('class', 'shadow');
    }
}
