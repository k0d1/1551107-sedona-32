const button = document.querySelector('.button-search');
const modal = document.querySelector('.modal');

function handlerButtonClick(evt) {
   evt.preventDefault();
   modal.classList.add('modal-open');
}

button.addEventListener('click', handlerButtonClick)