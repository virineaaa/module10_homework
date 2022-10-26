const btn = document.querySelector('.j-btn-get-screen-size');

// Размер экрана (ширина и высота)
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

// Размер вьюпорта (ширина и высота)
//const windowInnerWidth = window.innerWidth;
//const windowInnerHeight = window.innerHeight;

btn.addEventListener('click', () => {
   window.alert(`Ширина: ${screenWidth}, Высота: ${screenHeight}`);
   //window.alert(`Ширина вьюпорта: ${windowInnerWidth}, Высота вьюпорта: ${windowInnerHeight}.`);
});