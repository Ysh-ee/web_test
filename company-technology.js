gsap.registerPlugin(ScrollTrigger);

let scrollTween = gsap.to(".hori-scroll", {
    xPercent: -130,
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".tec-block",
      pin: ".tec-block",
      scrub: 0.5,
      //snap: directionalSnap(1 / (sections.length - 1)),
    //   start: "10% top",
    //   end: "+=600",
    start: "bottom bottom",
    //   markers:true    //@@@

    }
  });