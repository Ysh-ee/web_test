gsap.registerPlugin(ScrollTrigger);


let scrollBlocks = gsap.to(".block-scroll", {
  xPercent: -81.3 * 5 +0.33,
  ease: "none",
  scrollTrigger: {
    trigger: ".section-c",
    pin: ".pin-g",
    scrub: 1,
    snap: {
      snapTo: 1 / 4,
      duration: 0.1,
    },
    end: "+=2000",
    start: "100% 40%",
		paused: true,
      // markers:true    //@@@
  }
});

const pics = gsap.utils.toArray(".hori-scroll .block img");

pics.forEach((pic, i) =>{
    gsap.to(pic, { 
        scrollTrigger: {
          trigger: pic,
          containerAnimation: scrollBlocks,
          scrub: true,
          start: "left center",
          end: "right center",
          toggleClass: "active",
          // markers:true,    //@@@
        id: i
        }
      })
  });