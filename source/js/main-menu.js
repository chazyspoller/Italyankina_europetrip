const mainMenu = document.querySelector('.menu');
const menuToggle = document.querySelector('.main-nav__toggle');

const onMenuToggleClick = () => {
  if (mainMenu.classList.contains('menu--opened')) {
    mainMenu.classList.remove('menu--opened');
    menuToggle.classList.remove('main-nav__toggle--close');
  } else {
    mainMenu.classList.add('menu--opened');
    menuToggle.classList.add('main-nav__toggle--close');
  }
};

const onEscDownMenu = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    if (mainMenu.classList.contains('menu--opened')) {
      evt.preventDefault();
      onMenuToggleClick();
    }
  }
};

const onDocumentClickMenu = (evt) => {
  if (mainMenu.classList.contains('menu--opened') && !mainMenu.contains(evt.target) && !evt.target.classList.contains('main-nav__toggle')) {
    onMenuToggleClick();
  }
};

mainMenu.classList.remove('menu--nojs');

document.addEventListener('keydown', onEscDownMenu);
document.addEventListener('click', onDocumentClickMenu);
menuToggle.addEventListener('click', onMenuToggleClick);
