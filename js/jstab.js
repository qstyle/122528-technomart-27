const tab1 = document.querySelector('.service_slider_1');
const tab2 = document.querySelector('.service_slider_2');
const tab3 = document.querySelector('.service_slider_3');
const linktab1 = document.querySelector('.slider_nav_link_1');
const linktab2 = document.querySelector('.slider_nav_link_2');
const linktab3 = document.querySelector('.slider_nav_link_3');
linktab1.addEventListener('click', function (evt) {
  evt.preventDefault();
  tab1.classList.add('modal_on');
  tab2.classList.remove('modal_on');
  tab3.classList.remove('modal_on');
});
linktab2.addEventListener('click', function (evt) {
  evt.preventDefault();
  tab1.classList.remove('modal_on');
  tab2.classList.add('modal_on');
  tab3.classList.remove('modal_on');
});
linktab3.addEventListener('click', function (evt) {
  evt.preventDefault();
  tab1.classList.remove('modal_on');
  tab2.classList.remove('modal_on');
  tab3.classList.add('modal_on');
});
