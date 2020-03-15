const mapModal = document.querySelector('.modal_map');
const mapLink = document.querySelector('.map_link');
const mapClose = document.querySelector('.map_close');
mapLink.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapModal.classList.add('modal_on');
});
mapClose.addEventListener('click',function(evt){
    evt.preventDefault();
    mapModal.classList.remove('modal_on');
});
