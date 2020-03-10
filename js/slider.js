const sliderRight = document.querySelector('.slider_right');
const sliderLeft = document.querySelector('.slider_left');
const baner1 = document.querySelector('.banner_1');
const baner2 = document.querySelector('.banner_2');
const radioLeft = document.querySelector('.slider_nav_but_left')
const radioRight = document.querySelector('.slider_nav_but_right')
const radioPointL = document.querySelector('.slider_nav_but_point_left')
const radioPointR = document.querySelector('.slider_nav_but_point_right')
sliderRight.addEventListener('click', function (evt) {
  evt.preventDefault;
  baner1.classList.toggle('modal_on');
});
sliderRight.addEventListener('click', function (evt) {
  evt.preventDefault();
  baner2.classList.toggle('modal_on');
  if (baner1.classList.contains('modal_on')) {
    radioPointL.classList.add('modal_on');
  } else {
    radioPointL.classList.remove('modal_on');
  }
  if (baner2.classList.contains('modal_on')) {
    radioPointR.classList.add('modal_on');
  } else {
    radioPointR.classList.remove('modal_on');
  }
});
sliderLeft.addEventListener('click', function (evt) {
  evt.preventDefault();
  baner1.classList.toggle('modal_on');
});
sliderLeft.addEventListener('click', function (evt) {
  evt.preventDefault();
  baner2.classList.toggle('modal_on');
  if (baner1.classList.contains('modal_on')) {
    radioPointL.classList.add('modal_on');
  } else {
    radioPointL.classList.remove('modal_on');
  }
  if (baner2.classList.contains('modal_on')) {
    radioPointR.classList.add('modal_on');
  } else {
    radioPointR.classList.remove('modal_on');
  }
});
radioLeft.addEventListener('click', function (evt) {
  evt.preventDefault();
  baner1.classList.add('modal_on');
  baner2.classList.remove('modal_on');
  if (baner1.classList.contains('modal_on')) {
    radioPointL.classList.add('modal_on');
  } else {
    radioPointL.classList.remove('modal_on');
  }
  if (baner2.classList.contains('modal_on')) {
    radioPointR.classList.add('modal_on');
  } else {
    radioPointR.classList.remove('modal_on');
  }
});
radioRight.addEventListener('click', function (evt) {
  evt.preventDefault();
  baner2.classList.add('modal_on');
  baner1.classList.remove('modal_on');
  if (baner1.classList.contains('modal_on')) {
    radioPointL.classList.add('modal_on');
  } else {
    radioPointL.classList.remove('modal_on');
  }
  if (baner2.classList.contains('modal_on')) {
    radioPointR.classList.add('modal_on');
  } else {
    radioPointR.classList.remove('modal_on');
  }
});
