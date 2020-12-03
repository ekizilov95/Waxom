
const buttons = document.querySelectorAll('.menu__link');

buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const blockId = btn.getAttribute('href');
    if(blockId === '#portfolio') {
      document.querySelector(`${blockId}`).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      document.querySelector(`${blockId}`).scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    
  });
});
