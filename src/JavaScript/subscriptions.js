const subBtns = document.querySelectorAll('.sub__btns_btn');
//sub__btns_btn--active  class for active btns
// every btn has "data-price"

const subPriceNum = document.querySelector('.sub__price_num');

const updatePrice = function () {
  let price = 0;
  subBtns.forEach((btn) => {
    const selectedBtn = btn.classList.contains('sub__btns_btn--active');
    if (!selectedBtn) return;
    price += +btn.dataset.price;
  });
  subPriceNum.textContent = `${price}$`;
};

subBtns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    // skip the basic btn
    if (btn.classList.contains('basic')) return;
    e.target.classList.toggle('sub__btns_btn--active');
    updatePrice();
  });
});
