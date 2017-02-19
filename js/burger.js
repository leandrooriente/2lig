var trigger = document.getElementById('menu'),
    nav = document.getElementById('navigation'),
    isClosed = false;

trigger.addEventListener('click', burgerTime, false);
nav.addEventListener('click', burgerTime, false);

function burgerTime() {
  if (isClosed === true) {
    trigger.classList.remove('is-active');
    nav.classList.remove('opened');
    isClosed = false;
  } else {
    trigger.classList.add('is-active');
    nav.classList.add('opened');
    isClosed = true;
  }
}