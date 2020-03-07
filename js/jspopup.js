const modadlFeedback = document.querySelector('.feedback_window');
const btnFeedback = document.querySelector('.btn_right_inf')
const modalClose = document.querySelector('.feedback_btn_close');
btnFeedback.addEventListener('click', function(evt) {
  evt.preventDefault();
  modadlFeedback.classList.add('modal_on');
});
modalClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modadlFeedback.classList.remove('modal_on');
});
