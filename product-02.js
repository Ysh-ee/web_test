gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray(".panel").forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: "top top", 
//     pin: true, 
//     pinSpacing: false 
//         // markers:true    //@@@
//   });
// });

//--------------------sec part anim--------------------
// gsap.from(".artic-img",{
//   scrollTrigger:{
//       trigger:".wrapper",
//       start:"top center",
//       end:"50% center",
//       scrub:2,
//       markers:true    //@@@
//   },
//   x:500,
//   // ease:"none",
//   // duration: 1
// });

//-------- img anim(right to mid)
gsap.from(".artic-img",{
  scrollTrigger:{
    trigger:".wrapper",
    toggleActions: "restart none resume none",
    start:"top center",
    // end: () => "+=" + document.querySelector(".artic-img").offsetWidth + " center",
    end:"center center",
    // markers:true    //@@@
  },
  x:500,
  ease: 3,
  duration: 1,
});

//---------text anim (left to mid)
gsap.from(".artic-group",{
  scrollTrigger:{
    trigger:".wrapper",
    toggleActions: "restart none resume none",
    start:"top center",
    // end: () => "+=" + document.querySelector(".artic-img").offsetWidth + " center",
    end:"center center",
    // markers:true    //@@@
  },
  x:-500,
  ease: true,
  duration: 1,
});

//덮 hori-scroll
gsap.from(".wrapper",{
    scrollTrigger:{
        trigger:".wrapper",
        start:"top top",
        // end:"15% bottom",
        scrub:2,
        pinSpacing: false,
        pin: true, 

        // markers:true    //@@@
    },
    
});

// gsap.from(".wrapper",{
//     scrollTrigger:{
//         pin: true, 
//         trigger:".wrapper",
//         start:"center top",
//         // end:"15% bottom",
//         scrub:2,
//         pinSpacing: false,

//         // markers:true    //@@@
//     },
// });

// ScrollTrigger.create({
//     snap: 1 / 4 // snap whole page to the closest section!
//   });

//멈춤
// ScrollTrigger.create({
//   trigger:".wrapper",
//   start:"top top",
//   end: "+=600",
//   pin:".wrapper",
//     // markers:true    //@@@
// });

//------------------------function-hori-------
let scrollTween = gsap.to(".hori-item-group", {
    xPercent: -30,
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".hori-scroll",
      pin: true,
      scrub: 0.1,
      //snap: directionalSnap(1 / (sections.length - 1)),
      end: "+=2000",
    //   markers:true    //@@@

    }
  });


//   ------------------scrollchange---------

let blocks = gsap.utils.toArray("block"),
    currentBlock = blocks[0];

// gsap.defaults({overwrite: 'auto', duration: 0.3});

// stretch out the body height according to however many sections there are. 
// gsap.set("scroll-change-group", {height: (blocks.length * 100) + "%"});

// create a ScrollTrigger for each section
blocks.forEach((block, i) => {
  ScrollTrigger.create({
    // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
    trigger:".scroll-change-group",
    // start: () => (3+i - 0.1) * (innerHeight/3*(i+3) ),
    // end: () => (3+i + 0.1) * (innerHeight/3 ),
    // start:"top top",
    start: () => 3 * innerHeight + ((i+2)*950),
    end: () => 3 *innerHeight + ((i+2)*950) +150,
    // start: () => (i - 0.3) * innerHeight + 1000,
    // end: () => (i + 0.3) * innerHeight +1000,
    // when a new section activates (from either direction), set the section accordinglyl.
    // pin: true,
    // markers:true,    //@@@
    onToggle: self => self.isActive && setSection(block)
  });
});
gsap.from(".scroll-change-group",{
    scrollTrigger:{
        trigger:".scroll-change-group",
        start:"top top",
        end:"300% top",
        scrub:20,
        // pinSpacing: false,
        pin: true, 
        // markers:true    //@@@
    },
});
function setSection(newSection) {
  if (newSection !== currentBlock) {
    gsap.to(currentBlock, { autoAlpha: 0})
    gsap.to(newSection, { autoAlpha: 1});
    currentBlock = newSection;
  }
}
