function initAbout(isMobile) {
  const aboutWrapper = document.querySelector('[data-js=about-wrapper]');
  const content = aboutWrapper.querySelector('[data-js=about-content]');
  const button = document.querySelector('[data-js=about-button]');
  const contentHeight = content.offsetHeight;
  let isOpen = false;
  let defaultHeight = 210;

  if (!isMobile) {
    const defaultElements = content.querySelectorAll('[data-js=about-default-content]');
    defaultHeight = 0;

    if (defaultElements) {
      defaultElements.forEach((element) => {
        defaultHeight += element.scrollHeight;
      });
    }
  }

  function showContent() {
    aboutWrapper.style.height = `${contentHeight}px`;
    isOpen = true;
    button.textContent = 'Скрыть';
  }

  function hiddenContent() {
    aboutWrapper.style.height = `${defaultHeight}px`;
    isOpen = false;
    button.textContent = 'Показать';
  }

  function handleButtonClick() {
    if (isOpen) {
      hiddenContent();
    } else {
      showContent();
    }
  }

  if (aboutWrapper && content && button) {
    aboutWrapper.style.cssText = `
      height: ${defaultHeight}px;
      transition: height 0.2s ease-out;
    `;

    button.addEventListener('click', handleButtonClick);
  }
}

export {initAbout};
