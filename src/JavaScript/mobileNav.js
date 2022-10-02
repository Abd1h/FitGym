// ******* nav mobile menu functionality*******
const burgerBtn = document.querySelector('.nav__btn');
const burgerMenu = document.querySelector('.nav__links');
const btnLines = document.querySelectorAll('.line');
const navLinks = document.querySelectorAll('.nav__links_link');

const overlay = document.querySelector('.overlay-blur');

// "hidden" class that hids burgerMenu
// "line-1 ,line-2,line-3" classes that manipulate burgerBtn shape

const toggleBurgerMenu = function () {
  // 1) slide the menu to the view
  burgerMenu.classList.toggle('hidden');
  // 2) change burger btn style (hidden/close)
  btnLines.forEach((line, i) => {
    line.classList.toggle(`line-${i + 1}`);
  });
  // 3)display an overlay for background
  overlay.classList.toggle('hid-blur');
  // 4) prevent scrolling when menu is open
  document.body.classList.toggle('set-overflow');
};

// when user click burger btn
burgerBtn.addEventListener('click', function () {
  toggleBurgerMenu();
});
// when user click on the overlay "clocs"
overlay.addEventListener('click', function () {
  toggleBurgerMenu();
});

// close menu when user click on a link only one mobile

navLinks.forEach((link) =>
  link.addEventListener('click', function () {
    // if its on mobile and window is open
    if (burgerMenu.classList.contains('hidden')) return;
    toggleBurgerMenu();
  })
);
