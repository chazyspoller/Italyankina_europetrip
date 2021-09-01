const tourTabs = Array.from(document.querySelectorAll('.countries-list__link'));
const tourCards = Array.from(document.querySelectorAll('.description-trip'));
const tourMoreBtn = Array.from(document.querySelectorAll('.countries-cards__link'));

const removeClasses = () => {
  tourTabs.forEach(el => {
    if (el.classList.contains('countries-list__link--active')) {
      el.classList.remove('countries-list__link--active');
    }
  });

  tourCards.forEach(el => {
    if (el.classList.contains('description-trip--show')) {
      el.classList.remove('description-trip--show');
    }
  });
};

const onTabClick = (evt) => {
  evt.preventDefault();
  tourCards.forEach(el => {
    if (el.dataset.name === evt.target.dataset.name) {
      removeClasses();
      el.classList.add('description-trip--show');
      evt.target.classList.add('countries-list__link--active');
    }
  });
};

const onBtnMoreClick = (evt) => {
  evt.preventDefault();
  tourCards.forEach(el => {
    if (el.dataset.name === evt.target.dataset.name) {
      removeClasses();
      el.classList.add('description-trip--show');
      el.scrollIntoView();
      tourTabs.forEach(elem => {
        if (evt.target.dataset.name == elem.dataset.name) {
          elem.classList.add('countries-list__link--active');
        }
      });
    }
  });
};

tourTabs.forEach(el => el.addEventListener('click', onTabClick));
tourMoreBtn.forEach(el => el.addEventListener('click', onBtnMoreClick));
