const burger = $('.burger');
const nav = $('.nav-links');
const navLinks = $('.nav-links>li');
const overlay = $('.overlay');
const body = $('body');

const logo = document.querySelector('#logo');

body.on('click', (burger, overlay), () => {
  //Toggle Nav
  nav.toggleClass('nav-active');

  //Toggle Overlay
  overlay.toggleClass('hidden');

  //Animate Links

  navLinks.each((index, link) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 12 + 0.4
      }s`;
    }

    //Animate Burger
  });
  burger.toggleClass('toggle');
});

// Sticky Nav Transition
const headerObserverOptions = {
  rootMargin: '0px 0px 0px 0px',
};

const headerObserver = new IntersectionObserver(function (
  entries,
  headerObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.addClass('nav-scrolled');
    } else {
      nav.removeClass('nav-scrolled');
    }
  });
},
headerObserverOptions);

headerObserver.observe(logo);

let parent = document.querySelector('.nav-links').parentElement;

while (parent) {
  const hasOverflow = getComputedStyle(parent).overflow;
  if (hasOverflow !== 'visible') {
    console.log(hasOverflow, parent);
  }
  parent = parent.parentElement;
}
