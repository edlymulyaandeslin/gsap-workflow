import gsap from 'gsap';

const bars = document.querySelectorAll('.bar');

bars.forEach((bar, index) => {
  gsap.fromTo(
    bar,
    {
      scaleY: 0.45,
    },
    {
      scaleY: 1.25,
      duration: 0.8,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: index * 0.2,
    },
  );
});
