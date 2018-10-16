// смена картинки на кнопке
export const imgToggle = (id: string, src: string): void => {
    const button = document.getElementById(id);
    if (button) {
    button.classList.toggle(src);
    }
}