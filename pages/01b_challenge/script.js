gsap.to('.card', {
  scale: 1,
  duration: 3,
  onComplete: () => {
    gsap.to('.card', {
      opacity: 0,
      rotate: 360,
      x: 500,
      yoyo: true,
      repeat: -1,
      duration: 2,
    });
  },
});
