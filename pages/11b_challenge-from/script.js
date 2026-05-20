import gsap from 'gsap';

const card = document.querySelector('#card');

gsap.from('.card-face', {
  y: 100,
  opacity: 0,
  scale: 0.95,
  duration: 0.7,
  ease: 'power2.out',
  delay: 0.2,
  stagger: 0.2,
});

card.addEventListener('mouseenter', () => {
  gsap.to('.card-back', {
    opacity: 1,
    rotationY: 0,
    duration: 0.7,
    ease: 'power2.out',
  });

  gsap.to('.card-front', {
    opacity: 0,
    rotationY: -180,
    duration: 0.7,
    ease: 'power2.out',
  });
});

card.addEventListener('mouseleave', () => {
  gsap.to('.card-back', {
    opacity: 0,
    rotationY: 180,
    duration: 0.7,
    ease: 'power2.out',
  });

  gsap.to('.card-front', {
    opacity: 1,
    rotationY: 0,
    duration: 0.7,
    ease: 'power2.out',
  });
});
