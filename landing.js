gsap.registerPlugin(ScrollTrigger);

let scrollTween = gsap.to(".section-scroll", {
    xPercent: -100,
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".section-c",
      pin: ".pin-g",
      scrub: 0.5,
      //snap: directionalSnap(1 / (sections.length - 1)),
      start: "100% 40%",
      end: "+=400",
    //   markers:true    //@@@

    }
  });