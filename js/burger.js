var trigger = document.getElementById('hamburger'),
    isClosed = false;

trigger.addEventListener('click', burgerTime, false);

function burgerTime() {
  if (isClosed === true) {
    trigger.classList.remove('is-open');
    trigger.classList.add('is-closed');
    isClosed = false;
  } else {
    trigger.classList.remove('is-closed');
    trigger.classList.add('is-open');
    isClosed = true;
  }
}