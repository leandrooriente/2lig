var trigger = document.getElementById('hamburger'),
    nav = document.getElementById('navigation'),
    isClosed = false;

trigger.addEventListener('click', burgerTime, false);
nav.addEventListener('click', burgerTime, false);

function burgerTime() {
  if (isClosed === true) {
    trigger.classList.remove('is-open');
    trigger.classList.add('is-closed');
    nav.classList.remove('opened');
    isClosed = false;
  } else {
    trigger.classList.remove('is-closed');
    trigger.classList.add('is-open');
    nav.classList.add('opened');
    isClosed = true;
  }
}