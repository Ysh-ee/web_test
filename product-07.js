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
// const anim = gsap.to(".artic-img", { opacity: 0,});
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

gsap.from(".wrapper",{
    scrollTrigger:{
        trigger:".wrapper",
        start:"top top",
        // end:"bottom top",
        scrub:20,
        pinSpacing: false,
        pin: true, 
        // markers:true    //@@@
    },
});


// gsap.from(".wrapper",{
//     scrollTrigger:{
//         trigger:".wrapper",
//         start:"top top",
//         // end:"15% bottom",
//         scrub:2,
//         pinSpacing: false,
//         pin: true, 

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
      scrub: 0.5,
      //snap: directionalSnap(1 / (sections.length - 1)),
      end: "+=2000",
    //   markers:true    //@@@

    }
  });


//   ------------------scrollchange---------

// let blocks = gsap.utils.toArray("block"),
//     currentBlock = blocks[0];

// blocks.forEach((block, i) => {
//   ScrollTrigger.create({
//     trigger:".scroll-change-group",
//     start: () => 1 * innerHeight + ((i+2)*10) +150,
//     end: () => 1 *innerHeight + ((i+2)*10) +300,
//     // markers:true,    //@@@
//     onToggle: self => self.isActive && setSection(block)
//   });
// });

// gsap.from(".scroll-change-group",{
//     scrollTrigger:{
//         trigger:".scroll-change-group",
//         start:"top top",
//         end:"400% top",
//         scrub:20,
//         pin: true, 
//     },
// });

function setSection(newSection) {
  if (newSection !== currentBlock) {
    gsap.to(currentBlock, { autoAlpha: 0})
    gsap.to(newSection, { autoAlpha: 1});
    currentBlock = newSection;
  }
}

//hardware, software
let scrollTween2 = gsap.to(".hori-item-group-2", {
    xPercent: -35,
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".hori-scroll-hard",
      pin: true,
      scrub: 0.5,
      //snap: directionalSnap(1 / (sections.length - 1)),
      end: "+=2000",
    //   markers:true    //@@@

    }
  });
