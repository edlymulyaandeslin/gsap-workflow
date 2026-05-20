import gsap from 'gsap';

const cards = document.querySelectorAll('.card');

const tl = gsap.timeline({ paused: true });

cards.forEach((card, index) => {
  card.addEventListener('mouseenter', () => {
    tl.play();
    tl.to(card, {
      scale: 1.1,
      duration: 0.1,
    }).to(card, {
      delay: 0.1,
      rotationY: 180,
      duration: 0.1,
    });
  });

  card.addEventListener('mouseleave', () => {
    tl.to(card, {
      scale: 1,
      duration: 0.1,
    }).to(card, {
      delay: 0.1,
      rotationY: 0,
      duration: 0.1,
    });
  });
});
