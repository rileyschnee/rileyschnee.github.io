const menu = document.querySelector('.menu');

menu?.addEventListener('click', () => {
  const isCollapsed = menu.getAttribute('aria-expanded') !== 'true';
  const ball = document.getElementById("crystal-ball");

  menu.setAttribute('aria-expanded', `${isCollapsed}`);
  if (isCollapsed) {
    ball.disabled = true;
  } else {
    ball.disabled = false;
  }

});
