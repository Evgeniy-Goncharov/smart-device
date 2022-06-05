function initAccordion() {
  const accordionButtons = document.querySelectorAll('[data-accordion=accordion-button]');

  function showActiveAccordion(target, buttons) {
    for (let button of buttons) {
      const content = button.nextElementSibling;
      const accordionItem = button.parentElement;

      if (button === target) {
        accordionItem.classList.toggle('is-open');
        if (accordionItem.classList.contains('is-open')) {
          content.style.height = content.scrollHeight + 'px';
        } else {
          content.style.height = '0';
        }
      } else {
        accordionItem.classList.remove('is-open');
        content.style.height = '0';
      }
    }
  }

  if (accordionButtons) {
    for (let button of accordionButtons) {
      button.addEventListener('click', (evt) => showActiveAccordion(evt.target, accordionButtons));
      button.nextElementSibling.style.cssText = `
      height: 0;
      transition: 0.2s ease-out;
    `;
    }
  }
}

export {initAccordion};
