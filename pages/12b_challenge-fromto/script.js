import gsap from 'gsap';

const reactions = document.querySelectorAll('button[data-emoji]');

reactions.forEach((btnReaction, index) => {
  btnReaction.addEventListener('click', () => {
    gsap.fromTo(
      btnReaction,
      {
        y: 0,
        scale: 0.6,
      },
      {
        y: -80,
        scale: 1.8,
        duration: 0.2,
        ease: 'power4.in',
      },
    );
  });
});
