const modadlFeedback = document.querySelector('.feedback_window');
const btnFeedback = document.querySelector('.btn_right_inf')
const modalClose = document.querySelector('.feedback_btn_close');
const loginInput = modadlFeedback.querySelector('.input_feedback');
const form = modadlFeedback.querySelector('.feedback_form');
const name = modadlFeedback.querySelector('.input_feedback_name');
const email = modadlFeedback.querySelector('.input_feedback_email');
const text = modadlFeedback.querySelector('.feedback_mail_text_area');
btnFeedback.addEventListener('click', function (evt) {
  evt.preventDefault();
  modadlFeedback.classList.add('modal_on');
  loginInput.focus();
});
modalClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modadlFeedback.classList.remove('modal_on');
});
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modadlFeedback.classList.contains('modal_on')) {
      evt.preventDefault();
      modadlFeedback.classList.remove('modal_on');
    }
  }
});
form.addEventListener('submit', function(evt){
  if (!name.value || !email.value || !text.value){
    evt.preventDefault();
  }
  

});

