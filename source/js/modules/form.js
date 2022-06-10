const min = 14;
const mask = /^[0-9]/;

function initForm(form) {
  const phoneInput = form.querySelector('[data-js=input-phone');

  function handleKeyDown(evt) {
    if (!mask.test(evt.key) && evt.key !== 'Backspace' && evt.key !== 'Tab') {
      evt.preventDefault();
    }

    if (phoneInput.value.length === 3 && evt.key === 'Backspace') {
      evt.preventDefault();
    }

    if (phoneInput.value.length === 7 && evt.key === 'Backspace') {
      phoneInput.value = phoneInput.value.substr(0, 6);
    }
  }

  function handleFormSubmit(evt) {
    if (phoneInput.value.length < min) {
      evt.preventDefault();
      phoneInput.setCustomValidity('Заполните поле');
      phoneInput.reportValidity();
    }
  }

  phoneInput.addEventListener('focus', () => {
    if (!phoneInput.value) {
      phoneInput.value = '+7(';
    }

    phoneInput.addEventListener('keydown', handleKeyDown);
  });

  phoneInput.addEventListener('input', () =>{
    if (phoneInput.value.length === 6) {
      phoneInput.value += ')';
    }

    if (phoneInput.value.length < min) {
      phoneInput.setCustomValidity(`Ещё ${ min - phoneInput.value.length } симв.`);
    } else {
      phoneInput.setCustomValidity('');
    }

    phoneInput.reportValidity();
  });

  phoneInput.addEventListener('blur', () => phoneInput.removeEventListener('keydown', handleKeyDown));

  form.addEventListener('submit', handleFormSubmit);
}

function initForms() {
  const forms = document.querySelectorAll('[data-form');

  if (forms) {
    for (let form of forms) {
      initForm(form);
    }
  }

  // form.addEventListener('submit', (evt) => evt.preventDefault());
}

export {initForms};
