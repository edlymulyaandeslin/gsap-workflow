import gsap from 'gsap';

gsap.set('.gsap-box', {
  y: -500,
  x: 500,
  scale: 0.5,
  opacity: 0,
});

gsap.to('.gsap-box', {
  delay: 0.1,
  opacity: 1,
  scale: 1,
  y: 0,
  x: 0,
  ease: 'expo.out',
});
