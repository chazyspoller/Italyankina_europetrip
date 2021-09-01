const askForm = document.querySelector('.ask__form');
const askFormInputBox = document.querySelectorAll('.ask__input-box');
const askFormInputMail = askForm.querySelector('input[type="email"]');
const askFormInputPhone = askForm.querySelector('input[type="tel"]');
const askSubmitBtn = document.querySelector('.ask__button');
const askFormMessage = document.querySelector('.ask__send');
const askClose = document.querySelector('.ask__close');

const onInvalidEmail = () => {
  askFormInputBox[1].classList.add('input-box--wrong');
};

const onInvalidPhone = () => {
  askFormInputBox[0].classList.add('input-box--wrong');
};

const removeMessageError = () => {
  askFormInputBox.forEach(el => el.classList.remove('input-box--wrong'));
};

const onSubmit = (evt) => {
  evt.preventDefault();
  askFormMessage.classList.add('ask__send--show');
};

const onAskCloseClick = (evt) => {
  evt.preventDefault();
  askFormMessage.classList.remove('ask__send--show');
};

const onEscDownAsk = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    if (askFormMessage.classList.contains('ask__send--show')) {
      evt.preventDefault();
      askFormMessage.classList.remove('ask__send--show');
    }
  }
};

const onDocumentClickAsk = (evt) => {
  if (askFormMessage.classList.contains('ask__send--show') && !askForm.contains(evt.target)) {
    askFormMessage.classList.remove('ask__send--show');
  }
};

askFormInputMail.addEventListener('invalid', onInvalidEmail);
askFormInputPhone.addEventListener('invalid', onInvalidPhone);
askSubmitBtn.addEventListener('click', removeMessageError);
askForm.addEventListener('submit', onSubmit);
askClose.addEventListener('click', onAskCloseClick);
document.addEventListener('keydown', onEscDownAsk);
document.addEventListener('click', onDocumentClickAsk);
