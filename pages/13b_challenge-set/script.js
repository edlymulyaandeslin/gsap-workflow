import gsap from 'gsap';

gsap.set('.gsap-box', {
  width: '500px',
  height: '500px',
  background: '#53CBF3',
  borderRadius: '10px',
  opacity: 0,
  scale: 0.4,
  y: -100,
});

gsap.to('.gsap-box', {
  delay: 0.8,
  opacity: 1,
  scale: 1,
  y: 0,
  borderRadius: '50%',
  ease: 'sine.in',
});
