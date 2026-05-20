import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.from('.content-wrapper h1', {
  y: -100,
  opacity: 0,
  duration: 1,
  scale: 0.6,
  ease: 'bounce.out',
})
  .fromTo(
    '.content-wrapper p',
    {
      opacity: 0,
      scale: 0.6,
      y: -200,
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1,
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '.content-wrapper p',
        start: 'top center',
        scrub: true,
      },
    },
  )
  .fromTo(
    '.badge-wrapper .badge',
    {
      y: -100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'back.out',
      scrollTrigger: {
        trigger: '.badge-wrapper .badge',
        start: 'top center',
        end: 'bottom 90%',
        scrub: true,
      },
    },
  )
  .fromTo(
    '.wrapper .card',
    {
      opacity: 0,
      scale: 0.85,
      x: -400,
    },
    {
      opacity: 1,
      scale: 1,
      x: 0,
      rotationY: 360,
      duration: 1,
      ease: 'sine.in',
      stagger: 0.4,
      scrollTrigger: {
        trigger: '.wrapper .card',
        start: 'top center',
        end: 'center 80%',
        scrub: 1.5,
      },
    },
  );
