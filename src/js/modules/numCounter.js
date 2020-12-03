let isDone = false;

function counter(num, element) {

  const time = 3000;
  const step = 3;

  const output = document.querySelector(element);
  let n = 0;

  let t = Math.round((time * step) / num);

  let interval = setInterval(() => {

    n += step;
    if (n === num || n > num) {
      n = num;
      isDone = true;
      clearInterval(interval);
    }
    output.textContent = n;

  }, t);

}
window.addEventListener('scroll', function scrollTo() {
  const block = document.querySelector('.presentation-counter');
  if (block.offsetTop <= window.pageYOffset + (window.innerHeight - block.offsetHeight / 2)) {
    if (!isDone) {
      counter(3587, "#clients");
      counter(207, "#cups");
      counter(2500, "#posts");
      counter(873, "#likes");
      counter(900, "#launched");
    }

  }
});
