import gsap from 'gsap';

const showDoubleToast = () => {
  gsap.to('.toast.one', {
    y: -120,
    duration: 0.8,
    scale: 1,
    ease: 'power4.out',
    onComplete: () => {
      gsap.to('.toast.one', {
        y: 0,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: 'power2.in',
        onComplete: () => {
          gsap.to('.toast.two', {
            y: -120,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power4.out',
            onComplete: () => {
              gsap.to('.toast.two', {
                y: 0,
                opacity: 0,
                scale: 0.95,
                duration: 0.7,
                ease: 'power2.in',
              });
            },
          });
        },
      });
    },
  });
};

showDoubleToast();
