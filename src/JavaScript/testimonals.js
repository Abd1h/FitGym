// ******* testimonals functionality*******
const btnDots = document.querySelectorAll('.quote__dots_dot');
const quotes = document.querySelectorAll('.single-quote');

// "single-quote--active" class
// "quote__dots_dot--active" class

// currentQUOTE =0 |             0% 100% 200%
// *btnRight clicked*
// currentQUOTE =1 |       -100% 0%  200%
// *btnRight clicked*
// currentQUOTE =2 | -200% -100% 0%
let currentQuote = 0;
const moveToQuote = function () {
  quotes.forEach((quote, i) => {
    //1) reset position for all quotes
    const translateValue = i - currentQuote;
    quote.style.transform = ` translateY(${translateValue * 100}%) `;

    //2) adding/removing active class
    if (translateValue === 0) {
      quote.classList.add('single-quote--active');
    }
    if (!(translateValue === 0)) {
      quote.classList.remove('single-quote--active');
    }
  });
};
moveToQuote(); //to set the initial position for all quotes

const deActivatAllDots = function () {
  btnDots.forEach((dot) => {
    if (!dot.classList.contains('quote__dots_dot--active')) return;
    dot.classList.remove('quote__dots_dot--active');
  });
};

btnDots.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    const selectedDot = +btn.dataset.dot;
    if (currentQuote === selectedDot) return;
    currentQuote = selectedDot;
    //1) move to the selected quote
    moveToQuote();
    //1) active selected Dot
    deActivatAllDots();
    btn.classList.add('quote__dots_dot--active');
  });
});
