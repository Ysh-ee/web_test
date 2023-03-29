gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".block");
// console.log(sections.length, "-")
let scrollPics = gsap.to(sections, {
  xPercent: -101.5 * 4 +0.33,
  // xPercent: -45 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    // trigger: ".container",
    trigger: ".section-c",
    // pin: true,
    pin: ".pin-g",
    scrub: 1,
    snap: {
      snapTo: 1 / 4,
      // snapTo: 1 / (sections.length - 1),
      duration: 0.1,
      // delay: 0.1,
      // ease: "power1.inOut"
    },
    // base vertical scrolling on how wide the container is so it feels more natural.
      start: "100% 40%",
    end: "+=700",
      // markers:true    //@@@
  }
});

const pics = gsap.utils.toArray('.section-scroll .hori-scroll .block img');
// console.log(pics.length,"-")

pics.forEach((pics, i) =>{
    gsap.to(pics, { 
        scrollTrigger: {
          trigger: pics,
          containerAnimation: scrollPics,
          scrub: true,
          toggleClass: "active",
          start: "left center",
          end: "center center",
          // markers:true,    //@@@
        
        // id: i
        }
      })
  });





// let scrollTween = gsap.to(".section-scroll", {
//     xPercent: -166,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".section-c",
//       pin: ".pin-g",
//       scrub: 0.5,
//       // snap: directionalSnap(1 / (sections.length - 1)),
//       start: "100% 40%",
//       end: "+=600",
//       // markers:true    //@@@

//     }
//   });

  