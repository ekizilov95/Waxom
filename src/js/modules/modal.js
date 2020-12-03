const content = document.querySelector('.modal__content');

function openModal(modalSelector) {
  const modal = document.querySelector(modalSelector);

  modal.classList.remove('hide');
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.querySelector('.header').style.paddingRight = '';
  document.body.style.cssText = `
    overflow: visible;
    padding-right: 0;
  `;
}

function modal(modalSelector) {

  const modal = document.querySelector(modalSelector),
    modalImg = document.querySelector('.modal__img'),
    images = document.querySelectorAll('.grid-portfolio__image'),
    lockPaddingValue = window.innerWidth - (document.querySelector('.site-container').offsetWidth) + "px";

  images.forEach(img => {
    img.addEventListener('click', (e) => {
      let target = e.target;
      if(target.getAttribute('id') === 'lupa') {
        openModal(modalSelector);
        document.body.style.paddingRight = lockPaddingValue;
        document.querySelector('.header').style.paddingRight = lockPaddingValue;
        let src = target.getAttribute('data-src');
        modalImg.src = src;
      }
     
    });
  });

  modal.addEventListener('click', (e) => {
    let target = e.target;
    if (target.hasAttribute("data-close") || !target.closest('.modal__content')) {
      closeModal(modalSelector);
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape") {
      closeModal(modalSelector);
    }
  });

  

}

modal('.modal');
