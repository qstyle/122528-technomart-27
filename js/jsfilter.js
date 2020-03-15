const filterLink1 = document.querySelector('.filter_link_1');
const filterLink2 = document.querySelector('.filter_link_2');
const filterLink3 = document.querySelector('.filter_link_3');
const filterLink4 = document.querySelector('.filter_link_4');
const filterLink5 = document.querySelector('.filter_link_5');
filterLink1.addEventListener('click', function (evt) {
  evt.preventDefault();
  filterLink1.classList.toggle('filter_active');
  filterLink2.classList.remove('filter_active');
  filterLink3.classList.remove('filter_active');
  filterLink4.classList.remove('filter_active');
  filterLink5.classList.remove('filter_active');
});
filterLink2.addEventListener('click', function (evt) {
  evt.preventDefault();
  filterLink1.classList.remove('filter_active');
  filterLink2.classList.toggle('filter_active');
  filterLink3.classList.remove('filter_active');
  filterLink4.classList.remove('filter_active');
  filterLink5.classList.remove('filter_active');
});
filterLink3.addEventListener('click', function (evt) {
  evt.preventDefault();
  filterLink1.classList.remove('filter_active');
  filterLink2.classList.remove('filter_active');
  filterLink3.classList.toggle('filter_active');
  filterLink4.classList.remove('filter_active');
  filterLink5.classList.remove('filter_active');
});
filterLink4.addEventListener('click', function (evt) {
  evt.preventDefault();
  filterLink1.classList.remove('filter_active');
  filterLink2.classList.remove('filter_active');
  filterLink3.classList.remove('filter_active');
  filterLink4.classList.toggle('filter_active');
  filterLink5.classList.remove('filter_active');
});
filterLink5.addEventListener('click', function (evt) {
  evt.preventDefault();
  filterLink1.classList.remove('filter_active');
  filterLink2.classList.remove('filter_active');
  filterLink3.classList.remove('filter_active');
  filterLink4.classList.remove('filter_active');
  filterLink5.classList.toggle('filter_active');
});
