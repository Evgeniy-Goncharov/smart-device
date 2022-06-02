function initForm() {
  const phoneInput = document.querySelector('[data-js=input-phone');

  phoneInput.addEventListener('focus', (evt) => {
    evt.target.value = '+7(';
  });

  phoneInput.addEventListener('input', (evt) =>{
    if (evt.target.value.length === 6) {
      phoneInput.value += ')';
    }
  });

  document.addEventListener('keydown', (evt) => {
    const pattern = /^[ 0-9]+$/;
    if ((phoneInput.value.length === 3) && (evt.key === 'Backspace')) {
      evt.preventDefault();
    }

    if ((evt.target.value.length === 7) && (evt.key === 'Backspace')) {
      evt.target.value = phoneInput.value.substr(0, 5);
    }

    if (!pattern.test(evt.key)) {
      evt.preventDefault();
    }
  });
}

export {initForm};
