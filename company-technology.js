gsap.registerPlugin(ScrollTrigger);

let scrollTween = gsap.to(".hori-scroll", {
  xPercent: -1830,
  ease: "none",  
  scrollTrigger: {
    trigger: ".tec-block",
    pin: ".tec-block",
    scrub: 0.5,
    end: "+=4000",
  start: "bottom bottom",
    // markers:true    //@@@
  }
});