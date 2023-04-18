gsap.registerPlugin(ScrollTrigger);


let scrollBlocks = gsap.to(".block-scroll", {
  xPercent: -101.5 * 5 +0.33,
  // xPercent: -45 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    // trigger: ".container",
    trigger: ".section-c",
    // pin: true,
    pin: ".pin-g",
    scrub: 1,
    snap: {
      snapTo: 1 / 5,
      // snapTo: 1 / (sections.length - 1),
      duration: 0.1,
      // delay: 0.1,
      // ease: "power1.inOut"
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
          // containerAnimation: scrollPics,
          scrub: true,
          start: "left center",
          end: "right center",
          toggleClass: "active",
          // markers:true,    //@@@
        
        id: i
        }
      })
  });