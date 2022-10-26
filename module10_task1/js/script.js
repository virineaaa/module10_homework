const btn = document.querySelector('.j-btn-switcher');

const iconOn = document.querySelector('.svg__on');
const iconOff = document.querySelector('.svg__off');

//
btn.addEventListener('click', () => {

  //Смена (отключение) свойства svg__off у iconOff 
  iconOff.classList.toggle('svg__off');

  //Смена (включение) свойства svg__off у iconOn
  iconOn.classList.toggle('svg__off');

})