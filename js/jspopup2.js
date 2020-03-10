const buyWindow = document.querySelector('.buy_winodw');
const modalClose = document.querySelector('.feedback_btn_close');

modalClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  buyWindow.classList.remove('modal_on');
});

let byLinks = document.querySelectorAll('.bosch_card_btn_buy');
console.log(byLinks.length);
for (let index = 0; index < byLinks.length - 1; index++) {
  byLinks[index].addEventListener('click', function (evt) {
    evt.preventDefault();
    buyWindow.classList.add('modal_on');
  });
}
