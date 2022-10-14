// ******* apllying smooth scrolling for links *******
const navlinks = document.querySelectorAll('.nav__links_link');
const footerlinks = document.querySelectorAll('.footer__links-contianer_link');
const logoLink = document.querySelector('.footer__logo');
const soomthScrollLinks = [...footerlinks, ...navlinks];
soomthScrollLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    // 1)getting the id value for the targeted section
    const target = e.target.getAttribute('href').slice(1);
    // 2) selecting targeted seciton
    const section = document.getElementById(target);
    console.log(target, section);
    //2) apply smooth scolling
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
logoLink.addEventListener('click', function () {
  const heroSection = document.getElementById('home');
  heroSection.scrollIntoView({ behavior: 'smooth' });
});
//===================================================
// *******aplaying soomth section reveal while scrolling *******
const allSections = document.querySelectorAll('.smooth-reveal');
// "hid-section" class to preper section for reveling

// 1) first hidding the selected sections
allSections.forEach((section) => section.classList.add('hid-section'));
// allFeatures.forEach((feature) => feature.classList.add('hid-features-info'));
// 2) reveal sections
const obsCallbackRevealSection = function (entries, observer) {
  entries.forEach((entry) => {
    //checking if sections is intersecting
    if (!entry.isIntersecting) return;

    //reveal section "from bottom"
    entry.target.classList.remove('hid-section');

    //  thats it.. finish obsorving
    observer.unobserve(entry.target);
  });
};

const obsOptions = {
  root: null,
  threshold: 0.15,
};

const observer = new IntersectionObserver(obsCallbackRevealSection, obsOptions);
allSections.forEach((section) => observer.observe(section));

//===================================================
// // *******action for btns *******
// const btns = document.querySelectorAll('.btn');
// const links = document.querySelectorAll('[href="#"]');
// const messageExitBtn = document.querySelector('.message-btn');
// const messageContainer = document.querySelector('.message-container');
// const targetedBtns = [...btns, ...links];

// targetedBtns.forEach((btn) =>
//   btn.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('click');
//     messageContainer.classList.add('open');
//     setTimeout(() => {
//       if (messageContainer.classList.contains('open'))
//         messageContainer.classList.remove('open');
//     }, 5000);
//   })
// );

// messageExitBtn.addEventListener('click', function () {
//   messageContainer.classList.remove('open');
// });

//===================================================
// *******getting copyrights year for footer *******
const copyRightsYear = document.querySelector('.copyrights-year');
const date = new Date();
const year = String(date.getFullYear());

copyRightsYear.textContent = year;
