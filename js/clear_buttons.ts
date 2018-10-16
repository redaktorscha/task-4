// возврат неактивных кнопок к первоначальной картинке
export const clearButtons = (nm: string): void => {
    let buttons = document.getElementsByTagName('button');
    for (let i:number = 0; i < buttons.length; i++) {
        if (buttons[i].id !== nm) {
            buttons[i].setAttribute('class', 'btn');
        }
    }
}

