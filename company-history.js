


gsap.registerPlugin(ScrollTrigger);


let scrollTween = gsap.to(".his-scroll-pics", {
    xPercent: -85,
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".his-block",
      pin: ".his-block",
      scrub: 1,
      //snap: directionalSnap(1 / (sections.length - 1)),
    //   start: "10% top",
    //   end: "+=300",
    start: "bottom bottom",
    end: "bottom center",
    //   markers:true    //@@@
    }
  });