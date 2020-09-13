// Возвращает текущую активную панель
export const getCurrentPane = () => {
    const element = document.getElementsByClassName('--current');
    if (element[0]) {
        return element[0];
    }
    return null;
};