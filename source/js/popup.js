const popupClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__form');
const popupInputBox = document.querySelectorAll('.popup__input-box');
const popupInputMail = popupForm.querySelector('input[type = email]');
const popupInputPhone = popupForm.querySelector('input[type = tel]');
const popupMessage = document.querySelector('.popup__send');
const submitBtn = document.querySelector('.popup__button');
const tourButton = Array.from(document.querySelectorAll('.tours-type__button'));
const aboutTourBtn = Array.from(document.querySelectorAll('.about-country__button'));
const overlay = document.querySelector('.page-main__wrapper-overlay');

let isStorageSupport = true;
let storagePhone = '';
let storageMail = '';

try {
  popupInputPhone = localStorage.getItem('phone');
  popupInputMail = localStorage.getItem('mail');
} catch (err) {
  isStorageSupport = false;
}

const onPopupCloseClick = (evt) => {
  evt.preventDefault();
  overlay.classList.remove('page-main__wrapper-overlay--show');
};

const onEscDownPopup = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    if (overlay.classList.contains('page-main__wrapper-overlay--show')) {
      evt.preventDefault();
      overlay.classList.remove('page-main__wrapper-overlay--show');
    }
  }
};

const onDocumentClickPopup = (evt) => {
  if (overlay.classList.contains('page-main__wrapper-overlay--show') && !popup.contains(evt.target) && !evt.target.classList.contains('about-country__button') && !evt.target.classList.contains('tours-type__button')) {
    overlay.classList.remove('page-main__wrapper-overlay--show');
  }
};

const onInvalidEmail = () => {
  popupInputBox[1].classList.add('input-box--wrong');
};

const onInvalidPhone = () => {
  popupInputBox[0].classList.add('input-box--wrong');
};

const onSubmit = (evt) => {
  evt.preventDefault();
  popupMessage.classList.add('popup__send--show');
};

const removeMessageError = () => {
  popupInputBox.forEach(el => el.classList.remove('input-box--wrong'));
};

const focusForm = () => {
  document.addEventListener('focus', function(evt) {
    if (overlay.classList.contains('page-main__wrapper-overlay--show') && !popupForm.contains(evt.target) ) {
      evt.preventDefault();
      popupForm.focus();
    }
  }, true);
}

const onTourClick = (evt) => {
  evt.preventDefault();
  //removeMessageError();
  if (!overlay.classList.contains('page-main__wrapper-overlay--show')) {
    overlay.classList.add('page-main__wrapper-overlay--show');
    popupMessage.classList.remove('popup__send--show');
    focusForm();
    popupInputPhone.focus();
  }

  if (storagePhone) {
    popupInputPhone.value = storagePhone;
  }
  if (storageMail) {
    popupInputMail.value = storageMail;
  }
}

document.addEventListener('keydown', onEscDownPopup);
document.addEventListener('click', onDocumentClickPopup);
popupClose.addEventListener('click', onPopupCloseClick);
tourButton.forEach(el => el.addEventListener('click', onTourClick));
aboutTourBtn.forEach(el => el.addEventListener('click', onTourClick));
popupForm.addEventListener('submit', onSubmit);
submitBtn.addEventListener('click', removeMessageError)
popupInputMail.addEventListener('invalid', onInvalidEmail);
popupInputPhone.addEventListener('invalid', onInvalidPhone);
