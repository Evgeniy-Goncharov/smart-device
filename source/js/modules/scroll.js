const links = document.querySelectorAll('a[href^="#"]');

const initScroll = () => {
  if (links) {
    for (let link of links) {
      const id = link.getAttribute('href');

      if (id.length > 1) {
        const target = document.querySelector(id);

        if (target) {
          link.addEventListener('click', (evt) => {
            evt.preventDefault();
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          });
        }
      }
    }
  }
};

export {initScroll};
