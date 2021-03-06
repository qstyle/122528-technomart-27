if (document.getElementById('index_page')) {
  indexPage()
}
if (document.getElementById('catalog_page')) {
  catalogPage()
}

function indexPage() {
  const modadlFeedback = document.querySelector('.feedback_window');
  const btnFeedback = document.querySelector('.btn_right_inf')
  const modalClose = document.querySelector('.feedback_btn_close');
  const loginInput = modadlFeedback.querySelector('.input_feedback');
  const form = modadlFeedback.querySelector('.feedback_form');
  const name = modadlFeedback.querySelector('.input_feedback_name');
  const email = modadlFeedback.querySelector('.input_feedback_email');
  const text = modadlFeedback.querySelector('.feedback_mail_text_area');
  const sliderRight = document.querySelector('.slider_right');
  const sliderLeft = document.querySelector('.slider_left');
  const baner1 = document.querySelector('.banner_1');
  const baner2 = document.querySelector('.banner_2');
  const radioLeft = document.querySelector('.slider_nav_but_left');
  const radioRight = document.querySelector('.slider_nav_but_right');
  const radioPointL = document.querySelector('.slider_nav_but_point_left');
  const radioPointR = document.querySelector('.slider_nav_but_point_right');
  const tab1 = document.querySelector('.service_slider_1');
  const tab2 = document.querySelector('.service_slider_2');
  const tab3 = document.querySelector('.service_slider_3');
  const linktab1 = document.querySelector('.slider_nav_link_1');
  const linktab2 = document.querySelector('.slider_nav_link_2');
  const linktab3 = document.querySelector('.slider_nav_link_3');
  const mapModal = document.querySelector('.modal_map');
  const mapLink = document.querySelector('.map_link');
  const mapClose = document.querySelector('.map_close');
  btnFeedback.addEventListener('click', function (evt) {
    evt.preventDefault();
    modadlFeedback.classList.add('modal_on');
    loginInput.focus()
  });
  modalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modadlFeedback.classList.remove('modal_on')
  });
  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (modadlFeedback.classList.contains('modal_on')) {
        evt.preventDefault();
        modadlFeedback.classList.remove('modal_on')
      }
    }
  });
  sliderRight.addEventListener('click', function (evt) {
    evt.preventDefault;
    baner1.classList.toggle('modal_on')
  });
  sliderRight.addEventListener('click', function (evt) {
    evt.preventDefault();
    baner2.classList.toggle('modal_on');
    if (baner1.classList.contains('modal_on')) {
      radioPointL.classList.add('modal_on')
    } else {
      radioPointL.classList.remove('modal_on')
    }
    if (baner2.classList.contains('modal_on')) {
      radioPointR.classList.add('modal_on')
    } else {
      radioPointR.classList.remove('modal_on')
    }
  });
  sliderLeft.addEventListener('click', function (evt) {
    evt.preventDefault();
    baner1.classList.toggle('modal_on')
  });
  sliderLeft.addEventListener('click', function (evt) {
    evt.preventDefault();
    baner2.classList.toggle('modal_on');
    if (baner1.classList.contains('modal_on')) {
      radioPointL.classList.add('modal_on')
    } else {
      radioPointL.classList.remove('modal_on')
    }
    if (baner2.classList.contains('modal_on')) {
      radioPointR.classList.add('modal_on')
    } else {
      radioPointR.classList.remove('modal_on')
    }
  });
  radioLeft.addEventListener('click', function (evt) {
    evt.preventDefault();
    baner1.classList.add('modal_on');
    baner2.classList.remove('modal_on');
    if (baner1.classList.contains('modal_on')) {
      radioPointL.classList.add('modal_on')
    } else {
      radioPointL.classList.remove('modal_on')
    }
    if (baner2.classList.contains('modal_on')) {
      radioPointR.classList.add('modal_on')
    } else {
      radioPointR.classList.remove('modal_on')
    }
  });
  radioRight.addEventListener('click', function (evt) {
    evt.preventDefault();
    baner2.classList.add('modal_on');
    baner1.classList.remove('modal_on');
    if (baner1.classList.contains('modal_on')) {
      radioPointL.classList.add('modal_on')
    } else {
      radioPointL.classList.remove('modal_on')
    }
    if (baner2.classList.contains('modal_on')) {
      radioPointR.classList.add('modal_on')
    } else {
      radioPointR.classList.remove('modal_on')
    }
  });
  linktab1.addEventListener('click', function (evt) {
    evt.preventDefault();
    tab1.classList.add('modal_on');
    tab2.classList.remove('modal_on');
    tab3.classList.remove('modal_on');
    linktab1.classList.add('slider_nav_1_active');
    linktab2.classList.remove('slider_nav_1_active');
    linktab3.classList.remove('slider_nav_1_active')
  });
  linktab2.addEventListener('click', function (evt) {
    evt.preventDefault();
    tab1.classList.remove('modal_on');
    tab2.classList.add('modal_on');
    tab3.classList.remove('modal_on');
    linktab1.classList.remove('slider_nav_1_active');
    linktab2.classList.add('slider_nav_1_active');
    linktab3.classList.remove('slider_nav_1_active')
  });
  linktab3.addEventListener('click', function (evt) {
    evt.preventDefault();
    tab1.classList.remove('modal_on');
    tab2.classList.remove('modal_on');
    tab3.classList.add('modal_on');
    linktab1.classList.remove('slider_nav_1_active');
    linktab2.classList.remove('slider_nav_1_active');
    linktab3.classList.add('slider_nav_1_active')
  });
  mapLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapModal.classList.add('modal_on')
  });
  mapClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapModal.classList.remove('modal_on')
  })

}

function catalogPage() {
  const buyWindow = document.querySelector('.buy_winodw');
  const modalClose = document.querySelector('.feedback_btn_close');
  const filterLink1 = document.querySelector('.filter_link_1');
  const filterLink2 = document.querySelector('.filter_link_2');
  const filterLink3 = document.querySelector('.filter_link_3');
  const filterLink4 = document.querySelector('.filter_link_4');
  const filterLink5 = document.querySelector('.filter_link_5');
  modalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    buyWindow.classList.remove('modal_on')
  });
  let byLinks = document.querySelectorAll('.bosch_card_btn_buy');
  console.log(byLinks.length);
  for (let index = 0; index < byLinks.length - 1; index++) {
    byLinks[index].addEventListener('click', function (evt) {
      evt.preventDefault();
      buyWindow.classList.add('modal_on')
    })
  }
  filterLink1.addEventListener('click', function (evt) {
    evt.preventDefault();
    filterLink1.classList.toggle('filter_active');
    filterLink2.classList.remove('filter_active');
    filterLink3.classList.remove('filter_active');
    filterLink4.classList.remove('filter_active');
    filterLink5.classList.remove('filter_active')
  });
  filterLink2.addEventListener('click', function (evt) {
    evt.preventDefault();
    filterLink1.classList.remove('filter_active');
    filterLink2.classList.toggle('filter_active');
    filterLink3.classList.remove('filter_active');
    filterLink4.classList.remove('filter_active');
    filterLink5.classList.remove('filter_active')
  });
  filterLink3.addEventListener('click', function (evt) {
    evt.preventDefault();
    filterLink1.classList.remove('filter_active');
    filterLink2.classList.remove('filter_active');
    filterLink3.classList.toggle('filter_active');
    filterLink4.classList.remove('filter_active');
    filterLink5.classList.remove('filter_active')
  });
  filterLink4.addEventListener('click', function (evt) {
    evt.preventDefault();
    filterLink1.classList.remove('filter_active');
    filterLink2.classList.remove('filter_active');
    filterLink3.classList.remove('filter_active');
    filterLink4.classList.toggle('filter_active');
    filterLink5.classList.remove('filter_active')
  });
  filterLink5.addEventListener('click', function (evt) {
    evt.preventDefault();
    filterLink1.classList.remove('filter_active');
    filterLink2.classList.remove('filter_active');
    filterLink3.classList.remove('filter_active');
    filterLink4.classList.remove('filter_active');
    filterLink5.classList.toggle('filter_active')
  })

}
