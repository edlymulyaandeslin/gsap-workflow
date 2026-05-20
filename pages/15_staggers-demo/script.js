import gsap from 'gsap';

gsap.to('.card', {
  y: 20,
  duration: 1,
  ease: 'sine.inOut',
  repeat: -1,
  yoyo: true,
  stagger: 0.05,
});
