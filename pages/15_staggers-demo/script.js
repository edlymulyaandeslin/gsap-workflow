import gsap from 'gsap';

gsap.to('.card', {
  y: -20,
  duration: 1,
  ease: 'power1.inOut',
  repeat: -1,
  yoyo: true,
  stagger: 0.05,
});
